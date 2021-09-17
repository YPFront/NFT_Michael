import { AppBar, Avatar, Box, Grid, Paper, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { createRef, useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AvatarImg from 'src/assets/img/avatar.svg';
import Character from 'src/assets/img/character.svg';
import CheckBadge from 'src/assets/img/checkBadge.svg';
import Etherum from 'src/assets/img/etherum.svg';
import Expand from 'src/assets/img/expand.svg';
import Eye from 'src/assets/img/eye.svg';
import Facebook from 'src/assets/img/facebook.svg';
import LinkImg from 'src/assets/img/link.svg';
import PWhiteMark from 'src/assets/img/PWhiteMark.svg';
import Telegram from 'src/assets/img/telegram.svg';
import Twitter from 'src/assets/img/twitter.svg';
import ArrowDown from 'src/assets/lottie/arrow_down.json';
import Bubbles from 'src/assets/lottie/bubbles.json';
import Octopus from 'src/assets/lottie/octopus.json';
import LottieImage from '../LottieImage';
import PortionButton from '../PortionButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #042A3D 0%, #0C445B 53.48%)',
    overflow: 'hidden',
    position: 'relative',
    color: theme.palette.common.white,
    [theme.breakpoints.down('lg')]: {
      minHeight: 'unset',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 25,
    },
  },
  main: {
    marginTop: 100,
    marginBottom: 0,
    position: 'relative',
    '&>.MuiGrid-item': {
      paddingTop: 0,
      [theme.breakpoints.down('md')]: {
        padding: 25,
      },
    },
  },
  background1: {
    width: 936,
    position: 'absolute',
    top: '30%',
    left: '-4%'
  },
  characterContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    '&.MuiGrid-item': {
      paddingBottom: 0,
    },
    '& .MuiPaper-root': {
      padding: 10,
      width: '100%',
      borderRadius: 0,
      float: 'right',
      boxSizing: 'border-box',
      boxShadow: '20px 10px 20px rgba(0, 0, 0, 0.4)',
      margin: '0 auto',
    },
    '& img': {
      width: '100%',
      maxHeight: 800,
    },
  },
  detailPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&.MuiGrid-item': {
      paddingBottom: 0,
    },
    '& b': {
      color: theme.palette.secondary.main,
      fontWeight: 'normal',
    },
  },
  ownerInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
    '& p': {
      marginBlockStart: 3,
      marginBlockEnd: 3,
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 64,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      order: 3,
      marginTop: 0,
      marginBottom: 10,
      '& > .MuiGrid-root': {
        marginBottom: 15,
      },
    },
  },
  avatar: {
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
    padding: 2,
    width: 60,
    height: 60,
    '& img': {
      borderRadius: '50%',
    },
  },
  priceText: {
    fontWeight: 700,
    fontSize: 36,
    lineHeight: '43.2px',
    marginLeft: 10,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
  },
  prtIcon: {
    marginBottom: -6,
  },
  ethicon: {
    marginBottom: -2,
  },
  listPrice: {
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .price-label': {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      order: 1,
      marginTop: 20,
      textAlign: 'center',
      '& .price-list': {
        flexDirection: 'column',
        '& p': {
          marginTop: 2,
          marginBottom: 2,
        },
      },
    },
  },
  action: {
    marginTop: 20,
    marginBottom: 20,
    '& button': {
      width: '100%',
      height: 50,
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  attributes: {
    [theme.breakpoints.down('sm')]: {
      order: 4,
      marginBottom: 25,
    },
  },
  smallButton: {
    fontSize: 20,
    lineHeight: '24px',
    padding: '9px 19px',
    marginRight: 18,
    minHeight: 'unset',
    '& img': {
      marginRight: 13.5,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '6px 10px',
      fontSize: 16,
      lineHeight: '19px',
      fontWeight: 'normal',
    },
  },
  roundButton: {
    borderRadius: '50%',
    padding: '10px',
    minWidth: 'unset',
    minHeight: 'unset',
    marginRight: 17,
    [theme.breakpoints.down('sm')]: {
      padding: '7px',
      '& img': {
        width: 15,
        height: 15,
      },
    },
  },
  moveDown: {
    width: '100%',
    height: 33,
    marginTop: -40,
    marginBottom: 40,
    '& a': {
      position: 'absolute',
      zIndex: 1,
      background: '#0D455C',
      borderRadius: '50%',
      padding: '9px 9px',
      left: 'calc(25% - 40px)',
    },
    [theme.breakpoints.down('sm')]: {
      height: 28,
      marginTop: -45,
      marginBottom: 45,
      '& a': {
        padding: '10px 15px',
        left: 'calc(50% - 45px)',
        '& img': {
          height: 40,
        },
      },
    },
  },
  bubbles: {
    position: 'absolute',
    top: 117,
    right: -176,
    opacity: 0.5
  },
  appBar: {
    background: 'linear-gradient(180deg, #042A3D 0%, #0C445B 78%)',
    color: theme.palette.common.white,
    boxShadow: 'none',
    height: 100,
    transition: 'height 0.3s',
    overflow: 'hidden',
    '&.hidden': {
      height: 0,
    },
  },
  toolBar: {
    height: 100,
    paddingTop: 21,
    paddingBottom: 21,
    minHeight: 'unset',
  },
  navPriceText: {
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      lineHeight: '30px',
    },
  },
  navbarButton: {
    padding: '8px 39px',
  },
  mobileHidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileShow: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inherit',
    },
  },
  tabletHidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileCenter: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  mobileLeft: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  mobileCharacter: {
    '& .MuiPaper-root': {
      width: '100%',
      padding: 5,
    },
    '& img': {
      width: '100%',
    },
  },
  minWidth120: {
    minWidth: 120,
  },
}));

const getDimensions = (ele: HTMLDivElement) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const Hero = () => {
  const classes = useStyles();
  const [showHeroOriginal, setShowHeroOriginal] = useState(true);
  let thisRef = createRef<HTMLDivElement>();
  const theme = useTheme();
  const mediaMatches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      if (!thisRef.current) {
        return;
      }
      const { height: heroHeight } = getDimensions(thisRef.current);
      const headerHeight = 100;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= headerHeight + heroHeight) {
        setShowHeroOriginal(false);
      } else {
        setShowHeroOriginal(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div ref={thisRef}>
      <div className={clsx(classes.root, 'container')}>
        <div className={classes.background1}>
          <LottieImage width={936} height={489} src={Octopus}/>
        </div>
        <div className={classes.bubbles}>
          <LottieImage width={300} height={300} src={Bubbles}/>
        </div>

        <Grid container className={classes.main} spacing={10}>
          <Grid item md={6} xs={12} className={clsx(classes.characterContainer, classes.mobileHidden)}>
            <Paper elevation={20} square>
              <img src={Character} />
            </Paper>
          </Grid>

          <Grid item md={6} xs={12} className={classes.detailPanel}>
            <Grid container>
              <Grid item lg={10} xs={12}>
                <Typography variant='h3'>NFT title goes here and also on this second line</Typography>
                <p>
                  Part of the <b>Batman White Knight Presents</b> Collection
                </p>
              </Grid>
            </Grid>
            <Grid className={clsx(classes.mobileShow, classes.mobileCharacter)} container>
              <Paper elevation={20} square>
                <img src={Character} />
              </Paper>
            </Grid>
            <Grid container className={classes.ownerInfo} wrap='nowrap'>
              <Grid item xs={false} md={2} className={classes.mobileHidden}>
                <Avatar src={AvatarImg} className={classes.avatar}></Avatar>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item xs={3} md={12}>
                    <p>Created by: </p>
                  </Grid>
                  <Grid item xs={4} md={12}>
                    <p>
                      <b>
                        {' '}
                        Ron English <img src={CheckBadge} />
                      </b>
                    </p>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <p>on March 16, 2021:</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={6} md={12}>
                  <p>
                    Owner: <b>Sadness</b>
                  </p>
                </Grid>
                <Grid item xs={6} md={12}>
                  <p>
                    Token ID: <b>88</b>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Box className={classes.listPrice}>
              <Box className='price-label'>
                <p>Listing Price</p>
              </Box>
              <Box display='flex' justifyContent='stretch' alignItems='center' className='price-list'>
                <Box>
                  <img src={PWhiteMark} className={classes.prtIcon} />
                  <span className={classes.priceText}>10,000 PRT</span>
                </Box>
                <Box maxWidth={20} mx={2}>
                  <p>or</p>
                </Box>
                <Box>
                  <img src={Etherum} className={classes.ethicon} />
                  <span className={classes.priceText}>6.626 ETH</span>
                </Box>
              </Box>
            </Box>
            <Grid container className={classes.action} spacing={3}>
              <Grid item xs={12} md={6}>
                <PortionButton color='secondary' animation={true}>Buy</PortionButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <PortionButton color='secondary' outline={true}>
                  Make an Offer
                </PortionButton>
              </Grid>
            </Grid>
            <Box className={classes.attributes} display='flex' justifyContent='space-between'>
              <Box>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.smallButton}>
                  <img src={Eye} /> Watch
                </PortionButton>
                <span className={classes.tabletHidden}>Views: 597</span>
              </Box>
              <Box flexGrow={1}></Box>
              <Box>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={Facebook} />
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={Twitter} />
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={Telegram} />
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={LinkImg} />
                </PortionButton>
              </Box>
            </Box>
          </Grid>

          <Grid item md={12} className={classes.mobileHidden}>
            <PortionButton color='secondary' size='small' radius='hard' outline={true} className={classes.roundButton}>
              <img src={Expand} />
            </PortionButton>
          </Grid>
        </Grid>
      </div>
      <div className={classes.moveDown}>
        <ScrollLink href='#' activeClass='active' to='Main-Page' spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={0} isDynamic={true} ignoreCancelEvents={false}>
          <LottieImage src={ArrowDown} width={60} height={60}/>
        </ScrollLink>
      </div>
      <AppBar className={clsx(classes.appBar, showHeroOriginal ? 'hidden' : '', classes.mobileHidden)} position='fixed'>
        <Toolbar className={clsx(classes.toolBar, 'container')}>
          <Box width={1} display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' gridGap={mediaMatches ? 5 : 34}>
            <Box width={380}>
              <Typography variant='h5'>NFT title goes here and also on this extremely long second line</Typography>
            </Box>
            <Box flexGrow='1'></Box>
            <Box className={classes.navPriceText}>
              Reserve price <b>10,000 PRT</b> or <b>6.626 ETH</b>
            </Box>
            <Box width={332} display='flex' justifyContent='space-between' alignItems='center'>
              <PortionButton color='secondary' className={classes.navbarButton} animation={true}>
                Buy
              </PortionButton>
              <PortionButton color='secondary' outline={true} className={clsx(classes.navbarButton, classes.minWidth120)}>
                Make an Offer
              </PortionButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Hero;
