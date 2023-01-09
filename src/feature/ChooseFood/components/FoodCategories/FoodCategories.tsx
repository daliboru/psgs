import { Image, Text } from "@rneui/themed";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../../../components";

type Props = {
  onChooseFood: (foodType?: string) => void;
  eatsInGroup: boolean;
};

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

export default function FoodCategories({ onChooseFood, eatsInGroup }: Props) {
  return (
    <>
      <Button
        onPress={() => onChooseFood()}
        title="Šta god, samo da je jestivo"
        containerStyle={{
          marginVertical: 10,
          marginHorizontal: 5,
        }}
      />
      {eatsInGroup ? (
        <Text>{"Group food"}</Text>
      ) : (
        <View style={styles.buttonsContainer}>
          {buttons.map(({ title, image, optionName }, index) => (
            <FoodButton
              key={index}
              title={title}
              image={image}
              optionName={optionName}
              onChooseFood={onChooseFood}
            />
          ))}
        </View>
      )}
    </>
  );
}

const FoodButton = ({
  title,
  image,
  optionName,
  onChooseFood,
}: {
  title: string;
  image: string;
  optionName: string;
  onChooseFood: (foodType: string) => void;
}) => {
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
