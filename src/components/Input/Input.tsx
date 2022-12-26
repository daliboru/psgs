import { Input, InputProps } from "@rneui/themed";
import React, { forwardRef, RefObject } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { TextInput } from "react-native";
import { RegisterFormValues } from "../../feature/Auth";

type Values = RegisterFormValues & FieldValues;

interface Props extends InputProps {
  control: Control<Values, any>;
  name: string;
}

const InputComponent = forwardRef<TextInput, Props>((props, ref) => {
  const { control, name } = props;
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <Input
      ref={ref}
      onChangeText={field.onChange}
      value={field.value}
      errorStyle={{ color: "red" }}
      {...props}
    />
  );
});

export default InputComponent;
