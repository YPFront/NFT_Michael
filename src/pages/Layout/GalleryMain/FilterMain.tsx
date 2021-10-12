import { Box, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { useState } from 'react';
import SearchSelect from 'src/components/SearchSelect';
import SectionCollapse from 'src/components/SectionCollapse';

const useStyles = makeStyles((theme) => ({
    filter: {
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            gap: 0,
            width: '100%',
            '& > .MuiBox-root': {
                width: '50%',
                textAlign: 'center',
                marginTop: 12,
            },
        },
        [theme.breakpoints.down('xs')]: {
            '& > .MuiBox-root': {
                width: '100%',
                textAlign: 'center',
                marginTop: 12,
            },
        },
    },
    sortBy: {
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: 12,
        },
    },
    parentBox: {},
    collapse: {},
    collapseButton: {
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 700,
    },
    toggleButton: {
        color: theme.palette.primary.main,
        padding: '6px 22px',
        minHeight: 'unset',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 16px)',
        },
        '&.MuiButtonBase-root': {
            borderRadius: 8,
            border: `1px solid ${theme.palette.primary.main}`,
            '&:hover, &.Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
        },
    },
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
        label: 'Artists',
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

export default function FilterMain({}: Props) {
    const classes = useStyles();
    const theme = useTheme();
    const smMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'));
    const [verified, setVerified] = useState(false);

    const FilterButtons = () => {
        return (
            <Box display='flex' justifyContent='space-between' flexWrap='wrap' className={classes.parentBox}>
                <Box display='flex' className={classes.filter}>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Artist' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={smMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Collections' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : smMatch ? 'right' : 'left'} searchMode={true} groupMode={true} label='Categories' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Tags' />
                    </Box>
                    <Box>
                        <SearchSelect options={groupedOptions} popupPosition={smMatch ? 'center' : 'left'} searchMode={true} groupMode={true} label='Chain' />
                    </Box>
                    <Box>
                        <ToggleButton value={verified} aria-label='Verified' className={classes.toggleButton} onChange={(e) => setVerified(!verified)} selected={verified}>
                            Verified Only
                        </ToggleButton>
                        {/* <SearchSelect options={groupedOptions} popupPosition={xsMatch ? 'center' : smMatch ? 'right' : 'left'} searchMode={true} groupMode={true} label='Verified' /> */}
                    </Box>
                </Box>
                <Box display='flex' className={classes.sortBy}>
                    <SearchSelect popupPosition={smMatch ? 'center' : 'right'} options={flavourOptions} label='Sort by...' />
                </Box>
            </Box>
        );
    };

    return (
        <Box my={4}>
            {xsMatch ? (
                <SectionCollapse className={classes.collapse} title={<span className={classes.collapseButton}>Filter</span>}>
                    <FilterButtons></FilterButtons>
                </SectionCollapse>
            ) : (
                <FilterButtons></FilterButtons>
            )}
        </Box>
    );
}
