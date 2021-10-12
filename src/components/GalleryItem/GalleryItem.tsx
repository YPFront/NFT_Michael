import { Avatar, Box, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PortionButton from '../PortionButton';
import { GalleryItemType } from './GalleryType';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import { useRef, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.palette.common.white,
        boxShadow: '2px 6px 20px rgb(16 16 16 / 10%)'
    },
    avatar: {
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        padding: 2,
        width: 35,
        height: 35,
        boxSizing: 'border-box',
        display: 'inline-block',
        '& img': {
            borderRadius: '50%',
            verticalAlign: 'middle',
        },
    },
    username: {
        marginLeft: 4,
        lineHeight: '30px',
    },
    link: {
        color: theme.palette.common.black,
        '&:hover': {
            textDecoration: 'none',
        },
    },
    hidden: {
        visibility: 'hidden',
        height: 25,
    },
    videoWrapper: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        '& video': {
            position: 'absolute',
            width: '100%',
            marginTop: '-50%',
            transform: 'translateY(-50%)',
        },
        '& .aspect-wrapper': {
            display: 'block',
            width: '100%',
            marginTop: '100%',
        },
    },
    playButton: {
        position: 'absolute',
        padding: 5,
        minWidth: 'unset',
        bottom: 15,
        right: 15,
        backgroundColor: '#09394ECC',
        '& .MuiSvgIcon-root': {
            fill: theme.palette.secondary.main,
            fontSize: 45,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            '& .MuiSvgIcon-root': {
                fill: theme.palette.primary.dark,
            },
        },
    },
}));

type Props = {
    data: GalleryItemType;
    showUser?: boolean;
    className?: string;
};

const GalleryItem = (props: Props) => {
    const { data, showUser, className } = props;
    const classes = useStyles();
    const [playStatus, setPlayStatus] = useState(false);
    const vidRef = useRef(null);

    const playPauseVideo = () => {
        if (vidRef && vidRef.current) {
            const ele: HTMLVideoElement = vidRef.current;
            if (playStatus == true) {
                ele.currentTime = 0;
                ele.pause();
            } else {
                ele.play();
            }
            setPlayStatus(!playStatus);
        }
    };

    return (
        <Link className={clsx(classes.link, className)}>
            <Box width={1} display='flex' flexDirection='column' justifyContent='space-around' gridGap={16} className={classes.root}>
                {data.srcType == 'image' ? (
                    <img src={data.src} />
                ) : (
                    <div className={classes.videoWrapper}>
                        <div className='aspect-wrapper'></div>
                        <video src={data.src} autoPlay={false} loop={true} ref={vidRef}></video>
                        <PortionButton className={classes.playButton} radius='hard' color='primary' onClick={playPauseVideo}>
                          {
                            playStatus ? <StopOutlinedIcon></StopOutlinedIcon> : <PlayArrowOutlinedIcon></PlayArrowOutlinedIcon>
                          }
                        </PortionButton>
                    </div>
                )}
                <Box px={2.5} pb={2.5} display='flex' flexDirection='column' justifyContent='space-around' gridGap={3}>
                    <Box minHeight={48}>
                        <b>{data.title}</b>
                    </Box>
                    <Box display='flex' className={showUser !== false ? '' : classes.hidden}>
                        <Avatar className={classes.avatar} src={data.avatar} /> <div className={classes.username}>{data.userName}</div>
                    </Box>
                    <Box>
                        {data.prt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} PRT or {data.eth.toFixed(2)} ETH
                    </Box>
                </Box>
            </Box>
        </Link>
    );
};

export default GalleryItem;
