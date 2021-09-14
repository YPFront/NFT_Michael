import React from 'react'
import { makeStyles, createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
import Header from '../Layout/Header'
import Toolbar from '@material-ui/core/Toolbar'

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

const useStyles = makeStyles(() => ({
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

type Props = {
  children: React.ReactNode
}

export default function Base(props: Props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <Toolbar />
        <div className={classes.container}>
          <main className={classes.main}>{props.children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}
