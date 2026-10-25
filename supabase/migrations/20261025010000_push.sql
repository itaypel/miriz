-- miriz: devices that receive push notifications (one row per browser/device)

create table if not exists public.push_subscriptions (
  endpoint text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  keys jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists push_subscriptions_user_id_idx on public.push_subscriptions (user_id);

alter table public.push_subscriptions enable row level security;

drop policy if exists "own push select" on public.push_subscriptions;
drop policy if exists "own push insert" on public.push_subscriptions;
drop policy if exists "own push update" on public.push_subscriptions;
drop policy if exists "own push delete" on public.push_subscriptions;

create policy "own push select" on public.push_subscriptions
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "own push insert" on public.push_subscriptions
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "own push update" on public.push_subscriptions
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own push delete" on public.push_subscriptions
  for delete to authenticated using ((select auth.uid()) = user_id);
