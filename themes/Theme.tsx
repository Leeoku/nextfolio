import { extendTheme, theme as base } from "@chakra-ui/react";

const Theme = extendTheme({
  fonts: {
    heading: `'Montserrat', ${base.fonts?.heading}`,
    body: `'Montserrat', ${base.fonts?.heading}`,
  },
});

export default Theme;
