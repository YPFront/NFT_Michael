import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AvatarImg from 'src/assets/img/avatar.svg';
import Blog1 from 'src/assets/img/blog1.svg';
import Blog2 from 'src/assets/img/blog2.svg';
import Blog3 from 'src/assets/img/blog3.svg';
import Blog4 from 'src/assets/img/blog4.svg';
import GalleryItem from 'src/components/GalleryItem';
import { GalleryItemType } from 'src/components/GalleryItem/GalleryType';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      marginBottom: 100,
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
            maxWidth: '20%',
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
      ];

    return (
        <Grid container spacing={4} className={classes.root}>
            {data.map((item, i) =>
                <Grid item className={classes.galleryList} md={3} xs={6} key={i}>
                    <GalleryItem data={item} key={i}></GalleryItem>
                </Grid>
            )}
        </Grid>
    );
};

export default GalleryView;
