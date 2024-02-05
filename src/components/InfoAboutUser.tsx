import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const InfoAboutUser = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <Box>
      <Flex wrap="wrap" gap="5px">
        <Text>{text}:</Text>
        <Link to={`/${link}`}>..{link}..</Link>
      </Flex>
    </Box>
  );
};
