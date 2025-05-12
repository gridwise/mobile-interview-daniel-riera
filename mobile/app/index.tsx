import React from "react";
import { StyleSheet } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useColorScheme } from "@/hooks/useColorScheme";
import CharacterList from "@/components/character-list";
import { ThemedView } from "@/components/ui/ThemedView";
import { Spacing } from "@/constants/Spacing";

const queryClient = new QueryClient();

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView useSafeArea style={styles.container}>
          <CharacterList />
        </ThemedView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.xxl,
  },
});
