import { Avatar, Box, Link, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AvatarImg from 'src/assets/img/avatar.svg';
import character1 from 'src/assets/img/character1.svg';
import character2 from 'src/assets/img/character2.svg';
import CreatorBack from 'src/assets/img/creatorBack.svg';
import { ReactComponent as Eye } from 'src/assets/img/eye.svg';
import CheckBadge from 'src/assets/img/checkBadge_red.svg';
import PortionButton from 'src/components/PortionButton';

const useStyles = makeStyles((theme: Theme) => ({
  creatorBack: {
    width: '100%',
  },
  avatar: {
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
    width: 120,
    height: 120,
    padding: 5,
    background: theme.palette.common.white,
    margin: '-85px auto 0 auto',
    '& img': {
      borderRadius: '50%',
    },
  },
  smallButton: {
    fontSize: 20,
    lineHeight: '24px',
    padding: '9px 19px',
    marginRight: 18,
    '&.active': {
      background: '#EB57571A',
    },
    '& svg': {
      marginRight: 12.5
    },
    '&:hover': {
      '& svg path': {
        fill: theme.palette.common.white
      }
    }
  },
  bigButton: {
    height: 50,
  },
  eye: {
    '& path': {
      fill: theme.palette.primary.main,
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
  },
  carousel: {
    width: 'calc(100% + 40px)',
    height: 230,
    overflow: 'hidden',
    '& a': {
      outline: 'none'
    },
    '& img': {
      width: 200,
      marginRight: 10,
    },
  },
  mobileHidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  tabletHidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  paper: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: -64,
      width: 'calc(100% + 128px)',
      boxShadow: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: -25,
      width: 'calc(100% + 50px)',
      boxShadow: 'none'
    }
  }
}));

const CreatorSection = () => {
  const classes = useStyles();
  const moreCharacters = [
    {
      src: character1,
      link: '#',
    },
    {
      src: character2,
      link: '#',
    },
    {
      src: character1,
      link: '#',
    },
    {
      src: character2,
      link: '#',
    },
    {
      src: character1,
      link: '#',
    },
    {
      src: character2,
      link: '#',
    },
  ];
  let sliderRef: any;
  const theme = useTheme();
  const mediaMatches = useMediaQuery(theme.breakpoints.down(500));
  
  return (
    <div>
      <Typography variant='h4'>Creator</Typography>
      <Paper square className={classes.paper}>
        <Box>
          <Box mt={3}>
            <img src={CreatorBack} className={classes.creatorBack} />
          </Box>
        </Box>
        <Box px={5} py={4}>
          <Box>
            <p>
              <b>Ron English</b> <Link href='#'>@ronenglish</Link> <img src={CheckBadge} />
            </p>
            <p>Italian ComicBook artist working for Image, DC, Marvel, Netflix, Boom!studios.</p>
            <Box display='flex' flexWrap='wrap' alignItems='center'>
              <PortionButton color='primary' size='small' radius='hard' outline={true} className={clsx(classes.smallButton)}>
                <Eye className={classes.eye} /> Following
              </PortionButton>
              <p> 1,255 following </p>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default CreatorSection;
