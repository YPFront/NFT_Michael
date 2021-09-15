import { makeStyles, Theme } from '@material-ui/core/styles';
import Diamond from 'src/assets/img/diamond.svg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'stretch',
    marginTop: 30,
    marginBottom: 30
  },
  line: {
    borderBottom: '1px solid ' + theme.palette.secondary.main,
    marginBottom: 23,
    width: '50%'
  }
}));

type Props = {
};

const Divider = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.line}></div>
      <img src={Diamond}/>
      <div className={classes.line}></div>
    </div>
  );
};

export default Divider;
