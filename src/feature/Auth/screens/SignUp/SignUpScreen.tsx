import { Button } from "@rneui/themed";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import { googleSignIn } from "../../../../api/auth";
import { Input } from "../../../../components";

type formData = {
  username: string;
  password: string;
  repeatPassword: string;
};

type Props = {};

const SignUpScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ref = useRef<TextInput>(null);
  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.contentView}>
      {/* sign up form */}
      <Input
        name="username"
        placeholder="username"
        ref={ref}
        control={control}
      />
      <Input
        name="password"
        placeholder="password"
        ref={ref}
        control={control}
      />
      <Input
        placeholder="repeatPassword"
        name="repeat password"
        errorMessage="password doesn't match"
        errorStyle={{ color: "red" }}
        renderErrorMessage={false}
        control={control}
        ref={ref}
      />
      <Button
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        containerStyle={{ marginVertical: 10 }}
      />

      <View style={styles.buttonsContainer}>
        <Button
          onPress={googleSignIn}
          iconPosition="left"
          icon={{
            name: "logo-google",
            type: "ionicon",
            size: 15,
            color: "white",
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: "500" }}
          title={"Login with Google"}
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
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
});
