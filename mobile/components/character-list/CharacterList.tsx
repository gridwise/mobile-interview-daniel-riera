import React from "react";
import { FlatList } from "react-native";
import { useCharacters } from "@/hooks/useCharacters";
import CharacterCard from "@/components/character-card";
import HorizontalDivider from "@/components/horizontal-divider";
import LoadingIndicator from "@/components/ui/loading-indicator";
import Header from "@/components/header";
import ErrorMessage from "@/components/error-message";

const CharacterList: React.FC = () => {
  const {
    data,
    isLoading,
    error,
    isError,
    refetch,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useCharacters();
  const characters = data?.pages.flatMap((page) => page.data) ?? [];

  if (isError) {
    return <ErrorMessage onRetry={refetch} message={error?.message} />;
  }

  return (
    <>
      <FlatList
        testID="character-flat-list"
        ListHeaderComponent={
          <Header
            image={require("@/assets/images/header-image.png")}
            title="Morty, These Are Our People!"
          />
        }
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
        ItemSeparatorComponent={() => <HorizontalDivider />}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetchingNextPage ? <LoadingIndicator /> : null}
      />
      {isLoading && <LoadingIndicator />}
    </>
  );
};

export default CharacterList;
