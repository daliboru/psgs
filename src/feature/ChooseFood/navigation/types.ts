import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screens from "./screenEnums";

export type ChooseFoodStackParamList = {
  [Screens.SIGNED_IN]: undefined;
  [Screens.ERROR]: { error: string };
  [Screens.NOT_FOUND]: undefined;

  //:TODO: Add the screens here
  // [Screens.SIGNED_OUT]: SubNavigator<SignedOutParamsList>;
  // [Screens.SIGNED_IN]: SubNavigator<SignedInParamsList>;

  //   [Screens.FAQ]: { url: string };
  //   [Screens.PRIVACY_POLICY]: { url: string };
  //   [Screens.TERMS_OF_USE]: { url: string };
  //   [Screens.AGREEMENT_VIEW]: { agreementName: UserAgreements };
  //   [Screens.WEB_VIEW]: { url: string; showLoader?: boolean };
  // [Screens.BECOME_USER]: { sessionToken: string };
};

export type ChooseFoodStackScreenProps<
  Screen extends keyof ChooseFoodStackParamList
> = NativeStackScreenProps<ChooseFoodStackParamList, Screen>;
