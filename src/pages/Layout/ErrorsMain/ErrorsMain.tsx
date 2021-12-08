import { Box, Button, Typography, useMediaQuery, } from '@material-ui/core';
import { makeStyles, Theme, useTheme, } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';
import clsx from 'clsx';
import _404Lottie from 'src/assets/lottie/404.json'
import LottieImage from 'src/components/LottieImage';
import PortionButton from '../../../components/PortionButton';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        backgroundImage: "linear-gradient(180deg, #042A3D, #0C445B)",
        height: 'calc(100vh)',
        display: "flex",
        justifyContent: "Center",
    },
    ErrorsMainPart: {
        ['@media (max-width: 768px)']: {
            maxWidth: '330px',       
        },
        ['@media (min-width: 768px)']: {
            maxWidth: '610px',
        },
    },
    ErrorImagePart: {
        display: "flex",
        justifyContent: "Center",
        ['@media (max-width: 768px)']: {
            marginTop: 123,
        },
        ['@media (min-width: 768px)']: {
            marginTop: 153,
        },
    },
    errorsTitle: {
        fontFamily: 'DM Serif Display',
        color: theme.palette.common.white,    
        ['@media (max-width: 768px)']: {
            maxWidth: '317px',
            fontSize: '30px',
            lineHeight: '36px',
            fontWeight: '400',
            marginTop: '34px'       
        },
        ['@media (min-width: 768px)']: {
            fontSize: '48px',
            lineHeight: '52px',
            fontWeight: 'normal',
            marginTop: '28px'
        },
    },
    errorsContent: {
        color: theme.palette.common.white,
        fontFamily: 'Lato',
        marginTop: '16px',
        
        ['@media (max-width: 768px)']: {
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '24px',      
        },
        ['@media (min-width: 768px)']: {
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '24px',
        },
    },
    backHomeButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
    },
    backHomeButtonWidth: {
        minWidth: '180px',
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

const ErrorsMain = (props: any) => {
    const classes = useStyles();
    const theme = useTheme();
    const mediaMatches = useMediaQuery(theme.breakpoints.down(768));
    
    return (
        <div className={clsx(classes.root, 'container')}>
            <div className={classes.ErrorsMainPart}>
                <div className={classes.ErrorImagePart}>
                    <LottieImage width={mediaMatches ? 165 : 202} height={mediaMatches ? 220 : 269} src={_404Lottie}/>
                </div>
                <Box textAlign='center'>
                    <Typography className = {classes.errorsTitle}>Oops, looks like this page has gone missing</Typography>
                </Box>
                <Box textAlign='center'>
                    <Typography className = {classes.errorsContent}>Don't worry. you can try again by going</Typography>
                </Box>
                <div className={classes.backHomeButton}>
                    <Box minWidth={165} display='flex' alignItems='center'>
                        <PortionButton color='secondary' className={classes.backHomeButtonWidth} animation={true}>
                            Back home
                        </PortionButton>
                    </Box>
                </div>

            </div>
        </div>
    );
};

export default ErrorsMain;
