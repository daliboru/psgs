import { View, Text } from "react-native";
import React, { useState } from "react";
import { Slider } from "@rneui/themed";
import { Icon } from "../../../../components";

type Props = {};

const RangeSlider = (props: Props) => {
  const [range, setRange] = useState(100);

  return (
    <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
      <Slider
        value={range}
        onValueChange={setRange}
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
