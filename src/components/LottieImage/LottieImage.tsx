import { makeStyles, Theme } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import Octopus from 'src/assets/lottie/octopus.json';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 30,
    padding: 1,
    gap: 8,
  },
  toggleButton: {
    color: theme.palette.primary.main,
    padding: '5px 16px',
    height: 36,
    minHeight: 'unset',
    '&.MuiButtonBase-root': {
      borderRadius: 8,
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover, &.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
  },
}));

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LottieImage = (props: any) => {
  const { className, src, ...other } = props;
  const classes = useStyles();

  return (
    <Lottie
      options={{
        ...defaultLottieOptions,
        animationData: src,
      }}
      {...other}
    />
  );
};

export default LottieImage;
