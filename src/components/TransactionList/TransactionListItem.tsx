import { Box, Button, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import clsx from 'clsx';
import PortionButton from '../PortionButton';
import { TransactionType } from './TransactionType';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        border: '1px solid ' + theme.palette.secondary.main,
        borderRadius: 10,
        boxSizing: 'border-box',
        width: '100%',
        minHeight: 109,
        background: '#FCF8F2',
        position: 'relative',
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '& .playButton': {
            position: 'absolute',
            top: 16,
            right: 32,
            width: 0,
        },
        '& .playIcon': {
            width: 0,
            transition: 'width 0.5s ease',
        },
        '& .actionWrapper': {
            transition: 'color 0.5s ease',
        },
        '&:hover': {
            borderColor: theme.palette.primary.main,
            background: theme.palette.common.white,
            '& .playIcon': {
                width: 24,
            },
            '& .actionWrapper': {
                color: theme.palette.primary.main,
            },
        },
        '& p': {
            margin: 0,
        },
        [theme.breakpoints.down(768)]: {
            padding: '18px 10px',
            minHeight: 'unset',
            '& .playButton': {
                top: 'unset',
                bottom: 16,
            },
        },
    },
    rootFlex: {
        [theme.breakpoints.down(350)]: {
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
        },
    },
    imageWrapper: {
        lineHeight: 0,
        '& img': {
            borderRadius: '9px 0 0 9px',
            height: 109,
            width: 109,
            [theme.breakpoints.down(768)]: {
                borderRadius: 0,
                height: 82,
                width: 82,
            },
        },
    },
    content: {
        [theme.breakpoints.down(768)]: {
            flexDirection: 'column',
            gap: 5,
            padding: 0,
            paddingLeft: 8,
        },
        [theme.breakpoints.down(350)]: {
            alignItems: 'center',
        },
    },
    contentText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        '& p': {
            margin: 0,
        },
        '& small': {
            marginTop: 5,
        },
        [theme.breakpoints.down(768)]: {
            minHeight: 82,
        },
    },
    portionButton: {
        height: 50,
        minWidth: 175,
        width: 'fit-content',
        [theme.breakpoints.down(768)]: {
            height: 40,
            marginTop: 10,
        },
    },
    textRight: {
        textAlign: 'right',
        [theme.breakpoints.down(768)]: {
            textAlign: 'left',
        },
    },
}));

type Props = {
    data: TransactionType;
    className?: string;
};

const TransactionListItem = (props: Props) => {
    const { text, date, type, src } = props.data;
    const { className } = props;
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)}>
            <Box width={1} display='flex' height={1} className={classes.rootFlex}>
                <Box className={classes.imageWrapper}>
                    <img src={src} alt='no image' />
                </Box>
                <Box flexGrow={1} display='flex' gridGap={27} justifyContent='spaceAround' boxSizing='border-box' p={2} className={classes.content}>
                    <Box flexGrow={1} boxSizing='border-box' className={classes.contentText}>
                        <p>{text}</p>
                        <small>{date}</small>
                    </Box>
                    <Box width={175} className='actionWrapper'>
                        {(() => {
                            switch (type) {
                                case 'CLAIM':
                                    return (
                                        <PortionButton className={classes.portionButton} color='primary' width={175} height={50}>
                                            Claim your win
                                        </PortionButton>
                                    );
                                case 'ACCEPTED&PENDING':
                                    return (
                                        <div className={classes.textRight}>
                                            <p>Accepted</p>
                                            <i>Pending settlement</i>
                                        </div>
                                    );
                                case 'ACCEPTED':
                                    return (
                                        <div className={classes.textRight}>
                                            <p>Accepted</p>
                                        </div>
                                    );
                                case 'SOLD':
                                    return (
                                        <div className={classes.textRight}>
                                            <p>Sold</p>
                                        </div>
                                    );
                                case 'REJECTED':
                                    return (
                                        <div className={classes.textRight}>
                                            <p>Rejected</p>
                                        </div>
                                    );
                                default:
                                    return '';
                            }
                        })()}
                    </Box>
                </Box>
            </Box>
            {type == 'NORMAL' ? (
                <Link href='#' className='playButton'>
                    <PlayArrowOutlinedIcon fontSize='medium' className='playIcon'></PlayArrowOutlinedIcon>
                </Link>
            ) : (
                ''
            )}
        </div>
    );
};

export default TransactionListItem;
