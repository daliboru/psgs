import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FoodCategories from "../components/FoodCategories";
import RangeSlider from "../components/RangeSlider/RangeSlider";
import Screens from "../navigation/screenEnums";
import { ChooseFoodStackScreenProps } from "../navigation/types";

type Props = ChooseFoodStackScreenProps<Screens.CHOOSE_FOOD>;

export default function ChooseFoodScreen(props: Props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <RangeSlider /> */}
        <FoodCategories />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
});
