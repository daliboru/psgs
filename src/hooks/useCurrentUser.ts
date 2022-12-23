import { Session } from "@supabase/supabase-js";
import React, { useState, useEffect } from "react";
import { supabase } from "../supebase";

export default function useCurrentUser() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session?.user || null;
}
