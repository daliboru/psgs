import { Text } from "@rneui/themed";
import React, { useState } from "react";
import { Linking, ScrollView } from "react-native";
import { Button, ViewContainer } from "../../../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodCategories, RangeSlider } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.FOOD_CATEGORIES>;

export default function ChooseFoodScreen({ navigation }: Props) {
  const [range, setRange] = useState(2000);
  const {
    location: { latitude, longitude },
    status,
    isLoading,
  } = useCurrentLocation();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const onSetRange = (range: number) => {
    setRange(range);
  };

  const onChooseFood = (foodType: string) => {
    navigation.navigate(ChooseFoodScreens.LIST_OF_FOOD_PLACES, {
      latitude,
      longitude,
      range,
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
        {/* <RangeSlider range={range} onSetRange={onSetRange} /> */}
        <FoodCategories onChooseFood={onChooseFood} />
      </ViewContainer>
    </ScrollView>
  );
}
