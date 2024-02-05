import React from "react";
import { MovieResults } from "../utils/types";
import { Box, Text } from "@chakra-ui/react";
import Movie from "./Movie";

export const MoviesPage = ({ loadedMovie }: { loadedMovie: MovieResults }) => {
  return (
    <Box sx={{ border: "1px solid black", width: "250px" }}>
      <Text sx={{ color: "red.600" }}>{loadedMovie.title}</Text>

      <Movie text="characters: " loadedMovie={loadedMovie.characters} />
      <Movie text="planets: " loadedMovie={loadedMovie.planets} />
      <Movie text="starships: " loadedMovie={loadedMovie.starships} />
    </Box>
  );
};
