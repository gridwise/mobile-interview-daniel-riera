import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${pageParam}`
  );
  return {
    data: response.data.results,
    nextPage: response.data.info.next ? pageParam + 1 : undefined,
  };
};

export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
