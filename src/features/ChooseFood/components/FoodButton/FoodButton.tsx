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
  image: string;
  optionName: string;
  onChooseFood: (foodType: string) => void;
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
        source={{ uri: image }}
        style={styles.imageItem}
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
};

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
