import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ActivityList from 'src/components/ActivityList';
import { ActivityType } from 'src/components/ActivityList/ActivityType';
import Blog1 from 'src/assets/img/blog1.svg'
import Blog2 from 'src/assets/img/blog2.svg'
import Blog3 from 'src/assets/img/blog3.svg'
import Blog4 from 'src/assets/img/blog4.svg'
import AvatarImg from 'src/assets/img/avatar.svg'
import { BlogType } from 'src/components/Blog/BlogType';
import Blog from 'src/components/Blog';

const useStyles = makeStyles((theme: Theme) => ({
  background1: {
    position: 'absolute',
    opacity: 0.1,
    minWidth: 776,
    width: '60%',
    top: 40,
    right: '-2%'
  },
  background2: {
    width: '100%',
    padding: '0 96px',
    boxSizing: 'border-box'
  }
}));

const RelatedSection = () => {
  const classes = useStyles();
  const data:BlogType[] = [
    {
      src: Blog1,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.00
    },
    {
      src: Blog2,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.00
    },
    {
      src: Blog3,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.00
    },
    {
      src: Blog4,
      title: 'NFT Title Goes Here and also on this second line',
      avatar: AvatarImg,
      userName: 'Ron English',
      prt: 6000,
      eth: 2.00
    }
  ];

  return (
    <Grid container spacing={4} justifyContent="center">
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
  );
};

export default RelatedSection;
