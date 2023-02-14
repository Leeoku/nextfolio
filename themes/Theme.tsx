import { extendTheme, theme as base, type ThemeConfig } from "@chakra-ui/react";

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 25,
        textUnderlineOffset: 6,
        textDecorationColor: 'orange.500',
        textDecorationThickness: 3,
        marginTop: 5,
        marginBottom: 5
      }
    }
  }
}

const config:ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}


const fonts = {
  heading: `'Montserrat', ${base.fonts?.heading}`,
  body: `'Montserrat', ${base.fonts?.heading}`,
}
const Theme = extendTheme({components, config, fonts});

export default Theme;
