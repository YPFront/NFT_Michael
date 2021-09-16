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
        main: '#006699',
        dark: '#09394E',
        light: '#1F6E85',
      },
      common: {
        black: '#333333',
      },
      grey: {
        600: '#638796',
      },
      secondary: {
        main: '#DAB679',
        dark: '#CB9C4E',
      },
      background: {
        default: '#FCF8F2'
      }
    },
    shape: {
      borderRadius: 8
    },
    typography: {
      fontFamily: '"Lato"',
      h1: {
        fontFamily: '"DM Serif Display"',
      },
      h2: {
        fontFamily: '"DM Serif Display"',
      },
      h3: {
        fontFamily: '"DM Serif Display"',
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