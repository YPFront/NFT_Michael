import { makeStyles, Theme } from '@material-ui/core/styles';
import ActivityListItem from './ActivityListItem';
import { ActivityType } from './ActivityType';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    listStyle: 'none',
    padding: 0,
    marginBottom: 0,
    position: 'relative',
    zIndex: 1,
    '& li': {
      marginBottom: 6,
      '&:last-child': {
        marginBottom: 0
      }
    }
  }
}));

type Props = {
  data: ActivityType[];
};

const ActivityList = (props: Props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <ActivityListItem key={index} data={item}></ActivityListItem>
          </li>
        );
      })}
    </ul>
  );
};

export default ActivityList;
