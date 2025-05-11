import React from "react";
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { styles } from "./ActionButton.styles";

type Props = {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const ActionButton: React.FC<Props> = ({ text, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <ThemedText style={textStyle}>{text}</ThemedText>
    </TouchableOpacity>
  );
};

export default ActionButton;
