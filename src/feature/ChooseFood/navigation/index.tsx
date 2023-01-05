import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Header, Icon } from "../../../components";
import { AccountScreen, ChooseFoodScreen } from "../screens";
import Screens from "./screenEnums";
import { ChooseFoodStackParamList } from "./types";

const Tab = createBottomTabNavigator<ChooseFoodStackParamList>();

export default function ChooseFoodNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === Screens.CHOOSE_FOOD) {
            iconName = focused ? "restaurant" : "restaurant-outline";
          } else if (route.name === Screens.ACCOUNT) {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = "";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name={Screens.CHOOSE_FOOD}
        component={ChooseFoodScreen}
        options={{
          title: "Choose Food",
        }}
      />
      <Tab.Screen
        name={Screens.ACCOUNT}
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
}
