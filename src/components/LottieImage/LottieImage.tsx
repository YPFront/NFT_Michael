import { makeStyles, Theme } from '@material-ui/core/styles';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme: Theme) => ({
}));

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LottieImage = (props: any) => {
  const { src, ...other } = props;

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
