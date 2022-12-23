import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import Screens from "../feature/ChooseFood/navigation/screenEnums";
import { RootStackParamList } from "../feature/ChooseFood/navigation/types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      [Screens.SIGNED_IN]: "",
      [Screens.ERROR]: "error",
      [Screens.NOT_FOUND]: "*",
    },
  },
};

export default linking;
