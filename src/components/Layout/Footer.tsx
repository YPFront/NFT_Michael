import { Grid, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.dark,
    paddingTop: 24,
    paddingBottom: 24,
    '& a': {
      color: theme.palette.common.white,
      marginRight: 30,
      '&:last-child': {
        marginLeft: 0,
      },
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, 'container')}>
      <Grid container>
        <Grid item md={6}>
          <Link href='#'>hello@portion.io</Link>
        </Grid>
        <Grid item md={6} className={classes.nav}>
          <Link href='#'>Terms of Use</Link>
          <Link href='#'>Privacy Policy</Link>
          <Link href='#'>Copyright</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
