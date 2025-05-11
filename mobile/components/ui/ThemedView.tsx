import React from "react";
import { View, SafeAreaView, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  padding?: number;
  useSafeArea?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  padding,
  useSafeArea,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const baseStyle = [{ backgroundColor, padding }, style];

  if (useSafeArea) {
    return (
      <SafeAreaView style={[{ flex: 1, backgroundColor }]}>
        <View style={baseStyle} {...otherProps} />
      </SafeAreaView>
    );
  }

  return <View style={baseStyle} {...otherProps} />;
}
