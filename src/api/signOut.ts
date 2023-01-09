import { supabase } from "../supebase";

export default async function signOut() {
  await supabase.auth.signOut();
}
