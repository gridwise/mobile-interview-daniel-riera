import React from "react";
import { ViewStyle, TextStyle, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { styles } from "./ActionButton.styles";

type ActionButtonProps = {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <Pressable
      testID="action-button"
      style={[styles.button, style]}
      onPress={onPress}
    >
      <ThemedText style={textStyle}>{text}</ThemedText>
    </Pressable>
  );
};

export default ActionButton;
