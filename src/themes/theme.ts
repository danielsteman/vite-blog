import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        color: "default",
        bg: props.colorMode === "dark" ? "222222" : "FAFAFA",
      },
    }),
  },
});

export default customTheme;
