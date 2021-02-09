import React from 'react';

//MUI
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#dee0df',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },

}));

const MySummary = () => {

    const classes = useStyles();
    return (
        <>
            <div
            className={classes.container}
            >

            </div>
        </>
    )
}

export default MySummary;
