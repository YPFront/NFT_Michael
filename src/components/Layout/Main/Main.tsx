import { Box, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Divider from '../../Divider';
import ActivitySection from './Activity';
import CreatorSection from './Creator';
import DescriptionSection from './Description';
import RelatedSection from './Related';
import PGoldMark from 'src/assets/lottie/pMark.json';
import LottieImage from 'src/components/LottieImage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    paddingTop: 73,
    marginBottom: 38,
    background: theme.palette.background.default,
    overflow: 'hidden'
  },
  mobileHidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  tabletHidden: {
    ['@media (max-width: 1024px)']: {
      display: 'none'
    }
  },
  description: {
    ['@media (min-width: 992px) and (max-width: 1024px)']: {
      maxWidth: '50%'
    }
  }
}));

const Main = (props: any) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'container')} id="Main-Page">
      <Grid container spacing={10}>
        <Grid item md={5} xs={12} className={classes.description}>
          <DescriptionSection></DescriptionSection>

          <Divider></Divider>

          <CreatorSection></CreatorSection>
        </Grid>
        <Grid item md={1} xs={12} className={classes.tabletHidden}>
          <Box width={1} textAlign='center'>
            <LottieImage src={PGoldMark} width={90} height={100}></LottieImage>
            
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <ActivitySection></ActivitySection>
        </Grid>
        <Grid item md={12} xs={12}>
          <RelatedSection></RelatedSection>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
