import { Input, InputProps } from "@rneui/themed";
import React, { forwardRef } from "react";
import { Control, useController } from "react-hook-form";
import { TextInput } from "react-native";

interface Props extends InputProps {
  //TODO: fix => Control<someValues, any>
  control: Control<any, any>;
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
      // @ts-ignore
      ref={ref}
      onChangeText={field.onChange}
      value={field.value}
      errorStyle={{ color: "red" }}
      {...props}
    />
  );
});

export default InputComponent;
