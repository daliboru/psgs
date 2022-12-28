import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screens from "./screenEnums";

export type ChooseFoodStackParamList = {
  [Screens.CHOOSE_FOOD]: undefined;
  [Screens.ACCOUNT]: undefined;
};

export type ChooseFoodStackScreenProps<
  Screen extends keyof ChooseFoodStackParamList
> = NativeStackScreenProps<ChooseFoodStackParamList, Screen>;
