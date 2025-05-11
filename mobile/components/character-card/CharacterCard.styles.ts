import { StyleSheet } from "react-native";
import { Spacing } from "@/constants/Spacing";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: Spacing.lg,
    flex: 1,
  },
});
