

import { existsSync, mkdirSync, appendFileSync, copyFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..", ".");
const dataDir = join(__dirname, "../data");
const txtPath = join(dataDir, "waitlist.txt");

export function saveEmailToWaitlist(email: string) {
  if (!email || typeof email !== "string") return;
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir);
  }
  const line = `${email}\t${new Date().toISOString()}\n`;
  appendFileSync(txtPath, line, { encoding: "utf8" });

  // Only copy to dist/public for production
  const distPublicDir = join(__dirname, "../dist/public");
  const distWaitlist = join(distPublicDir, "waitlist.txt");
  try {
    if (existsSync(txtPath)) {
      // Ensure dist/public exists
      if (!existsSync(distPublicDir)) {
        mkdirSync(distPublicDir, { recursive: true });
      }
      copyFileSync(txtPath, distWaitlist);
    }
  } catch (e) {
    console.error("Failed to copy waitlist.txt to dist:", e);
  }
}
