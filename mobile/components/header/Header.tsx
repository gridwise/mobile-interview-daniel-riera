import React from "react";
import {
  Image,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
  ImageStyle,
} from "react-native";
import { ThemedView } from "../ui/ThemedView";
import { ThemedText } from "../ui/ThemedText";
import { styles } from "./Header.styles";

type Props = {
  image: ImageSourcePropType;
  title?: string;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  titleStyle?: TextStyle;
};

const Header: React.FC<Props> = ({
  image,
  title,
  containerStyle,
  imageStyle,
  titleStyle,
}) => {
  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <Image
        source={image}
        style={[styles.image, imageStyle]}
        resizeMode="contain"
      />
      {title && (
        <ThemedText type="title" style={[titleStyle]}>
          {title}
        </ThemedText>
      )}
    </ThemedView>
  );
};

export default Header;
