import { extendTheme, ColorMode } from "@chakra-ui/react";

export interface ChakraConfig {
  initialColorMode?: ColorMode;
  useSystemColorMode?: boolean;
}

const config: ChakraConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const global = {
  "html, body": {
    fontFamily: "'Roboto', sans-serif;"
  },
}

const theme = extendTheme({ config, global });

export default theme;