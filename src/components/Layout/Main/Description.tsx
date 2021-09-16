import { Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Chips from '../../Chips';
import Readmore from '../../Readmore';
import SectionCollapse from '../../SectionCollapse';

const useStyles = makeStyles((theme: Theme) => ({}));

const DescriptionSection = () => {
  const classes = useStyles();

  const mobileMatches = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div>
      {!mobileMatches ? (
        <Box>
          <Typography variant='h4'>Description</Typography>
          <Readmore height={160}>
            <p>Batman White Knight Presents Harley Quinn #5 page #4 interior art by Matteo Scalera.</p>
            <p>The purchase of this NFT also entitles the buyer to the original 11x17 signed physical art by Matteo Scalera. Ships in 4-6 weeks.</p>
            <p>Suspendisse eu augue vel lorem convallis tristique laoreet sed nisl. Sed congue est a purus suscipit molestie. Vivamus luctus augue nec commodo tristique. Read less</p>
          </Readmore>
          <Chips data={['Featured', 'Digital + Physical Art', 'Comic Art', 'Batman', 'Ink']} value={[]}></Chips>
        </Box>
      ) : (
        <SectionCollapse title={<b>Description</b>} open={true}>
            <p>Batman White Knight Presents Harley Quinn #5 page #4 interior art by Matteo Scalera.</p>
            <p>The purchase of this NFT also entitles the buyer to the original 11x17 signed physical art by Matteo Scalera. Ships in 4-6 weeks.</p>
            <p>Suspendisse eu augue vel lorem convallis tristique laoreet sed nisl. Sed congue est a purus suscipit molestie. Vivamus luctus augue nec commodo tristique. Read less</p>
          <Chips data={['Featured', 'Digital + Physical Art', 'Comic Art', 'Batman', 'Ink']} value={[]}></Chips>
        </SectionCollapse>
      )}

      <SectionCollapse title={<b>What else should you know?</b>}>
        <p>Batman White Knight Presents Harley Quinn #5 page #4 interior art by Matteo Scalera.</p>
        <p>The purchase of this NFT also entitles the buyer to the original 11x17 signed physical art by Matteo Scalera. Ships in 4-6 weeks.</p>
        <p>Suspendisse eu augue vel lorem convallis tristique laoreet sed nisl. Sed congue est a purus suscipit molestie. Vivamus luctus augue nec commodo tristique. Read less</p>
      </SectionCollapse>
    </div>
  );
};

export default DescriptionSection;
