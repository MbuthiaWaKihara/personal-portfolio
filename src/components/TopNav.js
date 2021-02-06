import React from 'react';
import MyLogo from '../images/my-logo.png';

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


const TopNav = () => {
    const classes = useStyles();
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
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
        </>
    )
}

export default TopNav;
