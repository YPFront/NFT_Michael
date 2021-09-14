import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.light,
  },
  logo: {
    'margin-right': '15px',
    'vertical-align': 'middle'    
  },
  icon: {
    padding: theme.spacing(1),
  },
  title: {
    margin: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <a href="https://scribbletogether.com"                >
            <img className={classes.logo} src="https://static.scribbletogether.com/static/images/app-icon-banner.png" height="47" width="47" alt="App Icon" />
          </a>
          Scribble Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
