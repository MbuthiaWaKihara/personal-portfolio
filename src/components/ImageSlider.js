import React from 'react';
import {BackdropContext} from '../App';
import MyLogo from '../images/my-logo.png';

//MUI
import {makeStyles} from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  indicatorContainer: {
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    cursor: 'pointer',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#dee0df',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '25em',
    objectFit: 'cover',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '10em',
    },
  },
  icon: {},
  imagesIndicatorsContainer: {
    marginTop: 5,
    height: '1em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIndicator: {
    width: 3,
    height: 3,
    borderRadius: '50%',
    margin: 5,
  },
}));

const ImageSlider = ({name}) => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [images, setImages] = React.useState([MyLogo]);
  const theme = useTheme();
  const {openBackdrop, setFocusedImage} = React.useContext(BackdropContext);

  const determineImagesArray = async () => {
    let directory = '';
    let imagesLength = 0;
    let dynamicImports = [];

    switch (name) {
      case 'Tension Chess Clock':
        imagesLength = 6;
        directory = 'tcc';
        break;
      case 'Sorting Algorithms Visualizer':
        imagesLength = 5;
        directory = 'sorting-algs-visualizer';
        break;
      case 'Covid-19 Live Feed':
        imagesLength = 3;
        directory = 'covid-live';
        break;
      case 'Ohnest Point of Sale':
        imagesLength = 6;
        directory = 'ohnest-pos';
        break;
      case 'Chess Bet/Chess MVP':
        imagesLength = 3;
        directory = 'chess-bet';
        break;
      default:
        return;
    }

    for (let counter = 1; counter <= imagesLength; counter++) {
      dynamicImports = [
        ...dynamicImports,
        import(`../images/${directory}/image${counter}.png`),
      ];
    }

    const modules = await Promise.all(dynamicImports);
    const defaultExports = modules.map((module) => module.default);

    setImages([...defaultExports]);
  };

  const changeCurrentUpwards = () => {
    if (currentImageIndex + 1 < images.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const changeCurrentDownwards = () => {
    if (currentImageIndex - 1 > -1) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  React.useEffect(() => {
    determineImagesArray();
    //eslint-disable-next-line
  }, [name]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.indicatorContainer}>
          <div className={classes.indicator} onClick={changeCurrentDownwards}>
            <ChevronLeftIcon className={classes.icon} color="secondary" />
          </div>
        </div>
        <AutoPlaySwipeableViews
          index={currentImageIndex}
          onChangeIndex={(index) => setCurrentImageIndex(index)}
          style={{
            alignItems: 'center',
          }}>
          {images.map((image) => (
            <img
              className={classes.image}
              src={image}
              alt="slider"
              onClick={() => {
                openBackdrop();
                setFocusedImage(image);
              }}
            />
          ))}
        </AutoPlaySwipeableViews>
        <div className={classes.indicatorContainer}>
          <div className={classes.indicator} onClick={changeCurrentUpwards}>
            <ChevronRightIcon className={classes.icon} color="secondary" />
          </div>
        </div>
      </div>
      <div className={classes.imagesIndicatorsContainer}>
        {images.map((_, index) => (
          <div
            className={classes.imageIndicator}
            style={{
              backgroundColor:
                currentImageIndex === index
                  ? theme.palette.secondary.main
                  : theme.palette.primary.contrastText,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
