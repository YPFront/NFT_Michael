import { createTheme } from "@material-ui/core";

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
      },
      h4: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: '43px'
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
  });