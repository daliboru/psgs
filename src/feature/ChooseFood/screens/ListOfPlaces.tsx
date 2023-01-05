import { View, Text } from "react-native";
import React from "react";
import { GOOGLE_MAPS_KEY } from "@env";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.LIST_OF_FOOD_PLACES>;

const ListOfPlaces = ({ route }: Props) => {
  const { latitude, longitude, range, foodType } = route.params;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_MAPS_KEY}&lat=${latitude}&lng=${longitude}&radius=${range}&keyword=${foodType}&opennow`;
  console.log(url);
  return (
    <View>
      <Text>ListOfPlaces</Text>
    </View>
  );
};

export default ListOfPlaces;
