// Ensure the wastefiles directory exists in the public folder
const fs = require('fs');
const path = require('path');

const wastefilesDir = path.join(__dirname, '../client/public/wastefiles');
if (!fs.existsSync(wastefilesDir)) {
  fs.mkdirSync(wastefilesDir, { recursive: true });
  console.log('Created wastefiles directory:', wastefilesDir);
} else {
  console.log('wastefiles directory already exists:', wastefilesDir);
}
