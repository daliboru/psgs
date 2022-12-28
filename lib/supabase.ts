import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { PROJECT_ANON_KEY, PROJECT_URL } from "@env";

export const supabaseUrl = PROJECT_URL || "";
const supabaseAnonKey = PROJECT_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
