import { Image, Text } from "@rneui/themed";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type FoodButtonProps = {
  title: string;
  image: number;
  optionName: string;
  onChooseFood: (foodType: string) => void;
};

const ButtonContent = ({ title }: { title: string }) => {
  return (
    <View style={styles.centredText}>
      <Text h2 h2Style={{ fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </View>
  );
};

const FoodButton = ({
  title,
  image,
  optionName,
  onChooseFood,
}: FoodButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => onChooseFood(optionName)}
    >
      <Image
        source={image}
        style={styles.imageItem}
        PlaceholderContent={<ActivityIndicator />}
        containerStyle={styles.imageContainer}
      />
      <ButtonContent title={title} />
    </TouchableOpacity>
  );
};

const FoodButtonSelect = ({
  title,
  image,
  optionName,
  onPressCheckbox,
  selectedFood,
}: {
  title: string;
  image: number;
  optionName: string;
  onPressCheckbox: (optionName: string) => void;
  selectedFood: string[];
}) => (
  <TouchableOpacity
    style={styles.touchableContainer}
    onPress={() => onPressCheckbox(optionName)}
  >
    <Image
      source={image}
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
    <ButtonContent title={title} />
  </TouchableOpacity>
);

FoodButton.Select = FoodButtonSelect;

export default FoodButton;

const styles = StyleSheet.create({
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
