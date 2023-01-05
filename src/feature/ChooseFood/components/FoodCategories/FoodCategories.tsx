import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";

const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.GOOGLE_MAPS_KEY}&location=45.6144 20.0474&radius=200&keyword=rostilj&opennow`;

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

export default function FoodCategories() {
  const {location} = useCurrentLocation();

  console.log(location);
  
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
