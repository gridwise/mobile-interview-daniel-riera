import React from "react";
import { render, waitFor, screen } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import CharacterList from "@/components/character-list";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const createWrapper = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
};

describe("CharacterList", () => {
  let wrapper: React.FC<{ children: React.ReactNode }>;

  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = createWrapper();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders character list on success", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            id: 1,
            name: "Rick Sanchez",
            species: "Human",
            status: "Alive",
            image: "https://example.com/",
            episode: ["ep1", "ep2"],
          },
        ],
        info: {
          next: null,
        },
      },
    });

    render(<CharacterList />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeTruthy();
      expect(screen.getByText("Species: Human")).toBeTruthy();
    });
  });

  it("renders error message on fetch failure", async () => {
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 500 },
      isAxiosError: true,
    });

    render(<CharacterList />, { wrapper });

    await waitFor(() => {
      expect(screen.queryByTestId("loading-message")).toBeNull();
    });

    expect(screen.getByTestId("error-message")).toBeTruthy();
    expect(screen.getByTestId("action-button")).toBeTruthy();
  });

  it("renders loading state initially", () => {
    render(<CharacterList />, { wrapper });

    expect(screen.getByTestId("loading-message")).toBeTruthy();
  });
});
