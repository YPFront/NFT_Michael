import { Avatar, Box, Grid, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Background1 from 'src/assets/img/background1.svg';
import Character from 'src/assets/img/character.svg';
import AvatarImg from 'src/assets/img/avatar.svg';
import CheckBadge from 'src/assets/img/checkBadge.svg';
import PWhiteMark from 'src/assets/img/PWhiteMark.svg';
import Etherum from 'src/assets/img/etherum.svg';
import Eye from 'src/assets/img/eye.svg';
import Facebook from 'src/assets/img/facebook.svg';
import Twitter from 'src/assets/img/twitter.svg';
import Telegram from 'src/assets/img/telegram.svg';
import LinkImg from 'src/assets/img/link.svg';
import ArrowDown from 'src/assets/img/arrow_down.svg';
import Expand from 'src/assets/img/expand.svg';
import PortionButton from '../PortionButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #042A3D 0%, #0C445B 53.48%)',
    overflow: 'hidden',
    position: 'relative',
    color: theme.palette.common.white
  },
  main: {
    marginTop: 100,
    marginBottom: 0,
    paddingTop: 23,
    position: 'relative',
    '&>.MuiGrid-item': {
      paddingTop: 0
    }
  },
  background1: {
    width: 936,
    position: 'absolute',
    top: '30%',
    left: '-2%',
    '& img': {
      width: '100%',
    },
  },
  characterContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
      //maxHeight: 'calc(100vh - 280px)'
    },
  },
  detailPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& b': {
      color: theme.palette.secondary.main,
      fontWeight: 'normal',
    },
  },
  ownerInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 64,
    '& p': {
      marginBlockStart: 3,
      marginBlockEnd: 3,
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
  },
  listPrice: {
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
    '& p': {
      marginBottom: 5,
    },
  },
  action: {
    marginTop: 36,
    marginBottom: 36,
    '& button': {
      width: '100%',
      height: 50,
      fontSize: 20,
    },
  },
  attributes: {},
  smallButton: {
    fontSize: 20,
    lineHeight: '24px',
    padding: '9px 19px',
    marginRight: 18,
    '& img': {
      marginRight: 13.5
    }
  },
  roundButton: {
    borderRadius: '50%',
    padding: '10px',
    minWidth: 'unset',
    marginRight: 17
  },
  moveDown: {
    width: '100%',
    height: 33,
    marginTop: -35,
    marginBottom: 35,
    '& a': {
      position: 'absolute',
      zIndex: 1,
      background: '#0D455C',
      borderRadius: '50%',
      padding: '9px 15px',
      left: 'calc(25% - 40px)'
    }
  },
  circle: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '50%',
    opacity: 0.5,
  },
  circle1: {
    width: '156px',
    height: '156px',
    position: 'absolute',
    top: '117px',
    right: '-57px',
    borderRadius: '50%',
    opacity: 0.5,
  },
  circle2: {
    width: '104px',
    height: '104px',
    position: 'absolute',
    top: '218px',
    right: '31px',
    borderRadius: '50%',
    opacity: 0.5,
  },
  circle3: {
    width: '240px',
    height: '240px',
    position: 'absolute',
    top: '193px',
    right: '-176px',
    borderRadius: '50%',
    opacity: 0.5,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={clsx(classes.root, 'container')}>
        <div className={classes.background1}>
          <img src={Background1} />
        </div>
        <div className={clsx(classes.circle, classes.circle1)}></div>
        <div className={clsx(classes.circle, classes.circle2)}></div>
        <div className={clsx(classes.circle, classes.circle3)}></div>
        
        <Grid container className={classes.main} spacing={10}>
          <Grid item md={6} xs={12} className={classes.characterContainer}>
            <Paper elevation={20}>
              <img src={Character} />
            </Paper>
          </Grid>

          <Grid item md={6} xs={12} className={classes.detailPanel}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant='h3'>NFT title goes here and also on this second line</Typography>
                <p>
                  Part of the <b>Batman White Knight Presents</b> Collection
                </p>
              </Grid>
            </Grid>
            <Grid container wrap='nowrap' className={classes.ownerInfo}>
              <Grid item xs={2}>
                <Avatar src={AvatarImg} className={classes.avatar}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <p>Created by:</p>
                <p>
                  <b>
                    Ron English <img src={CheckBadge} />
                  </b>
                </p>
                <p>on March 16, 2021:</p>
              </Grid>
              <Grid item xs={6}>
                <p>
                  Owner: <b>Sadness</b>
                </p>
                <p>
                  Token ID: <b>88</b>
                </p>
              </Grid>
            </Grid>
            <Grid container className={classes.listPrice}>
              <Grid item md={12}>
                <p>Listing Price</p>
              </Grid>
              <Grid item md={4}>
                <img src={PWhiteMark} />
                <span className={classes.priceText}>10,000 PRT</span>
              </Grid>
              <Grid item md={1}>
                <p> or </p>
              </Grid>
              <Grid item md={4}>
                <img src={Etherum} />
                <span className={classes.priceText}>6.626 ETH</span>
              </Grid>
            </Grid>
            <Grid container className={classes.action} spacing={3}>
              <Grid item md={6}>
                <PortionButton color='secondary'>Buy</PortionButton>
              </Grid>
              <Grid item md={6}>
                <PortionButton color='secondary' outline={true}>
                  Make an Offer
                </PortionButton>
              </Grid>
            </Grid>
            <Grid container className={classes.attributes} spacing={3} justifyContent='space-between'>
              <Grid item md={4}>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.smallButton}>
                  <img src={Eye} /> Watch
                </PortionButton>
                <span>Views: 597</span>
              </Grid>
              <Grid item md={4}>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={Facebook}/>
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={Twitter}/>
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={Telegram}/>
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <img src={LinkImg}/>
                </PortionButton>
              </Grid>
            </Grid>
          </Grid>
        
          <Grid item md={12}>
            <PortionButton color='secondary' size='small' radius='hard' outline={true} className={classes.roundButton}><img src={Expand}/></PortionButton>
          </Grid>
        </Grid>
      </div>
      <div className={classes.moveDown}>
        <Link href="#"> <img src={ArrowDown}/> </Link>
      </div>
    </div>
  );
};

export default Hero;
