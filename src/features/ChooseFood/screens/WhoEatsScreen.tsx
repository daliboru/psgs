import { Divider } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { ViewContainer } from "../../../components";
import { WhoEatsButton } from "../components";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.WHO_EATS>;

const WhoEatsScreen = ({ navigation }: Props) => {
  return (
    <ViewContainer>
      <View style={{ flexDirection: "row" }}>
        <WhoEatsButton
          iconName="person"
          onPress={() => navigation.navigate(ChooseFoodScreens.WHAT_EATS_ALONE)}
          title={"Sam jedem"}
        />
        <Divider orientation="vertical" />
        <WhoEatsButton
          iconName="people"
          onPress={() => navigation.navigate(ChooseFoodScreens.WHAT_EATS_GROUP)}
          title={"Više nas"}
        />
      </View>
    </ViewContainer>
  );
};

export default WhoEatsScreen;
