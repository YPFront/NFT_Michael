import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useState } from 'react';
import image0 from 'src/assets/img/gallery/image0.png';
import image1 from 'src/assets/img/gallery/image1.png';
import image2 from 'src/assets/img/gallery/image2.png';
import image3 from 'src/assets/img/gallery/image3.png';
import image4 from 'src/assets/img/gallery/image4.png';
import image5 from 'src/assets/img/gallery/image5.png';
import image6 from 'src/assets/img/gallery/image6.png';
import image7 from 'src/assets/img/gallery/image7.png';
import image8 from 'src/assets/img/gallery/image8.png';
import image9 from 'src/assets/img/gallery/image9.png';
import vectorBottomLeft from 'src/assets/img/gallery/vector_bottom_left.svg';
import vectorBottomRight from 'src/assets/img/gallery/vector_bottom_right.svg';
import vectorTopLeft from 'src/assets/img/gallery/vector_top_left.svg';
import vectorTopRight from 'src/assets/img/gallery/vector_top_right.svg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    animationBackgroundRoot: {
        width: '100%',
        height: 550,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #042A3D 0%, #0C445B 53.48%)',
        position: 'relative',
        '& img': {
            width: 170,
        },
        [theme.breakpoints.down('sm')]: {
            height: 475,
            '& img': {
                width: 100,
            },
        },
    },
    imageBoxWrap: {
        width: 'max-content',
        transform: 'translateX(calc(50vw - 50%))',
        [theme.breakpoints.down('sm')]: {
            gap: 18,
        },
    },
    imageBoxRow: {
        height: 'fit-content',
        animation: `$myEffect 25000ms ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        [theme.breakpoints.down('sm')]: {
            animation: `$myEffect-mobile 25000ms ${theme.transitions.easing.sharp}`,
            gap: 13
        },        
    },
    titleWrapper: {
        position: 'absolute',
        height: 278,
        maxWidth: 'calc(100vw - 52px)',
        width: 640,
        transform: 'translateX(calc(48vw - 50%)) translateY(calc(325px - 50%))',
        boxShadow: 'rgb(0 0 0 / 50%) 4px 6px 10px',
        zIndex: 1,
        borderRadius: 20,
        background: '#042A3D',
        padding: '48px 100px',
        boxSizing: 'border-box',
        backgroundImage: `url(${vectorTopLeft}), url(${vectorTopRight}), url(${vectorBottomLeft}), url(${vectorBottomRight})`,
        backgroundPosition: 'left 15px top 15px, right 15px top 15px, left 15px bottom 15px, right 15px bottom 15px',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        [theme.breakpoints.down('sm')]: {
            padding: '48px 33px',
            transform: 'translateX(calc(49vw - 50%)) translateY(calc(287px - 50%))',
        },
    },
    titleContainer: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.common.white,
        textAlign: 'center',
        justifyContent: 'center',
        '& .welcome': {
            fontSize: 20,
            lineHeight: '30px',
            margin: 0,
        },
        '& h2': {
            fontSize: 48,
        },
        [theme.breakpoints.down('sm')]: {
            '& h2': {
                fontSize: 30,
                lineHeight: '41px',
            },
            '& p': {
                fontSize: 16,
            },
            '& .welcome': {
                fontSize: 18,
            },
        },
    },
    animationEven: {
        animationDirection: 'alternate',
    },
    animationOdd: {
        animationDirection: 'alternate-reverse',
    },
    '@keyframes myEffect': {
        '0%': {
            transform: 'translateY(0)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(calc(550px - 100%))',
        },
    },
    '@keyframes myEffect-mobile': {
        '0%': {
            transform: 'translateY(0)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(calc(475px - 100%))',
        },
    },
}));

const createBackgroundImages = () => {
    const input = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9];
    const result: string[][] = [];

    for (let i = 0; i < 10; i++) {
        result[i] = [];
        for (let j = 0; j < 6; j++) {
            result[i].push(input[Math.floor(Math.random() * 10) % 10]);
        }
    }

    return result;
};

const Hero = () => {
    const classes = useStyles();
    let [backgroundImages, setBackgroundImages] = useState<string[][]>(createBackgroundImages());

    const drawAnimationBackground = () => {
        return (
            <div className={classes.animationBackgroundRoot}>
                <div className={classes.titleWrapper}>
                    <div className={classes.titleContainer}>
                        <p className='welcome'> Welcome to the Portion </p>
                        <Typography variant='h2'>Gallery</Typography>
                        <p> The 21st Century Auction House for NFT Art, Music, and Collectibles. </p>
                    </div>
                </div>
                <Box display='flex' flexDirection='row' gridGap={30} className={classes.imageBoxWrap}>
                    {backgroundImages.map((imageRow, rowIndex) => (
                        <Box display='flex' flexDirection='column' gridGap={30} key={rowIndex} className={clsx(classes.imageBoxRow, rowIndex % 2 ? classes.animationEven : classes.animationOdd)}>
                            {imageRow.map((imageSrc, imageIndex) => (
                                <img src={imageSrc} key={imageIndex} />
                            ))}
                        </Box>
                    ))}
                </Box>
            </div>
        );
    };

    return <div className={classes.root}>{drawAnimationBackground()}</div>;
};

export default Hero;
