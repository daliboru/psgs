import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChooseFoodScreen, ListOfPlaces } from "../../screens";
import { ChooseFoodScreens, ChooseFoodStackParamList } from "./types";

const Stack = createNativeStackNavigator<ChooseFoodStackParamList>();

export default function ChooseFoodNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ChooseFoodScreens.FOOD_CATEGORIES}
        component={ChooseFoodScreen}
      />
      <Stack.Screen
        name={ChooseFoodScreens.LIST_OF_FOOD_PLACES}
        component={ListOfPlaces}
      />
    </Stack.Navigator>
  );
}
