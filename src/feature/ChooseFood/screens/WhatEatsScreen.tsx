import { Text } from "@rneui/themed";
import React from "react";
import { Linking, ScrollView, View } from "react-native";
import { Button, ViewContainer } from "../../../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodCategories } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHAT_EATS>;

export default function WhatEatsScreen({ navigation, route }: Props) {
  const { eatsInGroup } = route.params;
  const {
    location: { latitude, longitude },
    status,
    isLoading,
  } = useCurrentLocation();

  if (isLoading) {
    return <Text>Loading...</Text>;
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
      <View style={{ margin: 5 }}>
        {status !== "granted" && (
          <Button.Clear
            title="Enable location"
            onPress={Linking.openSettings}
          />
        )}
        <FoodCategories onChooseFood={onChooseFood} eatsInGroup={eatsInGroup} />
      </View>
    </ScrollView>
  );
}
