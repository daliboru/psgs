import React from "react";
import { Linking, ScrollView, View } from "react-native";
import { Button, Loader } from "../../../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodCategories } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHAT_EATS_ALONE>;

export default function WhatEatsAloneScreen({ navigation, route }: Props) {
  const {
    location: { latitude, longitude },
    status,
    isLoading,
  } = useCurrentLocation();

  if (isLoading) {
    return <Loader />;
  }

  const onChooseFood = (foodType?: string) => {
    navigation.navigate(ChooseFoodScreens.LIST_OF_EATS, {
      latitude,
      longitude,
      foodType,
    });
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 5 }}>
        {status !== "granted" && (
          <Button.Clear
            title="Enable location"
            onPress={Linking.openSettings}
          />
        )}
        <FoodCategories onChooseFood={onChooseFood} />
      </View>
    </ScrollView>
  );
}
