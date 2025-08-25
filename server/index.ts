import { fileURLToPath } from "url";
import { join } from "path";
import path from "path";
import { existsSync } from "fs";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { saveEmailToWaitlist } from "./waitlist.js";
import fs from "fs/promises";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Proper __filename and __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  // Serve React static build from correct path
  const clientBuildPath = path.join(__dirname, "../dist/public");
  app.use(express.static(clientBuildPath));
  // Serve index.html for all non-API routes
  app.get(/^\/(?!api\/).*/, (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });

  // API endpoint to save email to waitlist and send confirmation email
  app.post("/api/waitlist", async (req, res) => {
    const { email, name } = req.body;
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Invalid email" });
    }
    try {
      await saveEmailToWaitlist(email, name);

      // Load and personalize the HTML template (always from project root)
      const templatePath = path.join(process.cwd(), "server", "emailTemplates", "waitlist.html");
      let html = await fs.readFile(templatePath, "utf-8");
      html = html.replace("{{name}}", name ? name : "there");

      // Send confirmation email
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "DARI Waitlist Registration Successful",
        html
      });

      res.json({ success: true });
    } catch (err) {
      console.error(err); // Log the actual error for debugging
      res.status(500).json({ error: "Failed to save to waitlist or send email" });
    }
  });

  // (Optional) Remove file-based download-waitlist endpoint if not needed
  // app.get("/download-waitlist", (req, res) => {
  //   const filePath = join(__dirname, "../data/waitlist.txt");
  //   if (!existsSync(filePath)) {
  //     return res.status(404).send("Waitlist file not found.");
  //   }
  //   res.download(filePath, "waitlist.txt");
  // });

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();