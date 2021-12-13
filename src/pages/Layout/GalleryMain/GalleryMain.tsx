import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import FilterMain from './FilterMain';
import GalleryList from './GalleryList';
import ReserveCard from './ReserveCard';
import FilterDrawer from './FilterDrawer';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.background.default,
    },
}));

const GalleryMain = (props: any) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root)} id='Gallery'>
            <FilterDrawer></FilterDrawer>
            <ReserveCard></ReserveCard>
            <GalleryList></GalleryList>
        </div>
    );
};

export default GalleryMain;
