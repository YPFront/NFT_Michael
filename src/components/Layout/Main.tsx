import { Avatar, Box, Grid, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Slider from 'react-slick';
import clsx from 'clsx';
import Chips from '../Chips';
import Divider from '../Divider';
import Readmore from '../Readmore';
import SectionCollapse from '../SectionCollapse';
import PortionButton from '../PortionButton';
import CreatorBack from 'src/assets/img/creatorBack.svg';
import AvatarImg from 'src/assets/img/avatar.svg';
import { ReactComponent as Eye } from 'src/assets/img/eye.svg';
import character1 from 'src/assets/img/character1.svg';
import character2 from 'src/assets/img/character2.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    marginTop: 73,
    marginBottom: 38,
    background: theme.palette.background.default,
  },
  creatorBack: {
    width: '100%',
  },
  avatar: {
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
    width: 120,
    height: 120,
    padding: 5,
    background: theme.palette.common.white,
    margin: '-85px auto 0 auto',
    '& img': {
      borderRadius: '50%',
    },
  },
  smallButton: {
    fontSize: 20,
    lineHeight: '24px',
    padding: '9px 19px',
    marginRight: 18,
    '&.active': {
      background: '#0066991A',
    },
    '& svg': {
      marginRight: 12.5,
    },
  },
  bigButton: {
    height: 50
  },
  eye: {
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
  roundButton: {
    borderRadius: '50%',
    width: 50,
    height: 50,
    fontSize: 24,
    padding: 11,
    minWidth: 'unset',
    minHeight: 'unset',
  },
  carousel: {
    width: 'calc(100% + 40px)',
    height: 230,
    overflow: 'hidden',
    '& img': {
      width: 200,
      marginRight: 10,
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  const moreCharacters = [
    {
      src: character1,
      link: '#',
    },
    {
      src: character2,
      link: '#',
    },
    {
      src: character1,
      link: '#',
    },
    {
      src: character2,
      link: '#',
    },
    {
      src: character1,
      link: '#',
    },
    {
      src: character2,
      link: '#',
    },
  ];
  let sliderRef: any;
  let sliderPos: number = 1;

  return (
    <div className={clsx(classes.root, 'container')}>
      <Grid container spacing={10}>
        <Grid item md={5}>
          <Box>
            <Typography variant='h4'>Description</Typography>
            <Readmore height={170}>
              <p>Batman White Knight Presents Harley Quinn #5 page #4 interior art by Matteo Scalera.</p>
              <p>The purchase of this NFT also entitles the buyer to the original 11x17 signed physical art by Matteo Scalera. Ships in 4-6 weeks.</p>
              <p>Suspendisse eu augue vel lorem convallis tristique laoreet sed nisl. Sed congue est a purus suscipit molestie. Vivamus luctus augue nec commodo tristique. Read less</p>
            </Readmore>
            <Chips data={['Featured', 'Digital + Physical Art', 'Comic Art', 'Batman', 'Ink']} value={[]}></Chips>
          </Box>
          <SectionCollapse title={<b>What else should you know?</b>}>
            <p>Batman White Knight Presents Harley Quinn #5 page #4 interior art by Matteo Scalera.</p>
            <p>The purchase of this NFT also entitles the buyer to the original 11x17 signed physical art by Matteo Scalera. Ships in 4-6 weeks.</p>
            <p>Suspendisse eu augue vel lorem convallis tristique laoreet sed nisl. Sed congue est a purus suscipit molestie. Vivamus luctus augue nec commodo tristique. Read less</p>
          </SectionCollapse>

          <Divider></Divider>

          <Typography variant='h4'>Creator</Typography>
          <Paper>
            <Box>
              <Box mt={3}>
                <img src={CreatorBack} className={classes.creatorBack} />
                <Avatar src={AvatarImg} className={classes.avatar}></Avatar>
              </Box>
            </Box>
            <Box px={5} pb={4}>
              <Box pb={4} >
                <p>
                  <b>Ron English</b> <Link href='#'>@ronenglish</Link>
                </p>
                <p>Italian ComicBook artist working for Image, DC, Marvel, Netflix, Boom!studios.</p>
                <Box>
                  <PortionButton color='primary' size='small' radius='hard' outline={true} className={clsx(classes.smallButton, 'active')}>
                    <Eye fill='#00000' className={classes.eye} /> Following
                  </PortionButton>
                  <span> 1,255 following </span>
                </Box>
              </Box>
              <Box>
                <b>More from Ron</b>
                <Box className={classes.carousel} mt={1} mb={3}>
                  <Slider dots={false} slidesToShow={4} slidesToScroll={1} swipe={false} ref={(slider) => (sliderRef = slider)} variableWidth={true} prevArrow={<div></div>} nextArrow={<div></div>}>
                    {moreCharacters.map((item, i) => (
                      <Link href={item.link} key={i}>
                        <img src={item.src} />
                      </Link>
                    ))}
                  </Slider>
                </Box>
                <Box display='flex' gridGap={5}>
                  <Box flexGrow={1}>
                    <PortionButton color='primary' className={classes.bigButton} fullWidth={true}> See all of Matteo’s creations </PortionButton>
                  </Box>
                  <Box>
                    <PortionButton
                      className={classes.roundButton}
                      color='primary'
                      outline={true}
                      radius='hard'
                      onClick={() => {
                        if (sliderPos > 1) sliderRef.slickPrev() & sliderPos--;
                      }}
                    >
                      {' '}
                      &lt;{' '}
                    </PortionButton>
                  </Box>
                  <Box>
                    <PortionButton
                      className={classes.roundButton}
                      color='primary'
                      outline={true}
                      radius='hard'
                      onClick={() => {
                        if (sliderPos < moreCharacters.length) sliderRef.slickNext() & sliderPos++;
                      }}
                    >
                      {' '}
                      &gt;{' '}
                    </PortionButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </div>
  );
};

export default Hero;
