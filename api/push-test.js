// Sends a test notification to the signed-in user's devices (Settings › "שליחת התראת ניסיון").
import { admin, sendToUser } from './_push.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const token = (req.headers.authorization || '').replace(/^Bearer /, '');
  const db = admin();
  const { data, error } = await db.auth.getUser(token);
  if (error || !data.user) return res.status(401).end();
  const sent = await sendToUser(db, data.user.id, { title: 'miriz', body: 'ההתראות עובדות! כל בוקר ב-8 תקבל/י כאן את מה שיש היום.', tag: 'test' });
  res.json({ sent });
}
