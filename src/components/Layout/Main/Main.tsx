import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Divider from '../../Divider';
import ActivityPart from './Activity';
import CreatorPart from './Creator';
import DescriptionPart from './Description';
import PGoldMark from 'src/assets/img/PGoldenMark.svg'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    marginTop: 73,
    marginBottom: 38,
    background: theme.palette.background.default,
    overflow: 'hidden'
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'container')}>
      <Grid container spacing={10}>
        <Grid item md={5}>
          <DescriptionPart></DescriptionPart>

          <Divider></Divider>

          <CreatorPart></CreatorPart>
        </Grid>
        <Grid item md={1}>
          <Box width={1} textAlign='center'>
            <img src={PGoldMark}/>
          </Box>
        </Grid>
        <Grid item md={6}>
          <ActivityPart></ActivityPart>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
