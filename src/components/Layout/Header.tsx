import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from 'src/assets/img/logo.svg';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Link } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import PortionButton from '../PortionButton';
import clsx from 'clsx';

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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Toolbar className={clsx(classes.toolBar, 'container')}>
        <Box width={1} display='flex' flexDirection='row' justifyContent='space-between'>
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
    </AppBar>
  );
};

export default Header;
