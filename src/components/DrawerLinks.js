import React from 'react';

//MUI
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles( theme => ({
    trigger: {
        marginLeft: '200%',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    link: {
        cursor: 'pointer',
    },
}));

export default function DrawerLinks({scrollToTargetView, currentSection}) {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const scrollAndCloseDrawer = (targetView) => {
    if(currentSection === targetView) {
      setOpen(false);
    }
    scrollToTargetView(targetView);
    setTimeout(() => {
      setOpen(false)
    }, 800);
  }

  return (
    <div>
        <React.Fragment>
          <Button onClick={() => setOpen(true)} className={classes.trigger}><MenuIcon /></Button>
          <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
            <div
            role="presentation"
            >
            <List>
                <ListItem 
                button
                onClick={() => scrollAndCloseDrawer('home-section')}
                >
                <Typography
                variant="h6"
                color={currentSection === 'home-section' ? 'secondary' : 'textPrimary'}
                className={classes.link}
                >Home</Typography>
                </ListItem>
      
                <ListItem 
                button
                onClick={() => scrollAndCloseDrawer('about-section')}
                >
                <Typography
                variant="h6"
                color={currentSection === 'about-section' ? 'secondary' : 'textPrimary'}
                className={classes.link}
                >About</Typography>
                </ListItem>
                
                <ListItem 
                button
                onClick={() => scrollAndCloseDrawer('resume-section')}
                >
                <Typography
                variant="h6"
                color={currentSection === 'resume-section' ? 'secondary' : 'textPrimary'}
                className={classes.link}
                >Resume</Typography>
                </ListItem>
            
                <ListItem 
                button
                onClick={() => scrollAndCloseDrawer('portfolio-section')}
                >
                <Typography
                variant="h6"
                color={currentSection === 'portfolio-section' ? 'secondary' : 'textPrimary'}
                className={classes.link}
                >Portfolio</Typography>
                </ListItem>
                <Divider />
                <ListItem 
                button
                onClick={() => scrollAndCloseDrawer('contact-section')}
                >
                <Typography
                variant="h6"
                color={currentSection === 'contact-section' ? 'secondary' : 'textPrimary'}
                className={classes.link}
                >Contact</Typography>
                </ListItem>
            </List>
            </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}