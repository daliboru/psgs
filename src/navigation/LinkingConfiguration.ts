import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { ChooseFoodScreens } from "../feature/ChooseFood/navigation/chooseFood/types";
import { SignedInScreens } from "../feature/ChooseFood/navigation/signedIn/types";
import { RootScreens, RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      [RootScreens.SIGNED_IN]: {
        screens: {
          [SignedInScreens.CHOOSE_FOOD]: {
            screens: {
              [ChooseFoodScreens.FOOD_CATEGORIES]: "foodCategories",
              [ChooseFoodScreens.LIST_OF_FOOD_PLACES]: {
                path: "listOfFoodPlaces/:latitude/:longitude/:range/:foodType",
                parse: {
                  latitude: Number,
                  longitude: Number,
                  range: Number,
                  foodType: String,
                },
              },
            },
          },
          [SignedInScreens.ACCOUNT]: "account",
        },
      },
      [RootScreens.SIGN_UP]: "signUp",
      [RootScreens.LOGIN]: "login",
      [RootScreens.ERROR]: "error",
      [RootScreens.NOT_FOUND]: "*",
    },
  },
};

export default linking;
