import { PropTypes } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import LottieImage from '../LottieImage';
import B_effect_lr from 'src/assets/lottie/button_effect_lr.json';
import B_effect_rl from 'src/assets/lottie/button_effect_rl.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: '6px 22px',
      '&.MuiButton-colorInherit.MuiButton-contained': {
        color: theme.palette.common.black,
        background: theme.palette.common.white,
        '&:hover': {
          background: theme.palette.grey[300],
        },
      },
      '&.MuiButton-outlinedSecondary': {
        color: theme.palette.secondary.main,
        '&.MuiButton-sizeSmall': {
          opacity: 0.5,
          '&:hover': {
            opacity: 1,
            background: 'transparent',
          },
        },
        '&:hover': {
          background: theme.palette.secondary.main,
          color: theme.palette.common.black,
        },
      },
      '&.MuiButton-outlinedPrimary': {
        color: theme.palette.primary.main,
        '&:hover': {
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
      '&.MuiButton-colorInherit.MuiButton-outlined': {
        opacity: 0.5,
        '&:hover': {
          opacity: 1,
        },
      },
    },
    buttonRadiusNormal: {
      borderRadius: 6,
    },
    buttonRadiusHard: {
      borderRadius: 100,
    },
    ButtonEffectLR: {
      position: 'absolute',
      opacity: 0.8,
      top: '-13px',
      left: 0,
      width: '70%'
    },
    ButtonEffectRL: {
      position: 'absolute',
      opacity: 0.8,
      bottom: '-3px',
      right: 0,
      width: '70%'
    },
    ButtonEffectRoot: {
      position: 'relative'
    }
  })
);

interface Props {
  color: PropTypes.Color;
  radius?: string;
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
  width?: number;
  animation: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function PortionButton(props: any) {
  const { color, radius, children, outline, size, className, animation, ...other } = props;
  const classes = useStyles();

  return animation != true ? (
    <Button variant={outline ? 'outlined' : 'contained'} size={size ? size : 'medium'} color={color} className={clsx(classes.button, radius == 'hard' ? classes.buttonRadiusHard : classes.buttonRadiusNormal, className)} {...other}>
      {children}
    </Button>
  ) : (
    <div  className={classes.ButtonEffectRoot}>
      <div className={classes.ButtonEffectLR}>
        <LottieImage width='100%' height='11px' src={B_effect_lr}/>
      </div>
      <Button variant={outline ? 'outlined' : 'contained'} size={size ? size : 'medium'} color={color} className={clsx(classes.button, radius == 'hard' ? classes.buttonRadiusHard : classes.buttonRadiusNormal, className)} {...other}>
        {children}
      </Button>
      <div className={classes.ButtonEffectRL}>
        <LottieImage width='100%' height='11px' src={B_effect_rl}/>
      </div>
    </div>
  );
}
