import React from "react";
import { View, Image } from "react-native";
import { Character } from "@/types/CharacterType";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";
import { styles } from "./CharacterCard.styles";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <ThemedView
      padding={Spacing.sm}
      style={styles.card}
      lightColor={Colors.light.card}
      darkColor={Colors.dark.card}
    >
      <Image source={{ uri: character?.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View>
          <ThemedText numberOfLines={3} ellipsizeMode="tail" type="primary">
            {character?.name}
          </ThemedText>
          <ThemedText type="secondary">
            Species: {character?.species}
          </ThemedText>
          <ThemedText type="secondary">Status: {character?.status}</ThemedText>
        </View>
        <View style={{ marginTop: "auto" }}>
          <ThemedText type="tertiary">
            Episodes: {character?.episode.length}
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
};

export default CharacterCard;
