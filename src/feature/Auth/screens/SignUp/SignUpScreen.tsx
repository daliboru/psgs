import { Text } from "@rneui/themed";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import { googleSignIn } from "../../../../api/auth";
import { Button, Input } from "../../../../components";

interface FormValues {
  username: string;
  password: string;
  repeatPassword: string;
}

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const ref = useRef<TextInput>(null);
  const onSubmit = (data: FormValues) => console.log({ data, errors });

  return (
    <View style={styles.contentView}>
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
        passwordRules="required: lower; required: upper; required: digit; minlength: 8;"
        secureTextEntry
      />
      <Input
        placeholder="repeat password"
        name="repeatPassword"
        control={control}
        ref={ref}
        passwordRules="required: lower; required: upper; required: digit; minlength: 8; "
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
        <Text>or</Text>
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
          title={"Login with Google"}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
export { FormValues as RegisterFormValues };

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    marginTop: 20,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
