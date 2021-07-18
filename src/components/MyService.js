import React from 'react';

//MUI
import {makeStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '2%',
  },
  body: {
    marginTop: '5%',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10%',
    },
  },
  iconsContainer: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '50px',
    marginTop: '5%',
  },
}));

const MyService = ({service, icons}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.iconsContainer}>
        {icons[0]}
        {icons[1]}
      </div>
      <Typography className={classes.title} variant="h5" color="secondary">
        {service.title}
      </Typography>
      <Typography className={classes.body} variant="body1" color="textPrimary">
        {service.description}
      </Typography>
    </>
  );
};

export default MyService;
