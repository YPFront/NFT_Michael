import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Footer from 'src/components/Layout/Footer';
import Header from 'src/components/Layout/Header';
import Hero from 'src/components/Layout/Hero';
import Main from 'src/components/Layout/Main/Main';
import { theme as PortionTheme } from 'src/theme/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.palette.background.default
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

export default function Dashboard({}: Props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={PortionTheme}>
      <div className={classes.root}>
        <Header />
        <main className={classes.main}>
          <Hero></Hero>
          <Main></Main>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
