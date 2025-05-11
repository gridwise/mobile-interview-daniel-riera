import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.portalGreen,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.sm,
    borderRadius: 10,
    margin: Spacing.sm,
  },
});
