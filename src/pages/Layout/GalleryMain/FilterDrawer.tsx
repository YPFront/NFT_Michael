import { Box, Button, Drawer, List, ListItem, ListItemText,Link } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import FilterLogo from 'src/assets/img/filter_logo.svg';
import RightArrow from 'src/assets/img/filter_btn.svg';
import React, { useState } from 'react';
import SectionFilter from 'src/components/SectionFilter';
import CloseFilter from 'src/assets/img/collapse_filter_left.svg';

const useStyles = makeStyles((theme: Theme) => ({
  filterWrapper:{
    paddingTop: 37,
  },
  drawerPaper: {
    '&.MuiDrawer-root': {
      position: 'absolute !important'
    },
    '& .MuiDrawer-paper': {
      height: 'auto',
      marginLeft: 10,
      position: 'absolute',
      top: 37,
    },
  },
  drawerContainer: {
    background: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    width: '344px',
    '& a': {
      textDecoration: 'none',
      fontSize: 20,
    },
  },
  filterHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px 16px 13px',
    borderBottom: '1px solid black',
    alignItems: 'center'
  },
  filterButton: {
    width: '60px',
    height: '60px',
    background: '#FFFFFF',
    position:'absolute',
    boxShadow: '2px 6px 20px rgba(0, 0, 0, 0.3)',
  },
  filterSection: {
    padding: '0px 10px 20px 10px',
  },
  filterLogo: {
    '& img': {
      verticalAlign: 'bottom',
      marginRight: 13
    }
  },
  filterCloseButton: {
    marginLeft: 50,
  },
  buttonDone: {
    width: 100,
    marginTop: 20,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 50,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    }
  },
  leftArrowButton: {
    minWidth: 'unset',
    minHeight: 'unset',
    padding: 0
  }
}));

const Header = (props: { login?: boolean, color?: string, active?: string, transparent?: boolean }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleOpenCollapse = (isOpen: boolean, index: number) => {
    if (isOpen) {
      setOpenIndex(index)
    } else {
      setOpenIndex(-1)
    }
  }

  return (
    <Box>
      <Box id='filterWrapper' className={classes.filterWrapper}>
        <Button
          {...{
            className: clsx(classes.filterButton),
            onClick: handleDrawerOpen,
          }}
        >
          <img src={RightArrow} />
        </Button>
      </Box>
      <Drawer
        container={document.getElementById('filterWrapper')}
        anchor='left'
        className={classes.drawerPaper}
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box className={classes.drawerContainer} >
          <Box className={classes.filterHeader}>
            <Box className={classes.filterLogo}>
              <img src={FilterLogo} />
                  Filters
                </Box>
            <Button className={classes.leftArrowButton}
              {...{
                onClick: handleDrawerClose
              }}>
              <img src={CloseFilter} />
            </Button>
          </Box>
          <Box className={classes.filterSection}>
            <SectionFilter open={openIndex == 0} title="Make" onOpen={(open: boolean) => { handleOpenCollapse(open, 0) }}>
              <List>
                <ListItem>
                  <Link href='#'>Filter1</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter2</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter3</Link>
                </ListItem>
              </List>
            </SectionFilter>
            <SectionFilter open={openIndex == 1} title="Model" onOpen={(open: boolean) => { handleOpenCollapse(open, 1) }}>
              <List>
                <ListItem>
                  <Link href='#'>Filter1</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter2</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter3</Link>
                </ListItem>
              </List>
            </SectionFilter>
            <SectionFilter open={openIndex == 2} title="Colour" onOpen={(open: boolean) => { handleOpenCollapse(open, 2) }}>
              <List>
                <ListItem>
                  <Link href='#'>Filter1</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter2</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter3</Link>
                </ListItem>
              </List>
            </SectionFilter>
            <SectionFilter open={openIndex == 3} title="Year" onOpen={(open: boolean) => { handleOpenCollapse(open, 3) }}>
              <List>
                <ListItem>
                  <Link href='#'>Filter1</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter2</Link>
                </ListItem>
                <ListItem>
                  <Link href='#'>Filter3</Link>
                </ListItem>
              </List>
            </SectionFilter>
            <Box display='flex' justifyContent='center'>
              <Button className={classes.buttonDone}>
                Done
                  </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
