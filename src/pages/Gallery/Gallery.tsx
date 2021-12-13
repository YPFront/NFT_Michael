import { makeStyles, ThemeProvider } from '@material-ui/core';
import Footer from 'src/pages/Layout/Footer';
import Header from 'src/pages/Layout/Header';
import Hero from 'src/pages/Layout/GalleryHero';
import { theme as PortionTheme } from 'src/theme/theme';
import GalleryMain from '../Layout/GalleryMain/GalleryMain';

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

export default function Gallery({}: Props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={PortionTheme}>
      <div className={classes.root}>
        <Header login={false} color="primary" transparent={true} active="marketplace" search={true}/>
        <main className={classes.main}>
          <Hero></Hero>
          <GalleryMain></GalleryMain>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
