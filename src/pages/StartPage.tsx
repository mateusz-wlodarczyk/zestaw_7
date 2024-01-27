import React from "react";
import { InfoAboutUser } from "../components/InfoAboutUser";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const StartPage = () => {
  return (
    <Box>
      <Text>click:</Text>
      <InfoAboutUser link="login" text="has account?" />
      <InfoAboutUser link="register" text="no account?" />
    </Box>
  );
};
