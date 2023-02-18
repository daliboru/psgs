import { FAB, Text } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodButton, FoodCategoriesTemp } from "../components";
import { FoodTypes } from "../FoodTypes";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHAT_EATS_GROUP>;

export default function WhatEatsGroupScreen({ navigation }: Props) {
  const [selectedFood, setSelectedFood] = useState<string[]>([]);

  const {
    location: { latitude, longitude },
  } = useCurrentLocation();

  const onPressCheckbox = useCallback(
    (optionName: string) => {
      setSelectedFood((prevSelectedFood) => {
        if (prevSelectedFood.includes(optionName)) {
          return prevSelectedFood.filter(
            (selectedFoodOptionName) => selectedFoodOptionName !== optionName
          );
        } else {
          return [...prevSelectedFood, optionName];
        }
      });
    },
    [setSelectedFood]
  );

  const onChooseFood = () => {
    const foodType = selectedFood.join(",");
    navigation.navigate(ChooseFoodScreens.LIST_OF_EATS, {
      latitude,
      longitude,
      foodType,
    });
  };

  return (
    <>
      <FoodCategoriesTemp
        FABComponent={
          <FAB
            onPress={onChooseFood}
            visible={selectedFood.length > 0}
            style={{
              position: "absolute",
              bottom: 0,
              margin: 16,
            }}
            title="Haaaaasss"
            color="white"
            titleStyle={{ fontSize: 30, fontWeight: "bold", color: "black" }}
            containerStyle={{ width: "100%" }}
            buttonStyle={{ height: "100%", width: "100%" }}
          />
        }
      >
        <Text h4 h4Style={styles.title}>
          Selektuj i has
        </Text>
        <View style={styles.buttonsContainer}>
          {FoodTypes.map(({ title, image, optionName }) => (
            <FoodButton.Select
              key={image}
              title={title}
              image={image}
              optionName={optionName}
              onPressCheckbox={onPressCheckbox}
              selectedFood={selectedFood}
            />
          ))}
        </View>
      </FoodCategoriesTemp>
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
});
