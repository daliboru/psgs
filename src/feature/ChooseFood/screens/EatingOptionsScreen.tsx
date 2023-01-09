import { Divider } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { Button, ViewContainer } from "../../../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.EATING_OPTIONS>;

const EatingOptions = (props: Props) => {
  return (
    <ViewContainer>
      <View style={{ flexDirection: "row" }}>
        <Button.Clear
          icon={{ name: "person", size: 40 }}
          iconContainerStyle={{ marginBottom: 10 }}
          iconPosition="top"
          containerStyle={{ width: "50%", paddingHorizontal: 5 }}
          buttonStyle={{ height: "100%" }}
          titleStyle={{ color: "black" }}
          title={"Sam jedem"}
          onPress={() =>
            props.navigation.navigate(ChooseFoodScreens.FOOD_CATEGORIES, {
              eatingOption: "individual",
            })
          }
        />
        <Divider orientation="vertical" />
        <Button.Clear
          icon={{ name: "people", size: 40 }}
          iconContainerStyle={{ marginBottom: 10 }}
          iconPosition="top"
          containerStyle={{ width: "50%", paddingHorizontal: 5 }}
          buttonStyle={{ height: "100%" }}
          titleStyle={{ color: "black" }}
          title={"Više nas"}
          onPress={() =>
            props.navigation.navigate(ChooseFoodScreens.FOOD_CATEGORIES, {
              eatingOption: "group",
            })
          }
        />
      </View>
    </ViewContainer>
  );
};

export default EatingOptions;
