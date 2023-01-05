import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screens from "./screenEnums";

export type ChooseFoodStackParamList = {
  [Screens.FOOD_CATEGORIES]: undefined;
  [Screens.LIST_OF_FOOD_PLACES]: {
    latitude: number;
    longitude: number;
    range: number;
    foodType: string;
  };
};

export type ChooseFoodStackScreenProps<
  Screen extends keyof ChooseFoodStackParamList
> = NativeStackScreenProps<ChooseFoodStackParamList, Screen>;

export { Screens, Screens as ChooseFoodScreens };
