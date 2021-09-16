import { Avatar, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BlogType } from './BlogType';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
    marginLeft: 4
  }
}));

type Props = {
  data: BlogType;
};

const Blog = (props: Props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <Box width={1} display='flex' flexDirection='column' justifyContent='space-around' gridGap={16} className={classes.root}>
      <img src={data.src}/>
      <Box px={2.5} display='flex' flexDirection='column' justifyContent='space-around' gridGap={3}>
        <Box>
          <b>{data.title}</b>
        </Box>
        <Box display='flex'>
          <Avatar className={classes.avatar} src={data.avatar}/> <div className={classes.username}>{data.userName}</div>
        </Box>
        <Box>
          {data.prt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} PRT or {data.eth.toFixed(2)} ETH
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
