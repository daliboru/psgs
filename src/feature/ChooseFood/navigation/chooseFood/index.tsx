import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListOfEatsScreen, WhatEatsScreen, WhoEatsScreen } from "../../screens";
import { ChooseFoodScreens, ChooseFoodStackParamList } from "./types";

const Stack = createNativeStackNavigator<ChooseFoodStackParamList>();

export default function ChooseFoodNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ChooseFoodScreens.WHO_EATS}
        component={WhoEatsScreen}
        options={{ title: "Ko sve jede?" }}
      />
      <Stack.Screen
        name={ChooseFoodScreens.WHAT_EATS}
        component={WhatEatsScreen}
        options={{ title: "Šta hasaš?" }}
      />
      <Stack.Screen
        name={ChooseFoodScreens.LIST_OF_EATS}
        component={ListOfEatsScreen}
        options={{ title: "Ovo su opcije" }}
      />
    </Stack.Navigator>
  );
}
