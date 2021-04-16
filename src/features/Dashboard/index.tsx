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
        bgGradient="linear(to-l, #f7ff00,#db36a4)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Dashboard page
      </Text>
    </Box>
  );
}
