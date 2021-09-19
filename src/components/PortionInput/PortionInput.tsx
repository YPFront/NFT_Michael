import { InputAdornment, TextField } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import clsx from 'clsx';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  }
}));

type Props = {
};

const PortionInput = (props: any) => {
  const { className, label, ...other } = props;
  const classes = useStyles();

  return (
    <TextField
      className={clsx(classes.root, className)}
      variant="outlined"
      InputProps={{
        startAdornment: <InputAdornment position="start">{label}:</InputAdornment>,
      }}
      {...other}
    />
  );
};

export default PortionInput;
