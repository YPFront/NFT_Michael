import { Grid, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.common.black,
    paddingTop: 16,
    paddingBottom: 16,
    '& a': {
      color: theme.palette.common.white,
      marginRight: 30,
      '&:last-child': {
        marginLeft: 0,
      },
    },
    '& MuiGrid-item': {
      paddingTop: 8,
      paddingBottom: 8
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginTop: 16
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, 'container')}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Link href='#'>hello@portion.io</Link>
        </Grid>
        <Grid item md={6} xs={12} className={classes.nav}>
          <Link href='#'>Terms of Use</Link>
          <Link href='#'>Privacy Policy</Link>
          <Link href='#'>Copyright</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
