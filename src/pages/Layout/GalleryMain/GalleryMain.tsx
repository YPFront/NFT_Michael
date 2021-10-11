import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import FilterMain from './FilterMain';
import GalleryList from './GalleryList';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        background: theme.palette.background.default,
    },
}));

const GalleryMain = (props: any) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, 'container')} id='Gallery'>
            <FilterMain></FilterMain>
            <GalleryList></GalleryList>
        </div>
    );
};

export default GalleryMain;
