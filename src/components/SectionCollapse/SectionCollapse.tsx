import Collapse from "@kunukn/react-collapse";
import { Link } from "@material-ui/core";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';
import CollapseDown from 'src/assets/img/collapse_down.svg';
import CollapseUp from 'src/assets/img/collapse_up.svg';

type Props = {
  children: React.ReactNode;
  title: React.ReactNode;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .collapse-css-transition': {
      transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    '& img': {
      marginRight: 10,
      verticalAlign: 'middle',
      marginBottom: 2
    },
    '& a': {
      color: theme.palette.common.black
    }
  }
}));

const SectionCollapse = (props: Props) => {
  const { children, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Link href="#" onClick={(e) => {e.preventDefault(); setIsOpen(!isOpen);}}>
        <img src={isOpen ? CollapseUp : CollapseDown} /> {title}
      </Link>
      <Collapse isOpen={isOpen}>
        {children}
      </Collapse>
    </section>
  );
};

export default SectionCollapse;
