import React from 'react';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        width: '50%',
        marginTop: '10%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    formField: {
        marginTop: '5%',
        marginBottom: '5%',
        borderRadius: '50px',
    },
    formSubmit: {
        width: '100%',
        marginTop: '5%',
        marginBottom: '5%',
        borderRadius: 50,
    }
}));

const ContactForm = () => {

    const classes = useStyles();
    return (
        <>
            <form
            className={classes.container}
            noValidate
            autoComplete="off"
            >
                <TextField
                required
                fullWidth
                label="name"
                name="name"
                className={classes.formField}
                variant="outlined"
                />
                <TextField
                required
                fullWidth
                label="email"
                name="email"
                type="email"
                className={classes.formField}
                variant="outlined"
                />
                <TextField
                required
                multiline
                rows={5}
                fullWidth
                label="message"
                name="message"
                className={classes.formField}
                variant="outlined"
                />
                <Button
                type="submit"
                variant="outlined"
                className={classes.formSubmit}
                >SEND</Button>
            </form>
        </>
    )
}

export default ContactForm;
