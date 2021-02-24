import React from 'react';

//MUI
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '25%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    link: {
        fontSize: '1em',
        cursor: 'pointer',
    }
}));

const NavLinks = ({scrollToTargetView, currentSection}) => {

    const classes = useStyles();
    
    return (
        <>
           <div
           className={classes.container}
           >
               <Typography
               className={classes.link}
               variant="h6"
               color={currentSection === "home-section" ? "secondary" : "textPrimary"}
               onClick={() => scrollToTargetView('home-section')}
               >HOME</Typography>
               <Typography
               className={classes.link}
               variant="h6"
               color={currentSection === "about-section" ? "secondary" : "textPrimary"}
               onClick={() => scrollToTargetView('about-section')}
               >ABOUT</Typography>
               <Typography
               className={classes.link}
               variant="h6"
               color={currentSection === "resume-section" ? "secondary" : "textPrimary"}
               onClick={() => scrollToTargetView('resume-section')}
               >RESUME</Typography>
               <Typography
               className={classes.link}
               variant="h6"
               color={currentSection === "portfolio-section" ? "secondary" : "textPrimary"}
               onClick={() => scrollToTargetView('portfolio-section')}
               >PORTFOLIO</Typography>
               <Typography
               className={classes.link}
               variant="h6"
               color={currentSection === "contact-section" ? "secondary" : "textPrimary"}
               onClick={() => scrollToTargetView('contact-section')}
               >CONTACT</Typography>
            </div> 
        </>
    )
}

export default NavLinks;
