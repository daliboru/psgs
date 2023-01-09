import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Icon } from "../../../../components";
import { AccountScreen } from "../../screens";
import ChooseFoodNavigation from "../chooseFood";
import { SignedInScreens, SignedInTabParamList } from "./types";

const Tab = createBottomTabNavigator<SignedInTabParamList>();

export default function SignedInNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={SignedInScreens.CHOOSE_FOOD}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === SignedInScreens.CHOOSE_FOOD) {
            iconName = focused ? "restaurant" : "restaurant-outline";
          } else if (route.name === SignedInScreens.ACCOUNT) {
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
        name={SignedInScreens.CHOOSE_FOOD}
        component={ChooseFoodNavigation}
        options={{ title: "Daj hranu", headerShown: false }}
      />
      <Tab.Screen
        name={SignedInScreens.ACCOUNT}
        component={AccountScreen}
        options={{ title: "Profil" }}
      />
    </Tab.Navigator>
  );
}
