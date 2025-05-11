import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";
import ActionButton from "@/components/ui/action-button";
import { styles } from "./ErrorMessage.styles";

type Props = {
  image?: ImageSourcePropType;
  message?: string;
  onRetry?: () => void;
  retryLabel?: string;
};

const ErrorScreen: React.FC<Props> = ({
  image = require("@/assets/images/error-message.png"),
  message = "Aw jeez, Rick... something broke!",
  onRetry,
  retryLabel = "Try Again",
}) => {
  return (
    <ThemedView style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <ThemedText type="title">{message}</ThemedText>
      {onRetry && <ActionButton text={retryLabel} onPress={onRetry} />}
    </ThemedView>
  );
};

export default ErrorScreen;
