import { Avatar, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AvatarImg from 'src/assets/img/avatar.svg';
import CollectorImg from 'src/assets/img/collector.svg';
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
            [theme.breakpoints.down(500)]: {
                padding: 0
            }
        },
        '& .slick-prev': {
            left: 17,
            top: '34%',
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
            top: '34%',
            height: 'fit-content',
            zIndex: 1,
            '&:before': {
                content: 'unset',
            },
        },
    },
    item: {
        display: 'block',
        textAlign: 'center',
        width: '100%',
        padding: '0 16px',
        boxSizing: 'border-box',
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
    collection: {
        width: '100%',
    },
}));

export interface CollectorType {
    avatar: string;
    artistBackground: string;
    artistName: string;
}

const ActivitySlider = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));
    const data: CollectorType[] = [
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
        },
        {
            avatar: AvatarImg,
            artistBackground: CollectorImg,
            artistName: 'Artist Name',
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
                                slidesToScroll: 4
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            },
                        },
                        {
                            breakpoint: theme.breakpoints.values.sm,
                            settings: {
                                slidesToShow: 1.5,
                                slidesToScroll: 1,
                                variableWidth: true,
                                arrows: false
                            },
                        },
                    ]}
                >
                    {data.map((item, i) => (
                        <div className={classes.item} key={i}>
                            <img className={classes.collection} src={item.artistBackground} />
                            <Avatar className={classes.avatar} src={item.avatar}></Avatar>
                            <p>{item.artistName}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ActivitySlider;
