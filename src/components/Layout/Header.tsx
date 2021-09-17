import { Box, Drawer, IconButton, Link, MenuItem, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import clsx from 'clsx';
import Logo from 'src/assets/img/logo.svg';
import Profile_photo from 'src/assets/img/profile_photo.svg';
import PortionButton from '../PortionButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: 'transparent',
    color: theme.palette.common.white,
    boxShadow: 'none',
    height: 100,
  },
  buttonGroup: {
    color: theme.palette.common.white,
    minWidth: 570,
    justifyContent: 'space-around',
    '& .MuiToggleButton-root': {
      color: theme.palette.common.white,
      borderColor: 'transparent',
      padding: '6px 22px',
      borderRadius: 50,
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '27px',
      height: 'min-content',
      '&:hover': {
        borderColor: theme.palette.common.white,
      },
      '&.Mui-selected': {
        borderColor: 'transparent',
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
  toolBar: {
    height: 100,
    paddingTop: 24,
    paddingBottom: 24,
    minHeight: 'unset',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  logo: {
    'margin-right': '15px',
    'vertical-align': 'middle',
  },
  icon: {
    padding: theme.spacing(1),
  },
  title: {
    margin: 'auto',
  },
  iconButton: {
    background: theme.palette.common.white,
    padding: '8px 8px',
    borderRadius: 50,
    display: 'inline-flex',
    position: 'relative',
    '& svg': {
      fill: theme.palette.common.black,
    },
    '& img': {
      borderRadius: '50%',
      border: '2px solid',
      borderColor: theme.palette.secondary.main,
      background: theme.palette.common.white,
    },
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  activeProfile: {
    '&::after': {
      content: ' ',
      width: 16,
      height: 16,
      display: 'block',
      backgroundColor: '#DA7272',
      position: 'absolute',
      top: -8,
      right: -2,
    },
  },
  drawerContainer: {
    background: theme.palette.common.white,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    '& a': {
      padding: 15,
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: 24,
      color: theme.palette.secondary.dark,
      '&:hover': {
        textDecoration: 'none',
        background: theme.palette.secondary.main,
        color: theme.palette.common.white
      }
    }
  },
  '.MuiBackdrop-root': {
    top: 100
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <AppBar className={classes.appBar} position='absolute'>
      {mediaMatches == false ? (
        <Toolbar className={clsx(classes.toolBar, 'container')}>
          <Box width={1} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Link href='#'>
              <img src={Logo} />
            </Link>
            <ToggleButtonGroup value='drops' className={classes.buttonGroup} exclusive>
              <ToggleButton value='drops' aria-label='Drops'>
                Drops
              </ToggleButton>
              <ToggleButton value='marketplace' aria-label='Marketplace'>
                Marketplace
              </ToggleButton>
              <ToggleButton value='activity' aria-label='Activity'>
                Activity
              </ToggleButton>
              <ToggleButton value='create' aria-label='Create'>
                Create
              </ToggleButton>
            </ToggleButtonGroup>
            <PortionButton color='inherit' radius='hard'>
              Connect Wallet
            </PortionButton>
          </Box>
        </Toolbar>
      ) : (
        <Toolbar className={clsx(classes.toolBar, 'container')}>
          <Link href='#'>
            <img src={Logo} />
          </Link>
          <IconButton
            {...{
              edge: 'end',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              className: clsx(classes.iconButton, classes.activeProfile),
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
            <img src={Profile_photo} />
          </IconButton>
          <Drawer
            {...{
              anchor: 'top',
              open: drawerOpen,
              onClose: handleDrawerClose
            }}
          >
            <div className={classes.drawerContainer}>
              <Link href="#">
                Drops
              </Link>
              <Link href="#">
                Marketplace
              </Link>
              <Link href="#">
                Activity
              </Link>
              <Link href="#">
                Create
              </Link>
            </div>
          </Drawer>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
