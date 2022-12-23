import React from "react";
import { Text, View } from "react-native";
import { RootScreens, RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<RootScreens.ERROR>;

function ErrorScreen(props: Props) {
  const { route } = props;

  const error = route.params.error;

  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
}

export default ErrorScreen;
