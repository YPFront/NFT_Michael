import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AvatarImg from 'src/assets/img/avatar.svg';
import Blog1 from 'src/assets/img/blog1.svg';
import Blog2 from 'src/assets/img/blog2.svg';
import Blog3 from 'src/assets/img/blog3.svg';
import Blog4 from 'src/assets/img/blog4.svg';
import Blog from 'src/components/Blog';
import { BlogType } from 'src/components/Blog/BlogType';

const useStyles = makeStyles((theme: Theme) => ({
  blogContainer: {
    marginTop: 26,
    marginBottom: 40,
  },
  carousel: {
    width: 'calc(100% + 40px)',
    height: 365,
    overflow: 'hidden',
    marginTop: 15,
  },
  blog: {
    width: 220,
    marginRight: 10,
    position: 'relative',
    display: 'block'
  }
}));

const RelatedSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));
  const data: BlogType[] = [
    {
      src: Blog1,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.0,
    },
    {
      src: Blog2,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.0,
    },
    {
      src: Blog3,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.0,
    },
    {
      src: Blog4,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.0,
    },
  ];

  return (
    <div>
      <Typography variant='h4'>Related Items</Typography>
      {!mediaMatches ? (
        <Grid container spacing={4} justifyContent='center' className={classes.blogContainer}>
          <Grid item md={3}>
            <Blog data={data[0]}></Blog>
          </Grid>
          <Grid item md={3}>
            <Blog data={data[1]}></Blog>
          </Grid>
          <Grid item md={3}>
            <Blog data={data[2]}></Blog>
          </Grid>
          <Grid item md={3}>
            <Blog data={data[3]}></Blog>
          </Grid>
        </Grid>
      ) : (
        <div className={classes.carousel}>
          <Slider dots={false} slidesToShow={2} slidesToScroll={1} swipe={true} variableWidth={true}>
            {data.map((item, i) => (
              <Blog data={data[i]} key={i} showUser={false} className={classes.blog}></Blog>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default RelatedSection;
