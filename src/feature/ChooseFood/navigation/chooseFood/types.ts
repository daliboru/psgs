import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignedInTabParamList } from "../signedIn/types";
import Screens from "./screenEnums";

export type ChooseFoodStackParamList = {
  [Screens.WHO_EATS]: undefined;
  [Screens.WHAT_EATS]: {
    eatsInGroup: boolean;
  };
  [Screens.LIST_OF_EATS]: {
    latitude: number;
    longitude: number;
    foodType?: string;
  };
};

export type ChooseFoodStackScreenProps<
  Screen extends keyof ChooseFoodStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<ChooseFoodStackParamList, Screen>,
  NativeStackScreenProps<SignedInTabParamList>
>;

export { Screens, Screens as ChooseFoodScreens };
