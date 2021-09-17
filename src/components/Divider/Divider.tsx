import { makeStyles, Theme } from '@material-ui/core/styles';
import DiamondLeft from 'src/assets/img/diamond_left.svg';
import DiamondRight from 'src/assets/img/diamond_right.svg';
import Diamond from 'src/assets/lottie/diamond.json';
import LottieImage from '../LottieImage';

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
  },
  diamond: {
    marginLeft: 5,
    marginRight: 5
  }
}));

type Props = {
};

const Divider = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.line}></div>
      <img src={DiamondLeft} />
      <div className={classes.diamond}>
        <LottieImage src={Diamond} width={26} height={46}/>
      </div>
      <img src={DiamondRight} />
      <div className={classes.line}></div>
    </div>
  );
};

export default Divider;
