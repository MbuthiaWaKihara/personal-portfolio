import React from 'react';
import ImageSlider from 'react-simple-image-slider';

//MUI
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
    },
    readmore: {
        width: '100%',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '5%',
        }
    },
    title: {
        fontWeight: 'bold',
        color: '#dee0df',
        marginTop: '5%',
        marginBottom: '4%',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5em',
        }
    },
    link: {
        marginTop: '2%',
        marginBottom: '2%',
        fontWeight: 'bold',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.7em',
        }
    },
    body: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8em',
        }
    }
}));

const LatestWork = ({latestWork}) => {

    const classes = useStyles();

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    const sm = useMediaQuery(theme.breakpoints.only('sm'));
    const md = useMediaQuery(theme.breakpoints.only('md'));

    const redirectNewTab = url => {
        window.open(url, '_blank');
      } 

    return (
        <>
            <div
            className={classes.container}
            >
                <Typography
                variant="h4"
                className={classes.title}
                >{latestWork.name}</Typography>
                <ImageSlider
                images={latestWork.images}
                width={xs ? 300 : sm ? 400 : md ? 500 : 600 }
                height={xs ? 200 : sm ? 300 : md ? 400 : 500}
                showBullets={true}
                showNavs={true}
                style={{
                    width: '100%',
                }}
                bgColor="#373B40"
                />

                {
                    latestWork.links.map(link => (
                        <Typography
                        variant="body1"
                        className={classes.link}
                        color="textSecondary"
                        onClick={() => redirectNewTab(link.url)}
                        >{link.title}</Typography>
                    ))
                }

                <Accordion
                className={classes.readmore}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Read More</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography
                    className={classes.body}
                    >
                        {
                            latestWork.readMore
                        }
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default LatestWork;
