import { makeStyles, ThemeProvider } from '@material-ui/core';
import SearchSelect from 'src/components/SearchSelect';
import { theme as PortionTheme } from 'src/theme/theme';

const useStyles = makeStyles((theme) => ({
  
}));

type Props = {};

const colourOptions = [
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "yellow", label: "Yellow", color: "#FFC400" }
];

const flavourOptions = [
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" }
];

const groupedOptions = [
  {
    label: "Colours",
    options: colourOptions
  },
  {
    label: "Flavours",
    options: flavourOptions
  }
];

export default function SelectTest({}: Props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={PortionTheme}>
      <SearchSelect options={
        groupedOptions
      }/>
    </ThemeProvider>
  );
}
