import React from 'react';
import MyLogo from '../images/my-logo.png';
import NavLinks from './NavLinks';
import DrawerLinks from './DrawerLinks';

//MUI
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  image: {
    height: '120px',
    marginLeft: '5%',
    [theme.breakpoints.down('sm')]: {
      height: '70px',
    }
  }
}));


function ElevationScroll({children, window}) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };


const TopNav = ({scrollToTargetView, pageElements}) => {
    const classes = useStyles();
    const [currentY, setCurrentY] = React.useState(0);
    const [currentSection, setCurrentSection] = React.useState("home-section");

    React.useEffect(() => {
      window.addEventListener('scroll', () => {
        setCurrentY(window.scrollY);
      });
    }, []);

    React.useEffect(() => {
      if(pageElements){
  
        if(currentY >= 0 && currentY < pageElements.aboutSection.getBoundingClientRect().bottom && currentSection !== "home-section") {
          setCurrentSection("home-section")
        }
        if(currentY >= pageElements.aboutSection.getBoundingClientRect().bottom && currentY < pageElements.resumeSection.getBoundingClientRect().bottom && currentSection !== "about-section") {
          setCurrentSection("about-section")
        }
        if(currentY > pageElements.resumeSection.getBoundingClientRect().bottom && currentY < pageElements.portfolioSection.getBoundingClientRect().bottom && currentSection !== "resume-section") {
          setCurrentSection("resume-section")
        }
        if(currentY > pageElements.portfolioSection.getBoundingClientRect().bottom && currentY < pageElements.contactSection.getBoundingClientRect().bottom && currentSection !== "portfolio-section") {
          setCurrentSection("portfolio-section")
        }
        if(currentY > pageElements.contactSection.getBoundingClientRect().bottom && currentSection !== "contact-section") {
          setCurrentSection("contact-section")
        }
      }
      //eslint-disable-next-line
    }, [currentY]);

    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <img
                        src={MyLogo}
                        alt="My Logo"
                        className={classes.image}
                        />
                        <NavLinks 
                        scrollToTargetView={scrollToTargetView}
                        currentSection={currentSection}
                        />
                        <DrawerLinks 
                        scrollToTargetView={scrollToTargetView}
                        currentSection={currentSection}
                        />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
        </>
    )
}

export default TopNav;
