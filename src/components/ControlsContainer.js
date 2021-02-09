import React from 'react';

//MUI
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
    container: {
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: 'green',
        width: '50%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    positionText: {
        marginRight: '5%',
    },
    positionControl: {
        height: '90%',
        borderWidth: 1,
        borderColor: '#dee0df',
        borderStyle: 'solid',
        width: '20%',
        borderRadius: '50%',
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            width: '25%',
        }
    },
    controlIcon: {
        color: '#dee0df',
    }
}));

const ControlsContainer = ({length, current, changeCurrentUpwards, changeCurrentDownwards}) => {

    const classes = useStyles();
    return (
        <>
            <div
            className={classes.container}
            >
                <Typography
                className={classes.positionText}
                color="textPrimary"
                >
                    {current + 1} of {length}
                </Typography>
                <div
                className={classes.positionControl}
                onClick={changeCurrentDownwards}
                >
                    <ChevronLeftIcon fontSize="large" className={classes.controlIcon} />
                </div>
                <div
                className={classes.positionControl}
                onClick={changeCurrentUpwards}
                >
                    <ChevronRightIcon fontSize="large" className={classes.controlIcon} />
                </div>
            </div>
        </>
    )
}

export default ControlsContainer;
