import React from "react";
import { FlatList } from "react-native";
import { useCharacters } from "@/hooks/useCharacters";
import CharacterCard from "@/components/character-card";
import HorizontalDivider from "@/components/horizontal-divider";
import LoadingIndicator from "@/components/ui/loading-indicator";
import Header from "@/components/header";
import ErrorMessage from "@/components/error-message";

const CharacterList: React.FC = () => {
  const { data, isLoading, isError, refetch } = useCharacters();

  if (isError) {
    return <ErrorMessage onRetry={refetch} />;
  }

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <Header
            image={require("@/assets/images/header-image.png")}
            title="Morty, These Are Our People!"
          />
        }
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
        ItemSeparatorComponent={() => <HorizontalDivider />}
        showsVerticalScrollIndicator={false}
      />
      {isLoading && <LoadingIndicator />}
    </>
  );
};

export default CharacterList;
