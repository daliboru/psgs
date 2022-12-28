import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Button, Input } from "../../../../components";
import { supabase } from "../../../../supebase";

interface FormValues {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const ref = useRef<TextInput>(null);

  async function signInWithEmail({ email, password }: FormValues) {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
    if (data) {
      console.log("data", data);
    }
  }

  const onSubmit = (data: FormValues) => {
    signInWithEmail(data);
  };

  return (
    <View style={styles.contentView}>
      <Input name="email" placeholder="email" ref={ref} control={control} />
      <Input
        name="password"
        placeholder="password"
        ref={ref}
        control={control}
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
          loading={loading}
        />
        {/* <Text>or</Text>
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
          disabled={loading}
        /> */}
      </View>
    </View>
  );
};

export default LoginScreen;
export { FormValues as LoginFormValues };

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
