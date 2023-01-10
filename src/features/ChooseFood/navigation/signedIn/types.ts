import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { ChooseFoodStackParamList } from "../chooseFood/types";
import Screens from "./screenEnums";

export type SignedInTabParamList = {
  [Screens.CHOOSE_FOOD]: NavigatorScreenParams<ChooseFoodStackParamList>;
  [Screens.ACCOUNT]: undefined;
};

export type SignedInTabScreenProps<Screen extends keyof SignedInTabParamList> =
  BottomTabScreenProps<SignedInTabParamList, Screen>;

export { Screens as SignedInScreens, Screens };
