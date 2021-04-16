import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function index() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        bgGradient="linear(to-l, #00C9FF,#92FE9D)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        About page
      </Text>
    </Box>
  );
}
