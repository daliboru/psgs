import React from "react";
import { Button, Icon } from "../../../../components";

type Props = {
  iconName: string;
  title: string;
  onPress?: () => void;
};

const WhoEatsButton = ({ iconName, title, onPress }: Props) => {
  return (
    <Button.Clear
      icon={<Icon name={iconName} size={40} />}
      iconContainerStyle={{ marginBottom: 10 }}
      iconPosition="top"
      containerStyle={{ width: "50%", paddingHorizontal: 5 }}
      buttonStyle={{ height: "100%" }}
      titleStyle={{ color: "black" }}
      title={title}
      onPress={onPress}
    />
  );
};

export default WhoEatsButton;
