import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supebase";

async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export default function useCurrentUser() {
  const { isLoading, data } = useQuery(["currentUser"], getCurrentUser, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { isLoading, user: data };
}
