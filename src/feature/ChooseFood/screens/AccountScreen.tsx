import { View, Text } from "react-native";
import React from "react";
import useCurrentUser from "../../../hooks/useCurrentUser";

type Props = {};

const AccountScreen = (props: Props) => {
  // const { user } = useCurrentUser()
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;
