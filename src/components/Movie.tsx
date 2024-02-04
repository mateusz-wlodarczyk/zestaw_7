import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Characters, Planets, Starships } from "../utils/types";

export default function Movie({
  loadedMovie,
  text,
}: {
  loadedMovie: Characters[] | Planets[] | Starships[];
  text: string;
}) {
  return (
    <>
      <Text>{text}</Text>
      {loadedMovie.map((item, index) => (
        <Flex wrap="wrap" key={index}>
          <Link href={item} isExternal>
            - {item}
          </Link>
        </Flex>
      ))}
    </>
  );
}
