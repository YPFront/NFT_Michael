import { Avatar, Box, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import RateDown from 'src/assets/img/rate_down.svg';
import RateUp from 'src/assets/img/rate_up.svg';
import SaleImg from 'src/assets/img/sale_img.svg';
import ResponsiveTable from 'src/components/ResponsiveTable';

const useStyles = makeStyles((theme: Theme) => ({
    activity: {
        '& img': {
            width: '100%',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 160,
        padding: '14px 20px',
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
        '&>*': {
            width: '100%',
        },
    },
    rate: {
        color: '#27AE60',
        fontWeight: 700,
        '& img': {
            verticalAlign: 'middle',
        },
    },
    mobileTable: {
        paddingTop: 24,
        paddingBottom: 24,
        borderBottom: '1px solid ' + theme.palette.secondary.main,
        '&:first-child': {
            borderTop: '1px solid ' + theme.palette.secondary.main,
        },
        '& > img': {
            marginBottom: 30
        },
        '& p': {
            margin: 0,
            maxWidth: '50%',
            textAlign: 'right'
        },
        '& .MuiBox-root': {
            marginTop: 8,
            marginBottom: 8
        }
    }
}));

export interface StatsType {
    edition: number;
    nftContent: string;
    nftImage: string;
    initSalePrice: {
        eth: number;
        usd: number;
    };
    avgResale: string;
    lastSale: string;
    appreciation: number;
    appreciationRaise: boolean;
}

const PortionStats = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));
    const data: StatsType[] = [
        {
            nftImage: SaleImg,
            nftContent: 'Name of NFT title goes on both of these lines',
            edition: 1,
            initSalePrice: {
                eth: 5,
                usd: 9000,
            },
            avgResale: '10.00 ETH',
            lastSale: '10.00 ETH',
            appreciation: 100,
            appreciationRaise: true,
        },
        {
            nftImage: SaleImg,
            nftContent: 'Name of NFT title goes on both of these lines',
            edition: 1,
            initSalePrice: {
                eth: 5,
                usd: 9000,
            },
            avgResale: '10.00 ETH',
            lastSale: '10.00 ETH',
            appreciation: 100,
            appreciationRaise: true,
        },
        {
            nftImage: SaleImg,
            nftContent: 'Name of NFT title goes on both of these lines',
            edition: 1,
            initSalePrice: {
                eth: 5,
                usd: 9000,
            },
            avgResale: '10.00 ETH',
            lastSale: '10.00 ETH',
            appreciation: 100,
            appreciationRaise: false,
        },
        {
            nftImage: SaleImg,
            nftContent: 'Name of NFT title goes on both of these lines',
            edition: 1,
            initSalePrice: {
                eth: 5,
                usd: 9000,
            },
            avgResale: '10.00 ETH',
            lastSale: '10.00 ETH',
            appreciation: 100,
            appreciationRaise: false,
        },
        {
            nftImage: SaleImg,
            nftContent: 'Name of NFT title goes on both of these lines',
            edition: 1,
            initSalePrice: {
                eth: 5,
                usd: 9000,
            },
            avgResale: '10.00 ETH',
            lastSale: '10.00 ETH',
            appreciation: 100,
            appreciationRaise: true,
        },
    ];

    return (
        <div>
            {mediaMatches ? (
                data.map((item, i) => (
                    <Box display='flex' flexDirection='column' alignItems='center' key={i} className={classes.mobileTable}>
                        <img src={item.nftImage} />
                        <Box width={1} display='flex' flexDirection='row' justifyContent='space-between'>
                            <b>NFT</b>
                            <p>{item.nftContent}</p>
                        </Box>
                        <Box width={1} display='flex' flexDirection='row' justifyContent='space-between'>
                            <b>Edition</b>
                            <p>{item.edition}</p>
                        </Box>
                        <Box width={1} display='flex' flexDirection='row' justifyContent='space-between'>
                            <b>Initial Sale Price</b>
                            <p>{item.initSalePrice.eth} ETH / ${item.initSalePrice.usd} USD</p>
                        </Box>
                        <Box width={1} display='flex' flexDirection='row' justifyContent='space-between'>
                            <b>Avg.Resale</b>
                            <p>{item.avgResale}</p>
                        </Box>
                        <Box width={1} display='flex' flexDirection='row' justifyContent='space-between'>
                            <b>Last Sale</b>
                            <p>{item.lastSale}</p>
                        </Box>
                        <Box width={1} display='flex' flexDirection='row' justifyContent='space-between'>
                            <b>Appreciation</b>
                            <p><span className={classes.rate}>+{item.appreciation}% &nbsp; <img src={item.appreciationRaise ? RateUp : RateDown} /></span></p>
                        </Box>
                    </Box>
                ))
            ) : (
                <ResponsiveTable
                    headers={['NFT', 'Editions', 'Initial Sale Price', 'Avg. Resale', 'Last Sale', 'Appreciation']}
                    data={data.map((item) => {
                        return [
                            <Box display='flex' alignItems='center' gridGap={15}>
                                <img className='mainImage' src={item.nftImage} /> <p>{item.nftContent}</p>
                            </Box>,
                            <span>{item.edition}</span>,
                            <span>
                                {item.initSalePrice.eth} ETH <br /> ${item.initSalePrice.usd} USD
                            </span>,
                            <span>{item.avgResale}</span>,
                            <span>{item.lastSale}</span>,
                            <span className={classes.rate}>
                                +{item.appreciation}% &nbsp; <img src={item.appreciationRaise ? RateUp : RateDown} />
                            </span>,
                        ];
                    })}
                ></ResponsiveTable>
            )}
        </div>
    );
};

export default PortionStats;
