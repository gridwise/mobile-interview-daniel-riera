import { StyleSheet } from "react-native";
import { Spacing } from "@/constants/Spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: Spacing.sm,
  },
  message: {
    textAlign: "center",
  },
});
