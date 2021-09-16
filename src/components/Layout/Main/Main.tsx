import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Divider from '../../Divider';
import ActivitySection from './Activity';
import CreatorSection from './Creator';
import DescriptionSection from './Description';
import PGoldMark from 'src/assets/img/PGoldenMark.svg'
import RelatedSection from './Related';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    paddingTop: 73,
    marginBottom: 38,
    background: theme.palette.background.default,
    overflow: 'hidden'
  },
}));

const Main = (props: any) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'container')} id="Main-Page">
      <Grid container spacing={10}>
        <Grid item md={5}  xs={12}>
          <DescriptionSection></DescriptionSection>

          <Divider></Divider>

          <CreatorSection></CreatorSection>
        </Grid>
        <Grid item md={1} xs={12}>
          <Box width={1} textAlign='center'>
            <img src={PGoldMark}/>
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
