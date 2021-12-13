import { createTheme } from "@material-ui/core";

const media = {
  xs: 0,
  sm: 500,
  md: 992,
  lg: 1280,
  xl: 1920,
};

export const theme = createTheme({
    palette: {
      primary: {
        dark: '#EA5254',
        main: '#EB5757',
        light: '#EB5757',
      },
      common: {
        black: '#000000',
      },
      grey: {
        600: '#638796',
      },
      secondary: {
        main: '#000000',
        dark: '#333333',
      },
      background: {
        default: '#F2F2F2'
      }
    },
    shape: {
      borderRadius: 4
    },
    typography: {
      fontFamily: `"Lato"`,
      h1: {
        fontFamily: '"Open Sans"',
      },
      h2: {
        fontFamily: '"Open Sans"',
      },
      h3: {
        fontFamily: '"Open Sans"',
        [`@media (max-width:${media.lg}px)`]: {
          fontSize: 30,
          lineHeight: '36px'
        },
      },
      h4: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: '43px',
        [`@media (max-width:${media.lg}px)`]: {
          fontSize: 28,
          lineHeight: '34px'
        },
      },
      h5: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '28.8px',
        [`@media (max-width:${media.lg}px)`]: {
          fontSize: 20
        },
      },
      button: {
        fontFamily: 'Lato',
        padding: '6px 22px',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: '27px',
        minHeight: 40,
        textTransform: 'none'
      }
    },
    spacing: 8,
    breakpoints: {
      values: {
        ...media
      },
    }
  });