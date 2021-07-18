import React from 'react';

//MUI
import {makeStyles} from '@material-ui/core/styles';

//components
import ControlsContainer from './ControlsContainer';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles((theme) => ({
  topControlContainer: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    width: '100%',
    height: '80px',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'flex-end',
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none',
    // }
  },
  contentContainer: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
    },
  },
  bottomControlContainer: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '5%',
    [theme.breakpoints.up('md')]: {
      height: '80px',
    },
  },
}));

const ContentSlider = ({elements}) => {
  const classes = useStyles();

  const [currentElement, setCurrentElement] = React.useState(0);

  const changeCurrentUpwards = () => {
    if (currentElement + 1 < elements.length) {
      setCurrentElement(currentElement + 1);
    } else {
      setCurrentElement(0);
    }
  };

  const changeCurrentDownwards = () => {
    if (currentElement - 1 > -1) {
      setCurrentElement(currentElement - 1);
    } else {
      setCurrentElement(elements.length - 1);
    }
  };

  return (
    <>
      {/* <div
            className={classes.topControlContainer}
            >
                <ControlsContainer
                length={elements.length}
                current={currentElement}
                changeCurrentUpwards={changeCurrentUpwards}
                changeCurrentDownwards={changeCurrentDownwards}
                />
            </div> */}
      <SwipeableViews
        index={currentElement}
        onChangeIndex={(index) => setCurrentElement(index)}>
        {elements.map((element) => (
          <div className={classes.contentContainer}>{element}</div>
        ))}
      </SwipeableViews>
      <div className={classes.bottomControlContainer}>
        <ControlsContainer
          length={elements.length}
          current={currentElement}
          changeCurrentUpwards={changeCurrentUpwards}
          changeCurrentDownwards={changeCurrentDownwards}
        />
      </div>
    </>
  );
};

export default ContentSlider;
