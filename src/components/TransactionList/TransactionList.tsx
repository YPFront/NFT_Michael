import { makeStyles, Theme } from '@material-ui/core/styles';
import TransactionListItem from './TransactionListItem';
import { TransactionType } from './TransactionType';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    listStyle: 'none',
    padding: 0,
    marginBottom: 16,
    position: 'relative',
    zIndex: 1,
    '& li': {
      marginBottom: 8,
      '&:last-child': {
        marginBottom: 0
      }
    }
  }
}));

type Props = {
  data: TransactionType[];
};

const ActivityList = (props: Props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <TransactionListItem key={index} data={item}></TransactionListItem>
          </li>
        );
      })}
    </ul>
  );
};

export default ActivityList;
