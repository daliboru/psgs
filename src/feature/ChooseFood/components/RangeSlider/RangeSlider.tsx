import { View } from "react-native";
import React, { useState } from "react";
import { Slider, Text } from "@rneui/themed";
import { Icon } from "../../../../components";

type Props = {
  range: number;
  onSetRange: (range: number) => void;
};

const RangeSlider = ({ range, onSetRange }: Props) => {
  return (
    <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
      <Text h4 style={{ marginBottom: 10 }}>
        Udaljenost: {range}
      </Text>
      <Slider
        value={range}
        onValueChange={onSetRange}
        minimumValue={100}
        maximumValue={2000}
        step={50}
        allowTouchTrack
        trackStyle={{
          height: 5,
          borderRadius: 5,
        }}
        thumbStyle={{
          width: 30,
          height: 30,
        }}
        thumbProps={{
          children: <Icon name="walk" color="white" />,
        }}
      />
    </View>
  );
};

export default RangeSlider;
