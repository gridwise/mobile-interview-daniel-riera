import { Spacing } from "@/constants/Spacing";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";

type HorizontalDividerProps = {
  height?: number;
  color?: string;
  style?: ViewStyle;
  marginVertical?: number;
};

const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
  height = 2,
  color = Colors.dividerDefault,
  style,
  marginVertical = Spacing.md,
}) => {
  return (
    <View style={[{ height, backgroundColor: color, marginVertical }, style]} />
  );
};

export default HorizontalDivider;
