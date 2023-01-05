import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../../../../components";

type Props = {
  onChooseFood: (foodType: string) => void;
};

const buttons = [
  {
    title: "Burgeri",
    icon: {
      name: "fastfood",
      type: "material-icons",
      size: 50,
      color: "white",
    },
    color: "white",
  },
  {
    title: "Pizza",
    icon: {
      name: "pizza-slice",
      type: "font-awesome-5",
      size: 50,
      color: "white",
    },
  },
  {
    title: "Roštilj",
    icon: {
      name: "outdoor-grill",
      type: "material-icons",
      size: 50,
      color: "white",
    },
  },
  {
    title: "Giros",
    icon: {
      name: "tapas",
      type: "material-icons",
      size: 50,
      color: "white",
    },
  },
  {
    title: "Palačinke",
    icon: {
      name: "cheese",
      type: "font-awesome-5",
      size: 50,
      color: "white",
    },
  },
];

export default function FoodCategories({ onChooseFood }: Props) {
  return (
    <View style={styles.buttonsContainer}>
      {buttons.map(({ title, icon }, index) => (
        <Button
          key={index}
          title={title}
          icon={icon}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          radius={5}
          titleStyle={{ fontWeight: "bold", fontSize: 30 }}
          iconPosition="top"
          iconContainerStyle={{ marginBottom: 10 }}
          onPress={() => onChooseFood(title)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonContainer: {
    width: "50%",
    padding: 5,
  },
  button: {
    height: 250,
  },
});
