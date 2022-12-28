import { makeRedirectUri, startAsync } from "expo-auth-session";
import { supabase, supabaseUrl } from "../supebase";

export const googleSignIn = async () => {
  const redirectUrl = makeRedirectUri({
    path: "/auth/callback",
  });

  const authResponse = await startAsync({
    authUrl: `${supabaseUrl}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`,
    returnUrl: redirectUrl,
  });

  if (authResponse.type === "success") {
    const { access_token, refresh_token } = authResponse.params;
    global.Buffer = require("buffer").Buffer;
    await supabase.auth.setSession({ access_token, refresh_token });
  }
};
