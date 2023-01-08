import { URL } from "@env";
import { Text } from "@rneui/themed";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Button, Input } from "../../../../components";
import Screens from "../../../../navigation/screenEnums";
import { RootStackScreenProps } from "../../../../navigation/types";
import { supabase } from "../../../../supebase";

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
  full_name: string;
}

type Props = RootStackScreenProps<Screens.SIGN_UP>;

const SignUpScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const ref = useRef<TextInput>(null);

  async function signInWithEmail({ email, password }: FormValues) {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail({
    email,
    password,
    repeatPassword,
    full_name,
  }: FormValues) {
    setLoading(true);

    if (password === repeatPassword) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: URL,
          data: {
            full_name,
          },
        },
      });
      if (error) Alert.alert(error.message);
      setLoading(false);
    } else {
      Alert.alert("Passwords do not match!");
      setLoading(false);
    }
  }

  const onSubmit = (data: FormValues) => {
    signUpWithEmail(data);
  };

  return (
    <View style={styles.contentView}>
      <Input
        name="full_name"
        placeholder="full name"
        ref={ref}
        control={control}
      />
      <Input name="email" placeholder="email" ref={ref} control={control} />
      <Input
        name="password"
        placeholder="password"
        ref={ref}
        control={control}
        passwordRules="minlength: 8;"
        secureTextEntry
      />
      <Input
        placeholder="repeat password"
        name="repeatPassword"
        control={control}
        ref={ref}
        passwordRules="minlength: 8; "
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="Sign Up"
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
          loading={loading}
        />
        <Text>or</Text>
        <Button.Google disabled={loading} />
        <Button.Clear
          title="Already have an account?"
          onPress={() => navigation.navigate(Screens.LOGIN)}
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
