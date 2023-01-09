import { View, StyleSheet } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ViewContainer = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default ViewContainer;
