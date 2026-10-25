// Runs every morning (vercel.json › crons): sends each subscribed user a summary of today.
import { admin, todayIL, dailyAlerts, sendToUser } from './_push.js';

export default async function handler(req, res) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) return res.status(401).end();
  const db = admin(), today = todayIL();
  const { data: subs, error } = await db.from('push_subscriptions').select('user_id');
  if (error) return res.status(500).json({ error: error.message });

  const users = [...new Set(subs.map(s => s.user_id))];
  let sent = 0;
  for (const uid of users) {
    const { data: row } = await db.from('app_state').select('data').eq('user_id', uid).maybeSingle();
    if (!row) continue;
    const items = dailyAlerts(row.data, today);
    if (!items.length) continue;
    sent += await sendToUser(db, uid, {
      title: items.length === 1 ? 'היום ב-miriz' : `${items.length} דברים להיום`,
      body: items.join('\n'),
      tag: `daily-${today}`
    });
  }
  res.json({ today, users: users.length, sent });
}
