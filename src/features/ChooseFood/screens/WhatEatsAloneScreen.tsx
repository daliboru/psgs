import React from "react";
import { View } from "react-native";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodTypes } from "../FoodTypes";
import { FoodButton, FoodCategoriesTemp } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

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
        {FoodTypes.map(({ title, image, optionName }, index) => (
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
