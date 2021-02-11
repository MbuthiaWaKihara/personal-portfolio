import React from 'react';
import MyLogo from '../images/my-logo.png';

//MUI
import { makeStyles } from '@material-ui/core/styles';

import Backdrop from '@material-ui/core/Backdrop';

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
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            height: '10em',
        }
    },
    icon: {
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    selectedImage: {
        height: '80%',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            height: '50%',
        }
    }
}));

const ImageSlider = ({name}) => {

    const classes = useStyles();
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [images, setImages] = React.useState([MyLogo]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const determineImagesArray = async () => {
        let directory = '';
        let imagesLength = 0;
        let dynamicImports = [];

        switch(name) {
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

        for(let counter = 1; counter <= imagesLength; counter++) {
            dynamicImports = [
                ...dynamicImports,
                import(`../images/${directory}/image${counter}.png`),
            ];
        }

        const modules = await Promise.all(dynamicImports);
        const defaultExports = modules.map(module => module.default);

        setImages([...defaultExports]);
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
        //eslint-disable-next-line
    }, [name]);

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
                onClick={handleOpen}
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
            <Backdrop
            open={open}
            onClick={handleClose}
            className={classes.backdrop}
            >
                <img
                className={classes.selectedImage}
                src={images[currentImageIndex]}
                alt="Focused"
                />
            </Backdrop>
        </>
    )
}

export default ImageSlider;
