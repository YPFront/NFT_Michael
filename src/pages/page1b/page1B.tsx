import { makeStyles, ThemeProvider } from '@material-ui/core';
import Footer from 'src/pages/Layout/Footer';
import Header from 'src/pages/Layout/Page1bHeader';
import Hero from 'src/pages/Layout/Page1bHero';
import Main from 'src/pages/Layout/Main/Main';
import { theme as PortionTheme } from 'src/theme/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.palette.background.default,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: '24px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 18,
      lineHeight: '21.5px',
      // '& p': {
      //   marginBlockStart: 8,
      //   marginBlockEnd: 8
      // }
    }
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  main: {
    flex: 1,
  },
}));

type Props = {};

export default function Page1B({}: Props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={PortionTheme}>
      <div className={classes.root}>
        <Header login={true}/>
        <main className={classes.main}>
          <Hero></Hero>
          <Main></Main>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
