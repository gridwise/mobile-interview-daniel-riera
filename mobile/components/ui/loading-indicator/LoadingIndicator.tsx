import React, { useEffect, useRef } from "react";
import { Animated, Easing, View, ImageSourcePropType } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { styles } from "./LoadingIndicator.styles";
import { ThemedView } from "../ThemedView";

type Props = {
  duration?: number;
  message?: string;
  size?: number;
  source?: ImageSourcePropType;
};

const LoadingIndicator: React.FC<Props> = ({
  duration = 3000,
  message = "Wubba Lubba Dub Dub... Loading!",
  size = 80,
  source = require("@/assets/images/round-logo.png"),
}) => {
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [duration]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.Image
        source={source}
        style={{
          width: size,
          height: size,
          transform: [{ rotate }],
        }}
      />
      <ThemedText>{message}</ThemedText>
    </ThemedView>
  );
};

export default LoadingIndicator;
