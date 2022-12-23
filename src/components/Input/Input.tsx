import { Input, InputProps } from "@rneui/themed";
import React, { forwardRef, RefObject } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { TextInput } from "react-native";

interface Props extends InputProps {
  control: Control<FieldValues, any>;
  name: string;
}

export type TextInputRef = TextInput;

const InputComponent = forwardRef<TextInputRef, Props>((props, ref) => {
  const { control, name } = props;
  const { field } = useController({
    control: control,
    defaultValue: "",
    name: name,
  });

  return (
    <Input
      ref={ref}
      onChangeText={field.onChange}
      value={field.value}
      {...props}
    />
  );
});

export default InputComponent;
