import Collapse from "@kunukn/react-collapse";
import { Box, Link } from "@material-ui/core";
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from "clsx";
import React from "react";
import { useState } from 'react';
import CollapseDown from 'src/assets/img/collapse_filter_down.svg';
import CollapseUp from 'src/assets/img/collapse_filter_up.svg';

type Props = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  open: boolean;
  className?: string;
  onOpen: (open: boolean) => void
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '20px 0',
    borderBottom:'1px solid #DAB679',
    '& .collapse-css-transition': {
      transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    '& a:hover':{
      color:theme.palette.common.black
    }
  },
  sectionBox:{
    display: 'flex',
    justifyContent: 'space-between',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding:'0 16px',
    fontSize: 20,
    color:theme.palette.common.black,
    '& img': {
      verticalAlign: 'middle',
      marginBottom: 2,
    }
  },
  collapseBox:{
    marginTop:14,
    height:170,
    padding:'0 16px',
    '& a': {
      fontSize: 20,
      color:theme.palette.common.black,
      '&:hover':{
        backgroundColor: theme.palette.common.white
      }
    },
  }
}));

const SectionFilter = (props: Props) => {
  const { children, title, open, className, onOpen } = props;
  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)}>
        <Link href="#" onClick={(e: any) => {e.preventDefault(); onOpen(!open);}}>
          <Box className={classes.sectionBox}>
            {title}
            <img src={open == true ? CollapseUp : CollapseDown} />
          </Box>
        </Link>
      <Collapse isOpen={open == true}>
        <Box className={classes.collapseBox}>
          {children}
        </Box>
      </Collapse>
    </section>
  );
};

export default SectionFilter;
