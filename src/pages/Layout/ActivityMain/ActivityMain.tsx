import { Box, Tab, Tabs, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { TabContext, TabPanel } from '@material-ui/lab';
import clsx from 'clsx';
import { useState } from 'react';
import ActivityView from './ActivityView';
import ArtistSlider from './ArtistSlider';
import CollectorSlider from './CollectorSlider';
import PortionStats from './PortionStats';
import SellerSlider from './SellerSlider';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        marginTop: 111,
        marginBottom: 38,
        background: theme.palette.background.default,
        overflow: 'hidden',
    },
    tabButton: {
        '& .MuiButtonBase-root': {
            color: theme.palette.primary.main,
            fontSize: 24,
            lineHeight: '29px',
            marginRight: 48,
            '&.Mui-selected': {
                color: theme.palette.common.black,
            },
        },
        '& .MuiTabs-indicator': {
            background: 'transparent',
        },
        [theme.breakpoints.down('sm')]: {
            '& .MuiTab-root': {
                minWidth: 'unset',
                marginTop: 16,
                marginRight: 16,
            },
        },
    },
    topText: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: '80px',
        marginBottom: -16,
        marginTop: 0
    },
    noPadTabPanel: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    tabBox: {
        marginLeft: -25,
        marginBottom: 56,
        width: 'calc(100% + 50px)',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            width: 'calc(100% + 25px)',
            marginBottom: 16
        },
    },
    marketplaceTitle: {
        minWidth: 370,
    },
    marketPlaceHeader: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            '& .MuiTab-root': {
                minWidth: 'unset',
                marginTop: 16,
                marginRight: 16,
            },
        },
    },
    mobileHidden: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    tabletHidden: {
        ['@media (max-width: 1024px)']: {
            display: 'none',
        },
    },
    description: {
        ['@media (min-width: 992px) and (max-width: 1024px)']: {
            maxWidth: '50%',
        },
    },
}));

const ActivityMain = (props: any) => {
    const classes = useStyles();
    const [topTab, setTab] = useState('top-artist');
    const [activityTab, setActivityTab] = useState('all');
    const theme = useTheme();
    const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));

    const handleTopTabChange = (event: React.ChangeEvent<{}>, value: any) => {
        setTab(value);
    };

    const handleActivityTabChange = (event: React.ChangeEvent<{}>, value: any) => {
        setActivityTab(value);
    };

    return (
        <div className={clsx(classes.root, 'container')} id='Activity'>
            <Box display='flex' textAlign='center' justifyContent='center' my={6}>
                <Box maxWidth={605}>
                    <Typography variant='h3'>What's been going on?</Typography>
                    <p>This page shows all offers, sales, and purchases happening on Portion. The page will auto refresh every 10 seconds.</p>
                </Box>
            </Box>
            <Box className={classes.tabBox}>
                <TabContext value={topTab}>
                    {mediaMatches ? (
                        <Box display='flex' gridGap={15}>
                            <p className={classes.topText}>Top:</p>
                            <Tabs value={topTab} onChange={handleTopTabChange} aria-label='basic tabs example' className={classes.tabButton}>
                                <Tab value={'top-artist'} label='Artist' />
                                <Tab value={'top-collectors'} label='Collectors' />
                                <Tab value={'top-sales'} label='Sales' />
                            </Tabs>
                        </Box>
                    ) : (
                        <Tabs value={topTab} onChange={handleTopTabChange} aria-label='basic tabs example' className={classes.tabButton}>
                            <Tab value={'top-artist'} label='Top Artist' />
                            <Tab value={'top-collectors'} label='Top Collectors' />
                            <Tab value={'top-sales'} label='Top Sales' />
                        </Tabs>
                    )}

                    <TabPanel value={'top-artist'} className={classes.noPadTabPanel}>
                        <ArtistSlider></ArtistSlider>
                    </TabPanel>
                    <TabPanel value={'top-collectors'} className={classes.noPadTabPanel}>
                        <CollectorSlider></CollectorSlider>
                    </TabPanel>
                    <TabPanel value={'top-sales'} className={classes.noPadTabPanel}>
                        <SellerSlider></SellerSlider>
                    </TabPanel>
                </TabContext>
            </Box>
            <Box>
                <TabContext value={activityTab}>
                    <Box display='flex' gridGap={60} className={classes.marketPlaceHeader}>
                        <Typography variant='h4'>Marketplace Activity</Typography>
                        <Tabs value={activityTab} onChange={handleActivityTabChange} aria-label='basic tabs example' className={classes.tabButton}>
                            {/* <Tab className={classes.marketplaceTitle} disabled={true} label={<Typography variant="h4">Marketplace Activity</Typography>}></Tab> */}
                            <Tab value={'all'} label='All' />
                            <Tab value={'stuff-following'} label='Stuff I’m Following' />
                        </Tabs>
                    </Box>

                    <TabPanel value={'all'} className={classes.noPadTabPanel}>
                        <ActivityView></ActivityView>
                    </TabPanel>
                    <TabPanel value={'stuff-following'} className={classes.noPadTabPanel}>
                        <ActivityView></ActivityView>
                    </TabPanel>
                </TabContext>
            </Box>
            <Box mt={6}>
                <Typography variant='h4'> Portion Stats </Typography>
                <p>Take a look at the top selling NFTs (by secondary market sales)</p>
                <PortionStats></PortionStats>
            </Box>
        </div>
    );
};

export default ActivityMain;
