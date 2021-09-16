import { Box, Button, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import { ActivityType } from './ActivityType';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    background: theme.palette.background.default,
    border: '1px solid ' + theme.palette.secondary.main,
    alignItems: 'center',
    height: 70,
    padding: 0,
    fontWeight: 'normal',
    lineHeight: '24px',
    fontSize: 20,
    textAlign: 'left',
    '& .MuiButton-label': {
      display: 'flex',
      width: '100%',
      alignContent: 'start',
      height: '100%',
    },
    '& b': {
      fontWeight: 'normal',
    },
    '& small': {
      fontSize: 14,
      lineHeight: '16.8px',
      color: '#828282',
      marginTop: 0,
    },
    '& .actionWrapper': {
      maxWidth: 165,
    },
    '& .playButton': {
      width: 0,
      marginLeft: 8,
      transition: 'width 0.5s ease',
    },
    '&:hover': {
      background: theme.palette.common.white,
      borderColor: theme.palette.primary.main,
      '& b': {
        color: theme.palette.primary.main,
      },
      '& .actionWrapper': {
        color: theme.palette.primary.main,
        fontWeight: '700',
        borderLeft: '1px solid ' + theme.palette.primary.main,
        '& .playButton': {
          width: 24,
        },
      },
    },
  },
  actionString: {
    marginBottom: -6,
  },
}));

type Props = {
  data: ActivityType;
};

const ActivityListItem = (props: Props) => {
  const { userId1, action, userId2, timeStamp, money } = props.data;
  const classes = useStyles();

  return (
    <Button fullWidth={true} color='inherit' className={classes.button}>
      <Box width={1} display='flex' height={1}>
        <Box flexGrow={1} py={1.2} px={3} height={1} boxSizing='border-box'>
          <div className={classes.actionString}>
            <b>{userId1}</b> {action} <b>{userId2}</b>
          </div>
          <small>{timeStamp}</small>
        </Box>
        <Box py={1.2} px={3} className='actionWrapper' height={1} boxSizing='border-box' display='flex' alignItems='center'>
          {money} ETH{' '}
          <Link href='#'>
            <PlayArrowOutlinedIcon className='playButton' fontSize='medium'></PlayArrowOutlinedIcon>
          </Link>
        </Box>
      </Box>
    </Button>
  );
};

export default ActivityListItem;
