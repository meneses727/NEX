// Configuración compartida de Supabase para todo el sitio NEX
const SUPABASE_URL = 'https://iljxvjapyoenpucxenih.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsanh2amFweW9lbnB1Y3hlbmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MzQxNzAsImV4cCI6MjEwMTExMDE3MH0.wHgZ25wIcUH5ci6RgsiGvaI1fNTk9ZcLbpw2REjoh_4';

function getSupabaseClient() {
  if (!window._nexSupabaseClient) {
    window._nexSupabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return window._nexSupabaseClient;
}
