import BottomSheet from "@gorhom/bottom-sheet";
import { Image, Text } from "@rneui/themed";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, ViewContainer } from "../../../components";
import { FoodCategoriesTemp } from "../components";
import { FoodTypes } from "../FoodTypes";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHAT_EATS_GROUP>;

export default function WhatEatsGroupScreen({ navigation }: Props) {
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["10%", "25%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

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
    <>
      <FoodCategoriesTemp navigation={navigation}>
        <Text h4 h4Style={styles.title}>
          Selektuj i has
        </Text>
        <View style={styles.buttonsContainer}>
          {FoodTypes.map(({ title, image, optionName }, index) => (
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
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <ViewContainer>
          <Text>{`Selektovano: ${selectedFood}`}</Text>
          <Button title="Hasss!" />
        </ViewContainer>
      </BottomSheet>
    </>
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
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  bottomContainer: {},
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
