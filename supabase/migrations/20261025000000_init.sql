-- miriz: one JSON state document per user + private file storage for documents.

create table if not exists public.app_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

drop policy if exists "own state select" on public.app_state;
drop policy if exists "own state insert" on public.app_state;
drop policy if exists "own state update" on public.app_state;
drop policy if exists "own state delete" on public.app_state;

create policy "own state select" on public.app_state
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "own state insert" on public.app_state
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "own state update" on public.app_state
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own state delete" on public.app_state
  for delete to authenticated using ((select auth.uid()) = user_id);

-- documents bucket: files live under "<user id>/<doc id>"
insert into storage.buckets (id, name, public, file_size_limit)
values ('docs', 'docs', false, 26214400)
on conflict (id) do nothing;

drop policy if exists "own docs select" on storage.objects;
drop policy if exists "own docs insert" on storage.objects;
drop policy if exists "own docs update" on storage.objects;
drop policy if exists "own docs delete" on storage.objects;

create policy "own docs select" on storage.objects
  for select to authenticated using (bucket_id = 'docs' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "own docs insert" on storage.objects
  for insert to authenticated with check (bucket_id = 'docs' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "own docs update" on storage.objects
  for update to authenticated using (bucket_id = 'docs' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "own docs delete" on storage.objects
  for delete to authenticated using (bucket_id = 'docs' and (storage.foldername(name))[1] = (select auth.uid())::text);
