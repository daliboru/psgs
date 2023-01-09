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
  const onPress = (eatsInGroup: boolean) => {
    navigation.navigate(ChooseFoodScreens.WHAT_EATS, {
      eatsInGroup,
    });
  };
  return (
    <ViewContainer>
      <View style={{ flexDirection: "row" }}>
        <WhoEatsButton
          iconName="person"
          onPress={() => onPress(false)}
          title={"Sam jedem"}
        />
        <Divider orientation="vertical" />
        <WhoEatsButton
          iconName="people"
          onPress={() => onPress(true)}
          title={"Više nas"}
        />
      </View>
    </ViewContainer>
  );
};

export default WhoEatsScreen;
