import React from "react";
import { ScrollView } from "react-native";
import { ViewContainer } from "../../../components";
import FoodCategories from "../components/FoodCategories";
import Screens from "../navigation/screenEnums";
import { ChooseFoodStackScreenProps } from "../navigation/types";

type Props = ChooseFoodStackScreenProps<Screens.CHOOSE_FOOD>;

export default function ChooseFoodScreen(props: Props) {
  return (
    <ScrollView>
      <ViewContainer>
        {/* <RangeSlider /> */}
        <FoodCategories />
      </ViewContainer>
    </ScrollView>
  );
}
