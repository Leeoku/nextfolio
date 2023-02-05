import { extendTheme, theme as base, type ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const fonts = {
  heading: `'Montserrat', ${base.fonts?.heading}`,
  body: `'Montserrat', ${base.fonts?.heading}`,
}
const Theme = extendTheme({config, fonts});

export default Theme;
