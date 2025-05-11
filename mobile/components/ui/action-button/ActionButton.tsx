import React from "react";
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native";
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
    <TouchableOpacity
      testID="action-button"
      style={[styles.button, style]}
      onPress={onPress}
    >
      <ThemedText style={textStyle}>{text}</ThemedText>
    </TouchableOpacity>
  );
};

export default ActionButton;
