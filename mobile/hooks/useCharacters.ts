import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${pageParam}`
    );
    return {
      data: response.data.results,
      nextPage: response.data.info.next ? pageParam + 1 : undefined,
    };
  } catch (error) {
    let message = "Aw jeez, something went wrong.";

    if (axios.isAxiosError(error)) {
      if (error.response) {
        message = "Aw jeez, something went wrong. Try again later!";
      } else if (error.request) {
        message = "Aw jeez, something went wrong. Check your connection.";
      }
    }

    throw new Error(message);
  }
};

export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
