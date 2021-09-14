import { makeStyles, ThemeProvider, createTheme, Toolbar } from '@material-ui/core'
import Header from 'src/components/Layout/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d207ce',
    },
    secondary: {
      main: '#6900ea',
      light: "#ffffff"
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  main: {
    flex: 1,
  },
}))

type Props = {}

export default function Dashboard({}: Props) {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <Toolbar />
        <div className={classes.container}>
          <main className={classes.main}>
            
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
