import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AvatarImg from 'src/assets/img/avatar.svg';
import Blog1 from 'src/assets/img/blog1.svg';
import Blog2 from 'src/assets/img/blog2.svg';
import Blog3 from 'src/assets/img/blog3.svg';
import Blog4 from 'src/assets/img/blog4.svg';
import GalleryItem from 'src/components/GalleryItem';
import CardBackground1 from 'src/assets/img/gallery/background1.svg';
import CardBackground2 from 'src/assets/img/gallery/background2.svg';
import CardBackground3 from 'src/assets/img/gallery/background3.svg';
import GalleryBackground from 'src/assets/img/gallery_back.svg';
import FilterButton from 'src/assets/img/filter_btn.svg';

import { GalleryItemType } from 'src/components/GalleryItem/GalleryType';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      marginBottom: 100,
      background: `url(${GalleryBackground})`,
      backgroundSize: '100vw',
      backgroundPositionX: 'center',
      [theme.breakpoints.down(500)]: {
        marginBottom: 50,
      },
      '& .MuiTypography-body1':{
        fontSize: 36,
        color:theme.palette.secondary.dark,
        paddingTop: 64,
        paddingBottom: 10,
        width:'100%',
      }
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
            maxWidth: '25%',
        }
    },
}));

const GalleryView = () => {
    const classes = useStyles();
    const data: GalleryItemType[] = [
        {
          src: Blog1,
          srcType: 'image',
          title: 'NFT Title Goes Here and also on this second line',
          avatar: AvatarImg,
          userName: 'Ron English',
          prt: 6000,
          eth: 2.0,
        },
        {
          src: Blog2,
          srcType: 'image',
          title: 'NFT Title Goes Here and also on this second line',
          avatar: AvatarImg,
          userName: 'Ron English',
          prt: 6000,
          eth: 2.0,
        },
        {
          src: Blog3,
          srcType: 'image',
          title: 'NFT Title Goes Here and also on this second line',
          avatar: AvatarImg,
          userName: 'Ron English',
          prt: 6000,
          eth: 2.0,
        },
        {
          src: Blog4,
          srcType: 'image',
          title: 'NFT Title Goes Here and also on this second line',
          avatar: AvatarImg,
          userName: 'Ron English',
          prt: 6000,
          eth: 2.0,
        },
        {
            src: Blog1,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog2,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog3,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog4,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog1,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog2,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog3,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: 'https://s3.amazonaws.com/ipfs.cache/QmY9FNn3HyXj84aeFBS42pie2AqK52Gy3yww2GmTKxdaQm',
            srcType: 'video',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog1,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: 'https://s3.amazonaws.com/ipfs.cache/QmQEBY7AfgrbCdAQbg2smztSR5h9qW3yP5KF74aFZ4nAwC',
            srcType: 'video',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog3,
            srcType: 'image',
            title: 'HARLEY QUINN',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
          {
            src: Blog1,
            srcType: 'image',
            title: 'NFT Title Goes Here and also on this second line',
            avatar: AvatarImg,
            userName: 'Ron English',
            prt: 6000,
            eth: 2.0,
          },
      ];

    return (
        <Grid container spacing={4} className={clsx(classes.root, 'container')}>
            {data.map((item, i) =>{
                return i % 4 === 0 ? 
                  <>
                  <Typography>Ferrari</Typography> 
                    <Grid item xl={3} lg={3} md={3} xs={6} key={i}>
                      <GalleryItem data={item} key={i}></GalleryItem>
                  </Grid>
                  </>
                :  
                <Grid item xl={3} lg={3} md={3} xs={6} key={i}>
                    <GalleryItem data={item} key={i}></GalleryItem>
                </Grid>
              })}
        </Grid>
    );
};

export default GalleryView;
