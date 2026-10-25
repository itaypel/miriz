// Writes public/config.js from env vars so the static app knows its Supabase project.
// Works with plain SUPABASE_* vars or the ones the Vercel Supabase integration adds.
import { writeFileSync } from 'node:fs';

const env = process.env;
const url = env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || '';
const key = env.SUPABASE_ANON_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_PUBLISHABLE_KEY || '';

if (!url || !key) console.warn('[build] SUPABASE_URL / SUPABASE_ANON_KEY missing — the app will run in local-only mode');

writeFileSync(new URL('../public/config.js', import.meta.url),
  `window.MIRIZ_CONFIG=${JSON.stringify({ supabaseUrl: url, supabaseAnonKey: key })};\n`);
console.log('[build] wrote public/config.js');
