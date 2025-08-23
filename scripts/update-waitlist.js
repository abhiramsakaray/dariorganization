// Script to manually update waitlist.xlsx in the public folder for static hosting
// Usage: node scripts/update-waitlist.js

const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const PUBLIC_WAITLIST_PATH = path.join(__dirname, '../client/public/wastefiles/waitlist.xlsx');

function addToWaitlist(email) {
  let workbook, worksheet;
  const sheetName = 'Waitlist';
  if (fs.existsSync(PUBLIC_WAITLIST_PATH)) {
    workbook = xlsx.readFile(PUBLIC_WAITLIST_PATH);
    worksheet = workbook.Sheets[sheetName] || xlsx.utils.aoa_to_sheet([["Email", "Date"]]);
  } else {
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.aoa_to_sheet([["Email", "Date"]]);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  }
  const data = xlsx.utils.sheet_to_json(worksheet);
  data.push({ Email: email, Date: new Date().toISOString() });
  const newSheet = xlsx.utils.json_to_sheet(data, { header: ["Email", "Date"] });
  workbook.Sheets[sheetName] = newSheet;
  xlsx.writeFile(workbook, PUBLIC_WAITLIST_PATH);
  console.log('Added to waitlist:', email);
}

// Example usage:
// addToWaitlist('test@example.com');

module.exports = { addToWaitlist };
