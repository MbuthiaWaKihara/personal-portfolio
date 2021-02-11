import React from 'react';
import MyLogo from '../images/my-logo.png';

//MUI
import { makeStyles } from '@material-ui/core/styles';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
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
        width: '80%',
        height: '25em',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            height: '10em',
        }
    },
    icon: {
    }
}));

const ImageSlider = () => {

    const classes = useStyles();
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const [images, setImages] = React.useState([MyLogo]);

    const determineImagesArray = async () => {
        const image1 = await import('../images/covid-live/image1.png');
        const image2 = await import('../images/covid-live/image2.png');
        const image3 = await import ('../images/covid-live/image3.png');
    
        setImages([image1.default, image2.default, image3.default]);
    }

    const changeCurrentUpwards = () => {
        if(currentImageIndex + 1 < images.length){
            setCurrentImageIndex(currentImageIndex + 1);
        }else{
            setCurrentImageIndex(0);
        }
    }

    const changeCurrentDownwards = () => {
        if(currentImageIndex - 1 > -1) {
            setCurrentImageIndex(currentImageIndex - 1);
        }else{
            setCurrentImageIndex(images.length - 1);
        }
    }

    React.useEffect(() => {
        determineImagesArray();
    }, []);

    React.useEffect(() => {
        console.log("images", images);
    }, [images]);
    return (
        <>
            <div
            className={classes.container}
            >
                <div
                className={classes.indicatorContainer}
                >
                    <div
                    className={classes.indicator}
                    onClick={changeCurrentDownwards}
                    >
                        <ChevronLeftIcon className={classes.icon} color="secondary"/>
                    </div>
                </div>
                <img
                className={classes.image}
                src={images[currentImageIndex]}
                alt="slider"
                />
                <div
                className={classes.indicatorContainer}
                >
                    <div
                    className={classes.indicator}
                    onClick={changeCurrentUpwards}
                    >
                        <ChevronRightIcon className={classes.icon} color="secondary"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageSlider;
