import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  return response.data.results;
};

export const useCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });
};
