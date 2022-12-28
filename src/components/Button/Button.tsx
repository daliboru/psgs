import { Button, ButtonProps } from "@rneui/themed";
import React from "react";

const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button
      titleStyle={{ fontWeight: "500" }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      buttonStyle={{
        backgroundColor: "black",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 30,
      }}
      {...props}
    />
  );
};

const Clear = (props: ButtonProps) => {
  return (
    <Button
      titleStyle={{ fontWeight: "500", fontSize: 16 }}
      containerStyle={{
        width: 300,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      type="clear"
      {...props}
    />
  );
};

ButtonComponent.Clear = Clear;

export default ButtonComponent;
