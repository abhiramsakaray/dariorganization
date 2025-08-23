
import { existsSync, mkdirSync, appendFileSync } from "fs";
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
}
