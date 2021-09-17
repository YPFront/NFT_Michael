import { makeStyles, Theme } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import clsx from 'clsx';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 30,
    padding: 1,
    gap: 8
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
        color: theme.palette.common.white
      }
    }
  }
}));

type Props = {
  className?: string;
  data: string[];
  value?: string[];
};

const Chips = (props: Props) => {
  const { className, data, value } = props;
  const [ selected, setSelected ] = useState(value ? value : []);
  const classes = useStyles();

  const handleChange = (event: React.MouseEvent<HTMLElement>, newData: string[]) => {
    setSelected(newData)
  };

  return (
    <ToggleButtonGroup value={selected} className={clsx(classes.root, className)} onChange={handleChange}>
      {
        data.map((item, index) => (
          <ToggleButton key={index} value={item} aria-label={item} className={classes.toggleButton}>
            {item}
          </ToggleButton>
        ))
      }
    </ToggleButtonGroup>
  );
};

export default Chips;
