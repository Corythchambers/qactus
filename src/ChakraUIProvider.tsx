import React, { ReactNode } from "react";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";

// Define the theme config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Cactus theme colors
const colors = {
  cactus: {
    50: "#f2f7f1",
    100: "#e6f0e5",
    200: "#cee1cb",
    300: "#a9c7a3", // sage green
    400: "#83ad7b", // light cactus green
    500: "#5b8c53", // cactus green
    600: "#4a7343",
    700: "#3a5a34",
    800: "#2b4326",
    900: "#1b2a18",
  },
  sand: {
    50: "#fcf9f1",
    100: "#f7f2e4",
    200: "#f0e5c8", // warm sand
    300: "#e6d6aa", // sand beige
    400: "#dbc78c",
    500: "#c4ac65",
    600: "#a08945",
    700: "#7a6834",
    800: "#554a25",
    900: "#302915",
  },
  sun: {
    50: "#fffcf0",
    100: "#fff8e0",
    200: "#feeebc", // warm yellow
    300: "#fde397",
    400: "#fcd76f",
    500: "#f7c334",
    600: "#d59c18",
    700: "#a57714",
    800: "#75540f",
    900: "#453209",
  },
};

// Define the theme
const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: '"Nunito", sans-serif',
    body: '"Nunito", sans-serif',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "sand.50",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
        borderRadius: "full", // Rounded corners
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === "dark" ? "cactus.500" : "cactus.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "cactus.600" : "cactus.600",
          },
        }),
        outline: (props: any) => ({
          borderColor: props.colorMode === "dark" ? "cactus.400" : "cactus.500",
          color: props.colorMode === "dark" ? "cactus.400" : "cactus.500",
          _hover: {
            bg: props.colorMode === "dark" ? "cactus.800" : "cactus.50",
          },
        }),
        ghost: (props: any) => ({
          color: props.colorMode === "dark" ? "cactus.400" : "cactus.500",
          _hover: {
            bg: props.colorMode === "dark" ? "cactus.800" : "cactus.50",
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "bold",
        color: "cactus.700",
      },
    },
    Box: {
      baseStyle: {
        borderRadius: "xl", // Soft rounded corners
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "full",
      },
      variants: {
        solid: {
          bg: "cactus.400",
          color: "white",
        },
      },
    },
    Tag: {
      variants: {
        solid: {
          bg: "cactus.400",
          color: "white",
        },
      },
    },
    Link: {
      baseStyle: {
        color: "cactus.500",
        _hover: {
          color: "cactus.600",
        },
      },
    },
  },
});

interface ChakraUIProviderProps {
  children: ReactNode;
}

const ChakraUIProvider: React.FC<ChakraUIProviderProps> = ({ children }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export { theme };
export default ChakraUIProvider;
