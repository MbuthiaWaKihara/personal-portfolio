import React from 'react'

//MUI
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    date: {
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
            marginTop: '10%',
        }
    },
    institution: {
        marginTop: '2%',
    },
    body: {
        marginTop: '5%',
        height: '200px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10%',
            height: '280px',
        }
    },
}));

const Institution = ({details, education}) => {

    const classes = useStyles();
    return (
        <>
            <Typography
            className={classes.date}
            variant="h5"
            color="secondary"
            >{details.date}</Typography>
            <Typography
            className={classes.institution}
            variant="h6"
            color="textPrimary"
            >{details.institution}</Typography>
            <Typography
            className={classes.body}
            style={{
                height: education && '80px',
            }}
            variant="body1"
            color="textPrimary"
            >{details.body}</Typography>
        </>
    )
}

export default Institution;
