import { Avatar, Box, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SaleImg from 'src/assets/img/sale_img.svg';
import PortionButton from 'src/components/PortionButton';

const useStyles = makeStyles((theme: Theme) => ({
    carousel: {
        overflow: 'hidden',
        marginLeft: -17,
        width: 'calc(100% + 34px)',
        '& .slick-track': {
            display: 'flex',
            justifyContent: 'space-around',
        },
        '& .slick-list': {
            margin: '0',
        },
        '& .slick-slider': {
            paddingLeft: 25,
            paddingRight: 25,
        },
        '& .slick-prev': {
            left: 17,
            top: '36%',
            width: 'fit-content',
            height: 'fit-content',
            zIndex: 1,
            '&:before': {
                content: 'unset',
            },
        },
        '& .slick-next': {
            right: 17,
            width: 'fit-content',
            top: '36%',
            height: 'fit-content',
            zIndex: 1,
            '&:before': {
                content: 'unset',
            },
        },
    },
    item: {
        display: 'block',
        width: '100%',
        padding: '0 16px',
        boxSizing: 'border-box',
        '& .title': {
            fontSize: 18,
            fontWeight: 700,
            margin: 0
        },
        '& .price': {
            fontSize: 16,
            margin: 0
        },
    },
    avatar: {
        width: '62.5%',
        height: 'fit-content',
        background: theme.palette.common.white,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '3px solid ' + theme.palette.secondary.main,
        padding: 5,
        margin: '-35% auto -10px auto',
        '& img': {
            borderRadius: '50%',
        },
    },
    roundButton: {
        borderRadius: '50%',
        width: 50,
        height: 50,
        fontSize: 24,
        padding: 11,
        minWidth: 'unset',
        minHeight: 'unset',
        background: theme.palette.common.white,
    },
    saleImg: {
        width: '100%',
    },
}));

export interface SaleType {
    src: string;
    title: string;
    price: string;
}

const SellerSlider = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));
    const data: SaleType[] = [
        {
            src: SaleImg,
            title: 'NFT title goes here and also on these two lines here',
            price: 'Sold for 12.00 ETH',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also on these two lines here',
            price: 'Sold for 6,000 PRT',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also on these two lines here',
            price: 'Sold for 10,000 PRT',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also here',
            price: 'Sold for 11.13 ETH',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also here',
            price: 'Sold for 9.99 ETH',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also here',
            price: 'Sold for 19,000 PRT',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also on these two lines here',
            price: 'Sold for 12.00 ETH',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also on these two lines here',
            price: 'Sold for 6,000 PRT',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also on these two lines here',
            price: 'Sold for 10,000 PRT',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also here',
            price: 'Sold for 11.13 ETH',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also here',
            price: 'Sold for 9.99 ETH',
        },
        {
            src: SaleImg,
            title: 'NFT title goes here and also here',
            price: 'Sold for 19,000 PRT',
        },
    ];

    function PrevElement(props: any) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <PortionButton className={clsx(classes.roundButton)} color='primary' outline={true} radius='hard'>
                    {' '}
                    &lt;{' '}
                </PortionButton>
            </div>
        );
    }
    function NextElement(props: any) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <PortionButton className={clsx(classes.roundButton)} color='primary' outline={true} radius='hard'>
                    {' '}
                    &gt;{' '}
                </PortionButton>
            </div>
        );
    }

    return (
        <div>
            <div className={classes.carousel}>
                <Slider
                    dots={false}
                    arrows={true}
                    slidesToShow={6}
                    slidesToScroll={6}
                    swipe={true}
                    variableWidth={false}
                    infinite={false}
                    prevArrow={<PrevElement />}
                    nextArrow={<NextElement />}
                    responsive={[
                        {
                            breakpoint: theme.breakpoints.values.md,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            },
                        },
                        {
                            breakpoint: theme.breakpoints.values.sm,
                            settings: {
                                slidesToShow: 1.5,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                >
                    {data.map((item, i) => (
                        <div className={classes.item} key={i}>
                            <img className={classes.saleImg} src={item.src} />
                            <Box display='flex' minHeight={140} py={1.5} px={1.9} flexDirection='column' justifyContent='space-between'>
                                <p className='title'>{item.title}</p>
                                <p className='price'>{item.price}</p>
                            </Box>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SellerSlider;
