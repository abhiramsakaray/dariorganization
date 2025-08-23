import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'waitlist.csv');

  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });

    fs.mkdirSync(dataDir, { recursive: true });
    fs.appendFileSync(filePath, `${email},${new Date().toISOString()}\n`);
    return res.status(200).json({ success: true });
  }

  if (req.method === 'GET') {
    if (!fs.existsSync(filePath)) return res.status(404).end();
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=waitlist.csv');
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  res.status(405).end();
}
