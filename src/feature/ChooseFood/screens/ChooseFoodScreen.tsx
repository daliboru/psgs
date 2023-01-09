import { Text } from "@rneui/themed";
import React, { useState } from "react";
import { Linking, ScrollView } from "react-native";
import { Button, ViewContainer } from "../../../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodCategories } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.FOOD_CATEGORIES>;

export default function ChooseFoodScreen({ navigation, route }: Props) {
  const { eatingOption } = route.params;
  const {
    location: { latitude, longitude },
    status,
    isLoading,
  } = useCurrentLocation();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const onChooseFood = (foodType?: string) => {
    navigation.navigate(ChooseFoodScreens.LIST_OF_FOOD_PLACES, {
      latitude,
      longitude,
      foodType,
    });
  };

  return (
    <ScrollView>
      <ViewContainer>
        {status !== "granted" && (
          <Button.Clear
            title="Enable location"
            onPress={Linking.openSettings}
          />
        )}
        {eatingOption === "individual" ? (
          <FoodCategories onChooseFood={onChooseFood} />
        ) : (
          <Text>{"Group food"}</Text>
        )}
      </ViewContainer>
    </ScrollView>
  );
}
