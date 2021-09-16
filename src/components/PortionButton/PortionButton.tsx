import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button, { ButtonTypeMap } from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: '6px 22px',
      "&.MuiButton-colorInherit.MuiButton-contained": {
        color: theme.palette.common.black,
        background: theme.palette.common.white,
        '&:hover': {
          background: theme.palette.grey[300]
        }
      },
      '&.MuiButton-outlinedSecondary': {
        color: theme.palette.secondary.main,
        '&.MuiButton-sizeSmall': {
          opacity: 0.5,
          '&:hover': {
            opacity: 1,
            background: 'transparent',
          }
        },
        '&:hover': {
          background: theme.palette.secondary.main,
          color: theme.palette.common.black
        },
      },
      "&.MuiButton-colorInherit.MuiButton-outlined": {
        opacity: 0.5,
        "&:hover": {
          opacity: 1
        }
      }
    },
    buttonRadiusNormal: {
      borderRadius: 6,
    },
    buttonRadiusHard: {
      borderRadius: 100,
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
  size?: 'small' | 'medium' | 'large';
};

export default function PortionButton(props: any) {
  const { color, radius, children, outline, size, className, ...other } = props;
  const classes = useStyles();

  return (
    <Button variant={outline ? 'outlined' : 'contained'} size={size ? size : 'medium'} color={color} className={clsx(classes.button, radius == 'hard' ? classes.buttonRadiusHard : classes.buttonRadiusNormal, className)} {...other}>
      {children}
    </Button>
  );
}
