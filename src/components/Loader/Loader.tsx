import { View, Text } from "react-native";
import React from "react";
import { Dialog } from "@rneui/themed";

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Dialog.Loading />
    </View>
  );
};

export default Loader;
