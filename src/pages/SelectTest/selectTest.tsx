import { Box, makeStyles, ThemeProvider, useMediaQuery, useTheme } from '@material-ui/core';
import SearchSelect from 'src/components/SearchSelect';
import { theme as PortionTheme } from 'src/theme/theme';

const useStyles = makeStyles((theme) => ({
    filter: {
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            gap: 0,
            width: '100%',
            '& > .MuiBox-root': {
                width: '33%',
                textAlign: 'center',
                marginTop: 12
            }
        },
        [theme.breakpoints.down('xs')]: {
            '& > .MuiBox-root': {
                width: '100%',
                textAlign: 'center',
                marginTop: 12
            }
        }
    },
    sortBy: {
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: 12
        }
    }
}));

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
    {
        label: 'Colours',
        options: colourOptions,
    },
    {
        label: 'Flavours',
        options: flavourOptions,
    },

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
    const theme = useTheme();
    const smMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <ThemeProvider theme={PortionTheme}>
            <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
                <Box display='flex' gridGap={20} className={classes.filter}>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Artist' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={smMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Collections' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : (smMatch ? 'right' : 'left')} searchMode={true} groupMode={true} label='Categories' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Tags' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={smMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Chain' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : (smMatch ? 'right' : 'left')}  searchMode={true} groupMode={true} label='Verified' />
                    </Box>
                </Box>
                <Box display='flex' className={classes.sortBy}>
                    <SearchSelect popupPosition={smMatch ? 'center' : 'right'} options={flavourOptions} label='Sort by...' />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
