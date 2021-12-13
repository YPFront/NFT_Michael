import { Box, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AvatarImg from 'src/assets/img/avatar.svg';
import Blog1 from 'src/assets/img/blog1.svg';
import Blog2 from 'src/assets/img/blog2.svg';
import Blog3 from 'src/assets/img/blog3.svg';
import Blog4 from 'src/assets/img/blog4.svg';
import ReserveItem from 'src/components/ReserveItem';
import CardBackground1 from 'src/assets/img/gallery/background1.svg';
import FilterChips from './FilterChips';

import { ReserveItemType } from 'src/components/ReserveItem/ReserveType';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      paddingBottom: 100,
      // marginTop: 0,
      background: `url(${CardBackground1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '40%',
      backgroundPosition: 'right top',
      [theme.breakpoints.down(500)]: {
        marginBottom: 50,
      },
    },
    galleryList: {
        '& img': {
            width: '100%',
        },
        [theme.breakpoints.down(500)]: {
            width: '100%',
            maxWidth: 'unset',
            flexBasis: 'unset'
        },
        [theme.breakpoints.up(1440)]: {
            maxWidth: '50%',
        }
    },
    reserveButton:{
      width: '60px',
      height: '60px',
      margin: '20px 0',
      background: '#FFFFFF',
      boxShadow: '2px 6px 20px rgba(0, 0, 0, 0.3)',
    }
}));

const ReserveCard = () => {
    const classes = useStyles();
    const data: ReserveItemType[] = [
        {
          src: Blog1,
          srcType: 'image',
          title: 'NFT Title Goes Here and also on this second line',
          avatar: AvatarImg,
          userName: 'Ron English',
          prt: 6000,
          eth: 2.0,
          time:"2H 18M 31S",
        },
        {
            src: 'https://s3.amazonaws.com/ipfs.cache/QmQEBY7AfgrbCdAQbg2smztSR5h9qW3yP5KF74aFZ4nAwC',
            srcType: 'video',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
            time:"3H 18M 31S"
        },
      ];

    return (
      <>
      <Box className={classes.root}>
        <FilterChips></FilterChips>
        <Grid container spacing={4} className='container'>
            {data.map((item, i) =>
                <Grid item xl={6} lg={6} md={6} xs={6} key={i}>
                    <ReserveItem data={item} key={i}></ReserveItem>
                </Grid>
            )}
        </Grid>
      </Box>
      </>
    );
};

export default ReserveCard;