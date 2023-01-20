import { Header, Text } from "@rneui/themed";
import React from "react";

type Props = {
  title: string;
  leftComponent?: React.ReactElement;
  rightComponent?: React.ReactElement;
};

export default function HeaderComponent({
  title,
  rightComponent,
  leftComponent,
}: Props) {
  return (
    <Header
      centerComponent={
        <Text h4={true} h4Style={{ fontWeight: "bold", color: "white" }}>
          {title}
        </Text>
      }
      rightComponent={rightComponent}
      rightContainerStyle={{
        justifyContent: "center",
      }}
      leftComponent={leftComponent}
    />
  );
}
