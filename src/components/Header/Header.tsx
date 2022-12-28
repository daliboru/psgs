import { Header, Text } from "@rneui/themed";
import React from "react";
import { supabase } from "../../supebase";
import Button from "../Button";
import Icon from "../Icon";

export default function HeaderComponent() {
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Header
      centerComponent={
        <Text h4={true} h4Style={{ fontWeight: "bold", color: "white" }}>
          Pijan sam, gladan sam
        </Text>
      }
      rightComponent={
        <Icon name="log-out-outline" color="white" onPress={signOut} />
      }
      rightContainerStyle={{
        justifyContent: "center",
      }}
    />
  );
}
