import { Button, ButtonProps } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import { googleSignIn } from "../../api/auth";

const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button
      titleStyle={{ fontWeight: "500" }}
      containerStyle={styles.container}
      buttonStyle={styles.button}
      {...props}
    />
  );
};

const Clear = (props: ButtonProps) => {
  return (
    <Button
      titleStyle={{ fontWeight: "500", fontSize: 16 }}
      containerStyle={styles.container}
      type="clear"
      {...props}
    />
  );
};

const Google = (props: ButtonProps) => {
  return (
    <Button
      title={"Login with Google"}
      onPress={googleSignIn}
      iconPosition="left"
      icon={{
        name: "logo-google",
        type: "ionicon",
        size: 15,
        color: "white",
      }}
      iconContainerStyle={{ marginRight: 10 }}
      containerStyle={styles.container}
      buttonStyle={styles.button}
      {...props}
    />
  );
};

ButtonComponent.Clear = Clear;
ButtonComponent.Google = Google;

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "black",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 30,
  },
});

export default ButtonComponent;
