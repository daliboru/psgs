import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignedInTabParamList } from "../feature/ChooseFood/navigation/signedIn/types";
import Screens from "./screenEnums";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  [Screens.SIGNED_IN]: NavigatorScreenParams<SignedInTabParamList> | undefined;
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
