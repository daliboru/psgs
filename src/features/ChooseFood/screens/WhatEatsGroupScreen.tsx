import { Dialog, Divider, Image, Text } from "@rneui/themed";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Loader } from "../../../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { FoodCategoriesTemp } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHAT_EATS_GROUP>;

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

export default function WhatEatsGroupScreen({ navigation }: Props) {
  const [selectedFood, setSelectedFood] = useState<string[]>([]);

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

  return (
    <FoodCategoriesTemp navigation={navigation}>
      <Text>{`Selektovano: ${selectedFood}`}</Text>
      <View style={styles.buttonsContainer}>
        {buttons.map(({ title, image, optionName }, index) => (
          <FoodSelectionButton
            key={index}
            title={title}
            image={image}
            optionName={optionName}
            onPressCheckbox={onPressCheckbox}
            selectedFood={selectedFood}
          />
        ))}
      </View>
    </FoodCategoriesTemp>
  );
}

const FoodSelectionButton = ({
  title,
  image,
  optionName,
  onPressCheckbox,
  selectedFood,
}: {
  title: string;
  image: string;
  optionName: string;
  onPressCheckbox: (optionName: string) => void;
  selectedFood: string[];
}) => (
  <TouchableOpacity
    onPress={() => onPressCheckbox(optionName)}
    style={styles.touchableContainer}
  >
    <Image
      source={{ uri: image }}
      style={[
        styles.imageItem,
        {
          backgroundColor: selectedFood.includes(optionName)
            ? "rgba(0,0,0,0.9)"
            : "rgba(0,0,0,0.5)",
        },
      ]}
      PlaceholderContent={<ActivityIndicator />}
      containerStyle={styles.imageContainer}
    />
    <View style={styles.centredText}>
      <Text h2 h2Style={{ fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  touchableContainer: {
    width: "50%",
    padding: 5,
  },
  centredText: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 250,
    borderRadius: 5,
  },
  imageItem: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 250,
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});
