import { Box, FormControl, MenuItem, Paper, Select } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import PortionButton from '../PortionButton';
import PortionInput from '../PortionInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: 30,
      marginBottom: 30
    },
    paper: {
      padding: 20,
      borderRadius: 8
    },
    button: {
      width: '100%',
    },
    form: {
      marginBottom: 24,
      '& small': {
        fontSize: 14,
        lineHeight: '16.8px',
        color: '#828282'
      }
    },
    select: {
      height: 50,
      boxSizing: 'border-box'
    },
    input: {
      '& .MuiInputBase-root': {
        height: 50
      },
      '& .MuiOutlinedInput-adornedStart': {
        paddingLeft: 0,
      },
      '& .MuiInputAdornment-root': {
        maxHeight: 'unset',
        height: '100%',
        padding: '8px 13px',
        background: '#E0E0E0',
        color: '#828282',
        boxSizing: 'border-box'
      }
    }
  })
);

interface Props {
  handleSubmit: (e: any) => void;
}

export default function SubmitBidForm(props: any) {
  const { handleSubmit, ...other } = props;
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={classes.root}>
      {showForm ? (
        <Paper elevation={10} className={classes.paper}>
          <Box display='flex' gridGap={16} className={classes.form} alignItems="center">
            <Box>
              <FormControl>
                <PortionInput label="Bid" className={classes.input} type="number"></PortionInput>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <Select value={'ETH'} displayEmpty variant="outlined" className={classes.select}>
                  <MenuItem value='ETH'>ETH</MenuItem>
                  <MenuItem value='PRT'>PRT</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <small> Bid must be 100th of an ETH higher than 18.333 ETH </small>
            </Box>
          </Box>
          <PortionButton color='secondary' animation={true} onClick={(e: any) => setShowForm(!showForm)} className={classes.button}>
            Place a Bid
          </PortionButton>
        </Paper>
      ) : (
        <PortionButton color='secondary' animation={true} onClick={(e: any) => setShowForm(!showForm)} className={classes.button}>
          Place a Bid
        </PortionButton>
      )}
    </div>
  );
}
