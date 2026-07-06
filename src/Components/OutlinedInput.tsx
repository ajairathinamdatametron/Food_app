import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Svg, { Rect, Line } from "react-native-svg";
const OutlinedInput = ({
  label,
  value,
  onChangeText,
  editable = true,
  secureTextEntry = false,
  keyboardType = "default",
}: any) => {

  const [labelWidth, setLabelWidth] = useState(0);

  const labelLeft = 25;
  const gap = 8;

  const x1 = labelLeft - gap;
  const x2 = labelLeft + labelWidth + gap;

  return (
    <View style={{ width: 320, height: 70, marginBottom: 20, top: 60 }}>
      <Svg
        width={320}
        height={60}
        style={{ position: "absolute" }}
      >
        <Rect
          x="1"
          y="10"
          width="318"
          height="48"
          rx="10"
          ry="10"
          stroke="#808080"
          strokeWidth="2"
          fill="none"
        />

        <Line
          x1={x1}
          y1="10"
          x2={x2}
          y2="10"
          stroke="white"
          strokeWidth="4"
        />
      </Svg>

      <Text
        onLayout={(e) => setLabelWidth(e.nativeEvent.layout.width)}
        style={{
          position: "absolute",
          left: labelLeft,
          top: 0,
          fontSize: 14,
          color: "#000",
        }}
      >
        {label}
      </Text>
      

      <TextInput
  value={value}
  onChangeText={onChangeText}
  editable={editable}
  secureTextEntry={secureTextEntry}
  keyboardType={keyboardType}
  style={{
    position: "absolute",
    top: 15,
    left: 20,
    width: 280,
    height: 40,
    fontSize: 16,
    color: "#000",
    paddingVertical: 0,
  }}
/>
    </View>
  );
};

export default OutlinedInput;