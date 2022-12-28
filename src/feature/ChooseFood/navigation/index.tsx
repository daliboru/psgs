import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Header } from "../../../components";
import ChooseFoodScreen from "../screens/ChooseFoodScreen";
import Screens from "./screenEnums";
import { ChooseFoodStackParamList } from "./types";

const Stack = createNativeStackNavigator<ChooseFoodStackParamList>();

export default function ChooseFoodNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.CHOOSE_FOOD}
        component={ChooseFoodScreen}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}
