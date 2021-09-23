import { Table, TableBody, TableCell, TableHead, TableRow, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiTableCell-root': {
            fontSize: 20,
            fontWeight: 'normal',
            lineHeight: '24px',
            borderColor: theme.palette.secondary.main,
        },
        '& .mainImage': {
            width: 150,
            height: 150,
        },
    },
}));

type Props = {
    data: JSX.Element[][];
    headers: string[];
};

const ResponsiveTable = (props: any) => {
    const { data, headers, ...other } = props;
    const classes = useStyles();
    const theme = useTheme();
    const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Table className={classes.root}>
            <TableHead>
                <TableRow>
                    {headers.map((item: string, index: number) => (
                        <TableCell key={index} align={index == headers.length - 1 ? 'right' : 'left'}>
                            {item}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row: JSX.Element[], i: number) => (
                    <TableRow key={i}>
                        {row.map((col: JSX.Element, j: number) => (
                            <TableCell key={j} align={j == row.length - 1 ? 'right' : 'left'}>
                                {col}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ResponsiveTable;
