import { Box, makeStyles, ThemeProvider } from '@material-ui/core';
import SearchSelect from 'src/components/SearchSelect';
import { theme as PortionTheme } from 'src/theme/theme';

const useStyles = makeStyles((theme) => ({}));

type Props = {};

const colourOptions = [
    {
        value: 'blue',
        label: 'Blue',
        data: {
            color: '#0052CC',
        },
    },
    {
        value: 'yellow',
        label: 'Yellow',
        data: {
            color: '#0052CC',
        },
    },
];

const flavourOptions = [
    {
        value: 'vanilla',
        label: 'Vanilla',
        data: {
            rating: 'safe',
        },
    },
    {
        value: 'chocolate',
        label: 'Chocolate',
        data: {
            rating: 'safe',
        },
    },
];

const groupedOptions = [
    {
        label: 'Colours',
        options: colourOptions,
    },
    {
        label: 'Flavours',
        options: flavourOptions,
    },
];

export default function SelectTest({}: Props) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={PortionTheme}>
            <Box display='flex' gridGap={20}>
                <SearchSelect options={groupedOptions} searchMode={true} groupMode={true} label='Artist' />
                <SearchSelect options={groupedOptions} groupMode={true} label='Artist' />
                <SearchSelect options={flavourOptions} searchMode={true} label='Artist' />
                <SearchSelect options={flavourOptions} label='Artist' />
            </Box>
        </ThemeProvider>
    );
}
