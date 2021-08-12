import React from 'react';
import axios from 'axios';

//MUI
import {makeStyles} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    marginTop: '10%',
    [theme.breakpoints.down('sm')]: {},
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
  },
  loadingIndicator: {
    marginLeft: '5%',
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [alertInfo, setAlertInfo] = React.useState({
    severity: 'info',
    message: 'default',
  });
  const [formInfo, setFormInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const isEmail = (email) => {
    
    let emailRegEx =
    //eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim().match(emailRegEx)) return true;
    return false;
  };

  const handleChange = (event) => {
    setFormInfo({
      ...formInfo,
      [event.target.name]: event.target.value,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sendMail = async (event) => {
    event.preventDefault();

    //validate
    if (
      formInfo.name.trim() === '' ||
      formInfo.email.trim() === '' ||
      formInfo.message.trim() === ''
    ) {
      setAlertInfo({
        severity: 'info',
        message: 'please fill all the fields',
      });
      setOpen(true);
      return;
    }

    if (!isEmail(formInfo.email)) {
      setAlertInfo({
        severity: 'info',
        message: 'please enter a valid email',
      });
      setOpen(true);
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        'https://us-central1-ohnestpos-db448.cloudfunctions.net/app/portfolio/sendportfoliomail',
        formInfo,
      );
      setAlertInfo({
        severity: 'success',
        message: `Thanks for your message! I'll mail my response`,
      });
      setLoading(false);
      setFormInfo({
        name: '',
        email: '',
        message: '',
      });
      setOpen(true);
    } catch (error) {
      setAlertInfo({
        severity: 'error',
        message: 'oops, something went wrong. Please try again',
      });
      setLoading(false);
      setOpen(true);
    }
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertInfo.severity}>
          {alertInfo.message}
        </Alert>
      </Snackbar>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          fullWidth
          label="name"
          name="name"
          className={classes.formField}
          variant="outlined"
          value={formInfo.name}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          label="email"
          name="email"
          type="email"
          className={classes.formField}
          variant="outlined"
          value={formInfo.email}
          onChange={handleChange}
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
          value={formInfo.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="outlined"
          className={classes.formSubmit}
          onClick={sendMail}
          disabled={loading}>
          SEND
          {loading && (
            <CircularProgress size="1em" className={classes.loadingIndicator} />
          )}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
