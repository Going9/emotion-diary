create or replace function auth.create_profiles()
returns trigger as $$
begin
  insert into public.profiles (id, name, user_name, email)
  values (
    new.id,
    new.raw_user_meta_data->>'name',
    new.raw_user_meta_data->>'user_name',
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger auth_users_after_insert_create_profiles
  after insert on auth.users
  for each row
  execute function auth.create_profiles();