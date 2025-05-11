import React from "react";
import { render, waitFor, screen } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CharacterList from "@/components/character-list";

jest.mock("@/hooks/useCharacters", () => ({
  useCharacters: jest.fn(),
}));

import { useCharacters } from "@/hooks/useCharacters";

const createWrapper = () => {
  const client = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
};

const mockLoadingState = {
  isLoading: true,
  isError: false,
};

const mockErrorState = {
  isLoading: false,
  isError: true,
  refetch: jest.fn(),
};

const mockSuccessState = {
  isLoading: false,
  isError: false,
  isFetchingNextPage: false,
  fetchNextPage: jest.fn(),
  hasNextPage: false,
  data: {
    pages: [
      {
        data: [
          {
            id: 1,
            name: "Rick Sanchez",
            species: "Human",
            status: "Alive",
            image: "https://example.com/",
            episode: ["ep1", "ep2"],
          },
        ],
      },
    ],
  },
};

describe("CharacterList", () => {
  let wrapper: React.FC<{ children: React.ReactNode }>;

  beforeEach(() => {
    wrapper = createWrapper();
  });

  describe("Loading State", () => {
    it("renders loading indicator", () => {
      (useCharacters as jest.Mock).mockReturnValue(mockLoadingState);

      render(<CharacterList />, { wrapper });

      expect(screen.getByTestId("loading-message")).toBeTruthy();
    });
  });

  describe("Success State", () => {
    it("renders character list", async () => {
      (useCharacters as jest.Mock).mockReturnValue(mockSuccessState);

      render(<CharacterList />, { wrapper });

      await waitFor(() => {
        expect(screen.getByText("Rick Sanchez")).toBeTruthy();
        expect(screen.getByText("Species: Human")).toBeTruthy();
      });
    });
  });

  describe("Error State", () => {
    it("renders error message and retry button", () => {
      (useCharacters as jest.Mock).mockReturnValue(mockErrorState);

      render(<CharacterList />, { wrapper });

      expect(screen.getByTestId("error-message")).toBeTruthy();
      expect(screen.getByTestId("action-button")).toBeTruthy();
    });
  });
});
