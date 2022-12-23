import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fbtecvrgiqmemuulvyfa.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidGVjdnJnaXFtZW11dWx2eWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1NTgxNjMsImV4cCI6MTk4NTEzNDE2M30.IukPJ1qZtsEqkYoBZBX_wyLzxSIBsr1EXv9NoQC7A7E";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});