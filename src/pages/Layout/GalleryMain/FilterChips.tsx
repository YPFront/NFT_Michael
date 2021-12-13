import { Box, Chip, Button, Typography } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React, {useState} from 'react';
import clsx from 'clsx';
import deleteIcon from 'src/assets/img/deleteIcon.svg';

const useStyles = makeStyles((theme: Theme) => ({
  filterChips:{
    paddingLeft: 100,
    paddingBottom:50,
    '& .MuiChip-root':{
        border: '1px solid #DAB679',
        borderRadius: 8,
        marginRight: 8,
        fontSize: 20,
        height: 'unset',
        padding:"10px 10px 14px 12px",
        backgroundColor:theme.palette.common.white,
        '& .MuiChip-deleteIcon':{
            marginLeft: 8,
        },
        '& img':{
          width: 14,
          height: 14,
        }
    },
    '& .MuiButton-root':{
        color: theme.palette.primary.main,
        fontWeight: 'unset',
        fontSize:18,
        marginLeft: 10,
        '&:hover': {
          backgroundColor: '#fff',
        }
    }
  },
  resultText:{
      paddingBottom: 9
  },
}));

interface ChipData {
    key: number,
    label: string,
};


  
const FilterChips = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [chipData, setChipData] = useState<ChipData[]>([
    { key: 0, label: 'Filter1' },
    { key: 1, label: 'Filter2' },
    { key: 2, label: 'Filter3' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([]);
  };
  return (
    <Box id='filterChips' className={classes.filterChips}>
        <Typography className={classes.resultText}>
            Displaying 24 Results
        </Typography>
        {chipData.map((data)=>(
                <Chip 
                    label={data.label}
                    variant = "outlined"
                    deleteIcon = {<img src={deleteIcon}/>}
                    onDelete={handleDelete(data)}
                />
            ))
        }
        <Button onClick={handleClearAll}>
            Clear all
        </Button>
    </Box>
  );
};

export default FilterChips;
