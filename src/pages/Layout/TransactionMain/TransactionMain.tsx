import { Box, Tab, Tabs, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { TabContext, TabPanel } from '@material-ui/lab';
import clsx from 'clsx';
import { useState } from 'react';
import TransactionList from 'src/components/TransactionList';
import { TransactionType } from 'src/components/TransactionList/TransactionType';
import NFGImg from 'src/assets/img/blog1.svg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        marginTop: 111,
        marginBottom: 38,
        background: theme.palette.background.default,
        overflow: 'hidden',
        maxWidth: 976,
        margin: '0 auto',
    },
    tabButton: {
        '& .MuiButtonBase-root': {
            color: theme.palette.primary.main,
            fontSize: 24,
            lineHeight: '29px',
            marginRight: 60,
            minWidth: 'unset',
            '&.Mui-selected': {
                color: theme.palette.common.black,
            },
        },
        '& .MuiTabs-indicator': {
            background: 'transparent',
        },
        '& .MuiTabs-scroller': {
            overflowX: 'scroll',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        [theme.breakpoints.down('xs')]: {
            '& .MuiTab-root': {
                minWidth: 'unset',
                marginTop: 16,
                marginRight: 10,
            },
            '& .MuiButtonBase-root': {
                fontSize: 20,
            },
        },
    },
    topText: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: '80px',
        marginBottom: -16,
        marginTop: 0,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down(500)]: {
            lineHeight: 'initial',
        },
    },
    noPadTabPanel: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    tabBox: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: 16,
        },
    },
    mobileTab: {
        [theme.breakpoints.down(500)]: {
            alignItems: 'center',
            flexDirection: 'column',
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

const TransactionMain = (props: any) => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState('all');
    let data: TransactionType[] = [
        {
            text: 'Congratulations, you won the auction for [NFT title goes here and here and here]',
            date: 'March 31, 2021 at 3:00pm ET',
            type: 'CLAIM',
            src: NFGImg,
        },
        {
            text: 'Placed a bid of 3,000 PRT for [NFT title goes here and here and here]',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: 'You were outbid for [NFT title goes here and here and here]',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: 'Placed a bid of 3,000 PRT for [NFT title goes here and here and here]',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: '[NFT title goes here and here and here] is transferred to your MetaMask wallet',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: 'Your offer for [NFT title goes here and here and here] was accepted',
            date: 'March 31, 2021 at 3:00pm ET',
            type: 'ACCEPTED&PENDING',
            src: NFGImg,
        },
        {
            text: 'Placed a bid of 3,000 PRT for [NFT title goes here and here and here]',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: '[NFT title goes here and here and here] is transferred to your MetaMask wallet',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: 'Your offer for [NFT title goes here and here and here] was accepted',
            date: 'March 31, 2021 at 3:00pm ET',
            type: 'SOLD',
            src: NFGImg,
        },
        {
            text: 'You received an offer of 18,000 PRT for [NFT title goes here and here and here]',
            date: 'March 31, 2021 at 3:00pm ET',
            type: 'ACCEPTED',
            src: NFGImg,
        },
        {
            text: '[NFT title goes here and here and here] is transferred to your MetaMask wallet',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: 'You received an offer of 9,000 PRT for [NFT title goes here and here and here]',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'REJECTED',
            src: NFGImg,
        },
        {
            text: '[NFT title goes here and here and here] is transferred to your MetaMask wallet',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
        {
            text: '[NFT title goes here and here and here] is transferred to your MetaMask wallet',
            date: 'March 31, 2021 at 2:39pm ET',
            type: 'NORMAL',
            src: NFGImg,
        },
    ];

    const handleTabChange = (event: React.ChangeEvent<{}>, value: any) => {
        setSelectedTab(value);
    };
    return (
        <div className={clsx(classes.root, 'container')} id='Transaction'>
            <Box textAlign='center' mt={6} mb={8}>
                <Typography variant='h3'>Transactions</Typography>
            </Box>
            <Box className={classes.tabBox}>
                <TabContext value={selectedTab}>
                    <Tabs value={selectedTab} onChange={handleTabChange} className={classes.tabButton} variant='scrollable' scrollButtons='off'>
                        <Tab value='all' label='All' />
                        <Tab value='purchases' label='Purchases' />
                        <Tab value='auctions' label='Auctions' />
                        <Tab value='sales' label='Sales' />
                        <Tab value='creations' label='Creations' />
                    </Tabs>

                    <TabPanel value='all' className={classes.noPadTabPanel}>
                        <TransactionList data={data}></TransactionList>
                    </TabPanel>
                    <TabPanel value='purchases' className={classes.noPadTabPanel}>
                        <TransactionList data={data}></TransactionList>
                    </TabPanel>
                    <TabPanel value='auctions' className={classes.noPadTabPanel}>
                        <TransactionList data={data}></TransactionList>
                    </TabPanel>
                    <TabPanel value='sales' className={classes.noPadTabPanel}>
                        <TransactionList data={data}></TransactionList>
                    </TabPanel>
                    <TabPanel value='creations' className={classes.noPadTabPanel}>
                        <TransactionList data={data}></TransactionList>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default TransactionMain;
