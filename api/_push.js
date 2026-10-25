// Shared server code for push notifications: Supabase admin client, the daily alert list, sending.
import { createClient } from '@supabase/supabase-js';
import webpush from 'web-push';

const env = process.env;
export const admin = () => createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

webpush.setVapidDetails('mailto:noreply@miriz.vercel.app', env.VAPID_PUBLIC_KEY, env.VAPID_PRIVATE_KEY);

/* ---------- dates (Israel time) ---------- */
export const todayIL = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' }).format(new Date());
const P = s => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };
const add = (s, n) => { const d = P(s); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const diff = (a, b) => Math.round((P(b) - P(a)) / 864e5);
const money = n => '₪' + Math.round(n).toLocaleString('he-IL');
const dLong = s => new Intl.DateTimeFormat('he-IL', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }).format(P(s));

/* ---------- the same alerts the bell shows in the app (public/app.js › alerts) ---------- */
export function dailyAlerts(S, today) {
  const a = [], st = S.settings || {}, tm = add(today, 1), B = S.bookings || [];
  const nights = b => Math.max(0, diff(b.checkIn, b.checkOut));
  if (st.arrive) {
    B.filter(b => b.checkIn === today).forEach(b => a.push(`${b.dog} מגיע/ה היום`));
    B.filter(b => b.checkIn === tm).forEach(b => a.push(`מחר מגיע/ה ${b.dog}`));
  }
  if (st.depart) B.filter(b => b.checkOut === today).forEach(b => a.push(`${b.dog} חוזר/ת הביתה היום · לגבות ${money(nights(b) * b.price)}`));
  const starts = [...((S.cycle && S.cycle.starts) || [])].sort();
  if (st.cycle && starts.length) {
    const lens = []; for (let i = 1; i < starts.length; i++) lens.push(diff(starts[i - 1], starts[i]));
    const recent = lens.slice(-6);
    const avg = recent.length ? Math.round(recent.reduce((x, y) => x + y, 0) / recent.length) : 28;
    const next = add(starts[starts.length - 1], avg), until = diff(today, next);
    if (until >= 0 && until <= 3) a.push(until === 0 ? 'המחזור צפוי להתחיל היום' : `המחזור צפוי בעוד ${until} ימים (${dLong(next)})`);
  }
  (S.events || []).filter(e => e.date === today).forEach(e => a.push(`${e.title}${e.time ? ' · ' + e.time : ''}`));
  const open = (S.tasks || []).filter(t => t.date === today && !t.done).length;
  if (open) a.push(open === 1 ? 'משימה פתוחה אחת להיום' : `${open} משימות פתוחות להיום`);
  if (st.pay && P(today).getUTCDay() === 4) a.push('תזכורת: לעדכן הוצאות השבוע');
  return a;
}

/* send one payload to every device of a user; drop devices the push service says are gone */
export async function sendToUser(db, userId, payload) {
  const { data: subs, error } = await db.from('push_subscriptions').select('endpoint,keys').eq('user_id', userId);
  if (error) throw error;
  let sent = 0;
  for (const s of subs) {
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: s.keys }, JSON.stringify(payload), { TTL: 6 * 3600 });
      sent++;
    } catch (e) {
      if (e.statusCode === 404 || e.statusCode === 410) await db.from('push_subscriptions').delete().eq('endpoint', s.endpoint);
      else console.error('push failed', e.statusCode, e.body);
    }
  }
  return sent;
}
