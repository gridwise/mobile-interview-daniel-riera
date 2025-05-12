import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "title" | "primary" | "secondary" | "tertiary";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "primary",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "title" ? styles.title : undefined,
        type === "primary" ? styles.primary : undefined,
        type === "secondary" ? styles.secondary : undefined,
        type === "tertiary" ? styles.tertiary : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  primary: {
    fontSize: 14,
    fontWeight: "600",
  },
  secondary: {
    fontSize: 14,
    fontWeight: "400",
  },
  tertiary: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.tertiaryText,
  },
});
