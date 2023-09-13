import { createClient } from '@supabase/auth-helpers-sveltekit';
const PUBLIC_SUPABASE_URL = 'https://viltarurfyjhvgnbpcbl.supabase.co';
const PUBLIC_SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbHRhcnVyZnlqaHZnbmJwY2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0MjIwNjIsImV4cCI6MTk5MTk5ODA2Mn0.9liQPEkMjgKlV3uVOfQa-ebXvpWTQfWtr5JpOW4JK4s';
export const supabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
