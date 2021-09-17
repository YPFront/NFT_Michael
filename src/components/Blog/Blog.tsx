import { Avatar, Box, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { BlogType } from './BlogType';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.common.white
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
    lineHeight: '30px'
  },
  link: {
    color: theme.palette.common.black,
    '&:hover': {
      textDecoration: 'none'
    }
  },
  hidden: {
    visibility: 'hidden',
    height: 25
  }
}));

type Props = {
  data: BlogType;
  showUser?: boolean;
  className?: string;
};

const Blog = (props: Props) => {
  const { data, showUser, className } = props;
  const classes = useStyles();

  return (
    <Link href="#" className={clsx(classes.link, className)}>
      <Box width={1} display='flex' flexDirection='column' justifyContent='space-around' gridGap={16} className={classes.root}>
        <img src={data.src}/>
        <Box px={2.5} pb={2.5} display='flex' flexDirection='column' justifyContent='space-around' gridGap={3}>
          <Box>
            <b>{data.title}</b>
          </Box>
          <Box display='flex' className={showUser !== false ? '' : classes.hidden}>
            <Avatar className={classes.avatar} src={data.avatar}/> <div className={classes.username}>{data.userName}</div>
          </Box>
          <Box>
            {data.prt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} PRT or {data.eth.toFixed(2)} ETH
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Blog;
