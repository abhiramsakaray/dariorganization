import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
// Ensure the waitlist table exists
const ensureTable = `
  CREATE TABLE IF NOT EXISTS waitlist (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;
pool.query(ensureTable).catch(console.error);

export async function saveEmailToWaitlist(email: string, name?: string) {
  if (!email || typeof email !== "string") return;
  const query = `INSERT INTO waitlist (email, name) VALUES ($1, $2);`;
  await pool.query(query, [email, name || null]);
}