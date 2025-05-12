import React from "react";
import { View, SafeAreaView, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  useSafeArea?: boolean;
  variant?: "background" | "card";
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  useSafeArea,
  variant = "background",
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    variant
  );

  const baseStyle = [{ backgroundColor }, style];

  return useSafeArea ? (
    <SafeAreaView style={[{ flex: 1, backgroundColor }]}>
      <View style={baseStyle} {...otherProps} />
    </SafeAreaView>
  ) : (
    <View style={baseStyle} {...otherProps} />
  );
}
