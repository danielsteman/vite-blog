import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: "default",
        bg: props.colorMode === "dark" ? "222222" : "FAFAFA",
      },
    }),
  },
});

export default customTheme;
