import React from "react";
import { View } from "react-native";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodTypes } from "../FoodTypes";
import { FoodButton, FoodCategoriesTemp } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";
import { Divider } from "@rneui/themed";
import { Button } from "../../../components";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHAT_EATS_ALONE>;

export default function WhatEatsAloneScreen({ navigation }: Props) {
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
    <FoodCategoriesTemp>
      <Button
        onPress={() => onChooseFood()}
        title="Šta god, samo da je jestivo"
        containerStyle={{
          marginVertical: 10,
          marginHorizontal: 5,
        }}
      />
      <Divider style={{ marginBottom: 5 }} />
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
