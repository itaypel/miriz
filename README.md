# miriz

אפליקציית ניהול אישית — פנסיון כלבים, יומן, כספים, מעקב מחזור, פתקים ומסמכים.

- `public/` — האפליקציה (HTML/CSS/JS סטטי, בלי bundler)
- `public/cloud.js` — חיבור ל-Supabase: התחברות, סנכרון נתונים, אחסון קבצים
- `supabase/migrations/` — סכמת מסד הנתונים (טבלת `app_state` + bucket `docs`, עם RLS)
- `design/miriz.html` — קובץ העיצוב המקורי

## Deploy
Vercel מריץ `npm run build`, שכותב `public/config.js` מתוך משתני הסביבה
`SUPABASE_URL` ו-`SUPABASE_ANON_KEY`. בלעדיהם האפליקציה עובדת במצב מקומי (localStorage).

## פיתוח מקומי
```
SUPABASE_URL=... SUPABASE_ANON_KEY=... npm run dev
```
