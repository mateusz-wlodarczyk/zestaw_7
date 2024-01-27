import React from "react";
import { MovieResults } from "../utils/types";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const SingleMovie = ({ loadedMovie }: { loadedMovie: MovieResults }) => {
  if (loadedMovie === undefined) return <Box> wrong gate</Box>;
  return (
    <Box sx={{ border: "1px solid black", width: "250px" }}>
      <Text sx={{ color: "red.600" }}>{loadedMovie.title}</Text>
      <Text>characters:</Text>
      {loadedMovie.characters.map((item, index) => (
        <Flex wrap="wrap" key={index}>
          <Link href={item} isExternal>
            - {item}
          </Link>
        </Flex>
      ))}

      <Text>planets:</Text>
      {loadedMovie.planets.map((item, index) => (
        <Flex wrap="wrap" key={index}>
          <Link href={item} isExternal>
            - {item}
          </Link>
        </Flex>
      ))}

      <Text>starships:</Text>
      {loadedMovie.starships.map((item, index) => (
        <Flex wrap="wrap" key={index}>
          <Link href={item} isExternal>
            - {item}
          </Link>
        </Flex>
      ))}
    </Box>
  );
};
