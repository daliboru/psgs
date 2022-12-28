import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList, Screens } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      [Screens.SIGNED_IN]: "",
      [Screens.SIGN_UP]: "signUp",
      [Screens.LOGIN]: "login",
      [Screens.ERROR]: "error",
      [Screens.NOT_FOUND]: "*",
    },
  },
};

export default linking;
