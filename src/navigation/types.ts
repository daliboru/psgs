import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screens from "./screenEnums";

export type RootStackParamList = {
  [Screens.SIGNED_IN]: undefined;
  [Screens.SIGN_UP]: undefined;
  [Screens.LOGIN]: undefined;
  [Screens.ERROR]: { error: string };
  [Screens.NOT_FOUND]: undefined;

  //   [Screens.PRIVACY_POLICY]: { url: string };
  //   [Screens.TERMS_OF_USE]: { url: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export { Screens, Screens as RootScreens };
