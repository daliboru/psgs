import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { ChooseFoodScreens } from "../features/ChooseFood/navigation/chooseFood/types";
import { SignedInScreens } from "../features/ChooseFood/navigation/signedIn/types";
import { RootScreens, RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      [RootScreens.SIGNED_IN]: {
        screens: {
          [SignedInScreens.CHOOSE_FOOD]: {
            screens: {
              [ChooseFoodScreens.WHO_EATS]: "whoEats",
              [ChooseFoodScreens.WHAT_EATS_ALONE]: "whatEatsAlone",
              [ChooseFoodScreens.WHAT_EATS_GROUP]: "whatEatsGroup",
              [ChooseFoodScreens.LIST_OF_EATS]: {
                path: "listOfEats/:latitude/:longitude/:foodType?",
                parse: {
                  latitude: Number,
                  longitude: Number,
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

      //   [RootScreens.PRIVACY_POLICY]: "privacyPolicy",
      //   [RootScreens.TERMS_OF_USE]: "termsOfUse",
    },
  },
};

export default linking;
