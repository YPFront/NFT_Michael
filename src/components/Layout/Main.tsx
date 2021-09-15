import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import clsx from 'clsx';
import Chips from '../Chips';
import Divider from '../Divider';
import Readmore from '../Readmore';
import SectionCollapse from '../SectionCollapse';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    marginTop: 73,
    marginBottom: 38
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, 'container')}>
        <Grid container spacing={10}>
            <Grid item md={5}>
                <div>
                    <Typography variant="h4">Description</Typography>
                    <Readmore height={170}>
                      <p>Batman White Knight Presents Harley Quinn #5 page #4 interior art by Matteo Scalera.</p>
                      <p>The purchase of this NFT also entitles the buyer to the original 11x17 signed physical art by Matteo Scalera. Ships in 4-6 weeks.</p>
                      <p>Suspendisse eu augue vel lorem convallis tristique laoreet sed nisl. Sed congue est a purus suscipit molestie. Vivamus luctus augue nec commodo tristique. Read less</p>
                    </Readmore>
                    <Chips data={[
                        'Featured', 'Digital + Physical Art', 'Comic Art', 'Batman', 'Ink'
                    ]} value={[]}></Chips>
                </div>
                <SectionCollapse title={<b>What else should you know?</b>}>
                  <p>Batman White Knight Presents Harley Quinn #5 page #4 interior art by Matteo Scalera.</p>
                  <p>The purchase of this NFT also entitles the buyer to the original 11x17 signed physical art by Matteo Scalera. Ships in 4-6 weeks.</p>
                  <p>Suspendisse eu augue vel lorem convallis tristique laoreet sed nisl. Sed congue est a purus suscipit molestie. Vivamus luctus augue nec commodo tristique. Read less</p>
                </SectionCollapse>
                <Divider></Divider>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={6}>

            </Grid>
        </Grid>
    </div>
  );
};

export default Hero;
