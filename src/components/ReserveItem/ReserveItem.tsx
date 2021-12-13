import { Avatar, Box, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PortionButton from '../PortionButton';
import { ReserveItemType } from './ReserveType';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import { useRef, useState } from 'react';
import Timer from 'src/assets/img/timer.svg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        background: theme.palette.common.white,
        boxShadow: '2px 6px 20px rgb(16 16 16 / 10%)',
    },
    avatar: {
        border: '2px solid',
        borderColor: theme.palette.primary.main,
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
        // backgroundColor: '#09394ECC',
        backgroundColor: theme.palette.primary.main,
        '& .MuiSvgIcon-root': {
            fill: theme.palette.common.white,
            fontSize: 45,
        },
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            '& .MuiSvgIcon-root': {
                fill: theme.palette.primary.dark,
            },
        },
    },
    timerContainer:{
        fontSize:16,
        padding:"7px 10px",
        position:"absolute",
        top:20,
        left:20,
        zIndex:10,
        backgroundColor:"white",
        '& img':{
            verticalAlign:'middle',
            marginRight:12
        }
    }
}));

type Props = {
    data: ReserveItemType;
    showUser?: boolean;
    className?: string;
};

const ReserveItem = (props: Props) => {
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
            <Box display='flex' flexDirection='column' justifyContent='space-around' gridGap={16} className={classes.root}>
                <Box className={classes.timerContainer}>
                    <img src={Timer}/>
                    {data.time}
                </Box>
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
                        Reserve Price {data.eth.toFixed(2)} ETH
                    </Box>
                </Box>
            </Box>
        </Link>
    );
};

export default ReserveItem;
