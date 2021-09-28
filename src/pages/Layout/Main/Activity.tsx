import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ActivityList from 'src/components/ActivityList';
import { ActivityType } from 'src/components/ActivityList/ActivityType';
import Background1 from 'src/assets/img/background2.svg'
import GeoShape from 'src/assets/lottie/geoShape.json';
import LottieImage from 'src/components/LottieImage';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative'
  },
  background1: {
    position: 'absolute',
    opacity: 0.1,
    minWidth: 776,
    top: -40,
    right: 'calc(-2% - 180px)',
    [theme.breakpoints.down('sm')]: {
      opacity: 0.2
    }
  },
  background2: {
    width: '100%',
    padding: '0 96px',
    boxSizing: 'border-box',
  },
  lottie: {
    opacity: 0.2
  }
}));

const ActivitySection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mediaMatches = useMediaQuery(theme.breakpoints.down(500));
  const data: ActivityType[] = [
    {
      userId1: 'seth',
      action: 'transferred to',
      userId2: 'sadness',
      timeStamp: 'March 19, 2021 at 12:23am ET',
      money: 5.5
    },
    {
      userId1: 'seth',
      action: 'transferred to',
      userId2: 'sadness',
      timeStamp: 'March 19, 2021 at 12:23am ET',
      money: 5.5
    },
    {
      userId1: 'seth',
      action: 'transferred to',
      userId2: 'sadness',
      timeStamp: 'March 19, 2021 at 12:23am ET',
      money: 5.5
    },
    {
      userId1: 'seth',
      action: 'transferred to',
      userId2: 'sadness',
      timeStamp: 'March 19, 2021 at 12:23am ET',
      money: 5.5
    },
    {
      userId1: 'seth',
      action: 'transferred to',
      userId2: 'sadness',
      timeStamp: 'March 19, 2021 at 12:23am ET',
      money: 5.5
    },
    {
      userId1: 'seth',
      action: 'transferred to',
      userId2: 'sadness',
      timeStamp: 'March 19, 2021 at 12:23am ET',
      money: 5.5
    }
  ]
  const [lottieMedia, setLottieMedia] = useState({});

  useEffect(() => {
    if (mediaMatches)
      setLottieMedia({
        marginTop: '-20%',
        position: 'relative'
      });
  }, [mediaMatches])

  return (
    <div className={classes.root}>
      <img src={Background1} className={classes.background1}/>
      <Typography variant="h4"> Activity </Typography>
      <ActivityList data={data}></ActivityList>
      <LottieImage style={lottieMedia} src={GeoShape} width={mediaMatches ? '80%' : 396}/>
    </div>
  );
};

export default ActivitySection;
