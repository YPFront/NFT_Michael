import Collapse from "@kunukn/react-collapse";
import { Link } from "@material-ui/core";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  height: number;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .collapse-css-transition': {
      transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
}));

const Readmore = (props: Props) => {
  const { children, height } = props;
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Collapse addState isOpen={isOpen} collapseHeight={height + 'px'}>
        {children}
      </Collapse>
      <Link href="#" onClick={(e) => {e.preventDefault(); setIsOpen(!isOpen);}}>{isOpen ? 'Read less' : 'Read more'}</Link>
    </section>
  );
};

export default Readmore;
