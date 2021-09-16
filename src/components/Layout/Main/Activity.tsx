import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ActivityList from 'src/components/ActivityList';
import { ActivityType } from 'src/components/ActivityList/ActivityType';
import Background1 from 'src/assets/img/background2.svg'
import Background2 from 'src/assets/img/background3.svg'

const useStyles = makeStyles((theme: Theme) => ({
  background1: {
    position: 'absolute',
    opacity: 0.1,
    minWidth: 776,
    width: '60%',
    top: 40,
    right: '-2%'
  },
  background2: {
    width: '100%',
    padding: '0 96px',
    boxSizing: 'border-box'
  }
}));

const ActivitySection = () => {
  const classes = useStyles();
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

  return (
    <div>
      <img src={Background1} className={classes.background1}/>
      <Typography variant="h4"> Activity </Typography>
      <ActivityList data={data}></ActivityList>
      <img src={Background2} className={classes.background2}/>
    </div>
  );
};

export default ActivitySection;
