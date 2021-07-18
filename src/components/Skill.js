import React from 'react';

//MUI
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '150px',
    margin: '1%',
    marginBottom: '5%',
    cursor: 'pointer',
  },
  progress: {},
  skillName: {
    marginTop: 5,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },
  popperPaper: {
    padding: '20px',
  },
  note: {},
}));

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Typography
          variant="caption"
          component="div"
          color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const Skill = ({skill}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
        <Paper className={classes.popperPaper}>
          {skill.notes.map((note, index) => (
            <Typography variant="body1" className={classes.note} key={index}>
              {'>  '}
              {note}
            </Typography>
          ))}
        </Paper>
      </Popper>
      <div className={classes.container} onClick={handleClick}>
        <CircularProgressWithLabel
          value={skill.value}
          className={classes.progress}
          size="5em"
          color="secondary"
        />
        <Typography
          variant="h5"
          color="textPrimary"
          className={classes.skillName}>
          {skill.name}
        </Typography>
      </div>
    </>
  );
};

export default Skill;
