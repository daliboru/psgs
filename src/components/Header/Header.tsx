import { Header, Text } from "@rneui/themed";
import React from "react";

export default function HeaderComponent() {
  return (
    <Header
      centerComponent={
        <Text h4={true} h4Style={{ fontWeight: "bold", color: "white" }}>
          Pijan sam, gladan sam
        </Text>
      }
      rightContainerStyle={{
        justifyContent: "center",
      }}
    />
  );
}
