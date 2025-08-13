
import { Router } from "express";
import { writeFile, existsSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";


const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");
const excelPath = join(__dirname, "../attached_assets/waitlist.xlsx");
const sheetName = "Waitlist";

// Lazy import for xlsx
let xlsx: typeof import("xlsx") | undefined = undefined;

router.post("/waitlist", async (req, res) => {
  const { email } = req.body;
  console.log("[WAITLIST] Incoming email:", email);
  if (!email || typeof email !== "string") {
    console.log("[WAITLIST] Invalid email received");
    return res.status(400).json({ error: "Invalid email" });
  }

  // Import xlsx only when needed
  if (!xlsx) xlsx = await import("xlsx");
  console.log("[WAITLIST] Using Excel path:", excelPath);

  let workbook;
  let worksheet;

  // If file exists, read it; else, create new
  if (existsSync(excelPath)) {
    console.log("[WAITLIST] Excel file exists, reading...");
    workbook = xlsx.read(readFileSync(excelPath), { type: "buffer" });
    worksheet = workbook.Sheets[sheetName] || xlsx.utils.aoa_to_sheet([["Email", "Date"]]);
  } else {
    console.log("[WAITLIST] Excel file does not exist, creating new...");
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.aoa_to_sheet([["Email", "Date"]]);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    // Ensure attached_assets exists
    if (!existsSync(join(__dirname, "../attached_assets"))) {
      mkdirSync(join(__dirname, "../attached_assets"));
    }
  }

  // Add new row
  const date = new Date().toISOString();
  const data = xlsx.utils.sheet_to_json<{ Email: string; Date: string }>(worksheet);
  console.log("[WAITLIST] Current data before push:", data);
  data.push({ Email: email, Date: date });
  const newSheet = xlsx.utils.json_to_sheet(data, { header: ["Email", "Date"] });
  workbook.Sheets[sheetName] = newSheet;
  xlsx.writeFile(workbook, excelPath);
  console.log("[WAITLIST] Email added and file written.");

  res.json({ success: true });
});

export default router;
