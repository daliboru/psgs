import { makeRedirectUri, startAsync } from "expo-auth-session";
import { supabase, supabaseUrl } from "../supebase";
global.Buffer = require("buffer").Buffer;

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
    await supabase.auth.setSession({ access_token, refresh_token });
  }
};
