import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChooseFoodScreen, ListOfPlaces } from "../../screens";
import EatingOptions from "../../screens/EatingOptionsScreen";
import { ChooseFoodScreens, ChooseFoodStackParamList } from "./types";

const Stack = createNativeStackNavigator<ChooseFoodStackParamList>();

export default function ChooseFoodNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ChooseFoodScreens.EATING_OPTIONS}
        component={EatingOptions}
        options={{ title: "Ko sve jede?" }}
      />
      <Stack.Screen
        name={ChooseFoodScreens.FOOD_CATEGORIES}
        component={ChooseFoodScreen}
        options={{ title: "Šta hasaš?" }}
      />
      <Stack.Screen
        name={ChooseFoodScreens.LIST_OF_FOOD_PLACES}
        component={ListOfPlaces}
        options={{ title: "Ovo su opcije" }}
      />
    </Stack.Navigator>
  );
}
