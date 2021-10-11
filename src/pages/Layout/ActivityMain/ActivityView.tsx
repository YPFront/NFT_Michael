import { Box, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SaleImg from 'src/assets/img/sale_img.svg';
import PortionButton from 'src/components/PortionButton';

const useStyles = makeStyles((theme: Theme) => ({
    activity: {
        '& img': {
            width: '100%',
        },
        [theme.breakpoints.down(500)]: {
            width: '100%',
            maxWidth: 'unset',
            flexBasis: 'unset'
        },
        [theme.breakpoints.up(1440)]: {
            maxWidth: '20%',
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 160,
        padding: '14px 20px',
        background: theme.palette.common.white,
        '& b': {
            fontWeight: 400,
            color: theme.palette.primary.main,
        },
        '& small': {
            fontWeight: 400,
            fontSize: 16,
            color: '#828282',
        },
    },
    loadMore: {
        marginTop: 16,
        marginBottom: 16,
        [theme.breakpoints.down('sm')]: {
            '&>*': {
                width: '100%',
            },
        },
    },
}));

export interface ActivityType {
    content: JSX.Element;
    src: string;
    time: string;
}

const ActivityView = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));
    const [showCount, setShowCount] = useState(0);
    const data: ActivityType[] = [
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by{' '}
                    <b>
                        <b>Artist Name</b>
                    </b>{' '}
                    was put up for sale for 2.00 ETH / 6,000 PRT
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> was sold for 12.00 ETH
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> listed for 2.00 ETH / 6,000 PRT was watched by <b>Collector Name</b>
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> was put up for sale for 2.00 ETH/6,000 PRT
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title has an offer by <b>TheGersh1</b> for 5.00 ETH
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> minted 61 times at 6,000 PRT
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> was sold for 12.00 ETH
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> was put up for sale for 2.00 ETH / 6,000 PRT
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> was sold for 12.00 ETH
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> listed for 2.00 ETH / 6,000 PRT was watched by <b>Collector Name</b>
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title has an offer by <b>TheGersh1</b> for 5.00 ETH
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> was put up for sale for 2.00 ETH / 6,000 PRT
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> was sold for 12.00 ETH
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title by <b>Artist Name</b> listed for 2.00 ETH / 6,000 PRT was watched by <b>Collector Name</b>
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title has an offer by <b>TheGersh1</b> for 5.00 ETH
                </span>
            ),
            time: '23s ago',
        },
        {
            src: SaleImg,
            content: (
                <span>
                    Name of NFT title has an offer by <b>TheGersh1</b> for 5.00 ETH
                </span>
            ),
            time: '23s ago',
        },
    ];

    useEffect(() => {
        setShowCount(mediaMatches ? 8 : 12);
    }, [mediaMatches]);

    const handleLoadMore = () => {
        if (mediaMatches) {
            setShowCount(showCount + 8 > data.length ? data.length : showCount + 8);
        } else {
            setShowCount(showCount + 12 > data.length ? data.length : showCount + 12);
        }
    };

    return (
        <Grid container spacing={4}>
            {data.map((item, i) =>
                i < showCount ? (
                    <Grid item className={classes.activity} md={3} xs={6} key={i}>
                        <img src={item.src} />
                        <div className={classes.content}>
                            <p>{item.content}</p>
                            <small>{item.time}</small>
                        </div>
                    </Grid>
                ) : (
                    ''
                )
            )}
            <Box width={1} textAlign='center' px={2} my={5} className={classes.loadMore}>
                <PortionButton color='primary' onClick={handleLoadMore}>
                    Load More
                </PortionButton>
            </Box>
        </Grid>
    );
};

export default ActivityView;
