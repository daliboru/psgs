import React from "react";
import { View } from "react-native";
import { Loader } from "../../../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodButton, FoodCategoriesTemp } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

const buttons = [
  {
    optionName: "Burgers",
    title: "Burgeri",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
  },
  {
    optionName: "Pizza",
    title: "Pizza",
    image:
      "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1844&q=80",
  },
  {
    optionName: "BBQ",
    title: "Roštilj",
    image:
      "https://images.unsplash.com/photo-1614119068601-483274e9dcb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1906&q=80",
  },
  {
    optionName: "Gyros",
    title: "Giros",
    image:
      "https://images.unsplash.com/photo-1583060095186-852adde6b819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    optionName: "Crepes",
    title: "Palačinke",
    image:
      "https://images.unsplash.com/photo-1637036124732-cb0fab13bb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    optionName: "Sandwich",
    title: "Sendviči",
    image:
      "https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHAT_EATS_ALONE>;

export default function WhatEatsAloneScreen({ navigation, route }: Props) {
  const {
    location: { latitude, longitude },
  } = useCurrentLocation();

  const onChooseFood = (foodType?: string) => {
    navigation.navigate(ChooseFoodScreens.LIST_OF_EATS, {
      latitude,
      longitude,
      foodType,
    });
  };

  return (
    <FoodCategoriesTemp navigation={navigation}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {buttons.map(({ title, image, optionName }, index) => (
          <FoodButton
            image={image}
            title={title}
            optionName={optionName}
            key={index}
            onChooseFood={onChooseFood}
          />
        ))}
      </View>
    </FoodCategoriesTemp>
  );
}
