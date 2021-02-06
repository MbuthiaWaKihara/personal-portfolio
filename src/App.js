import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Me from './images/me.jpg';
import MeChess from './images/me2.jpg';
import Typist from 'react-typist';

//MUI
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';


import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';

//components
import TopNav from './components/TopNav';
import {
  MyLinksContainer,
  MyLink,
  ScreenContainer,
} from './custom-styled-components';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#585D65',
      light: '#dee0df',
      dark: '#ffffff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00FFC2',
      light: '#2FFCCB',
      dark: '#00FFC2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#373B40',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: '#00FFC2',
      disabled: 'rgba(133,133,133,0.38)',
    },
    divider: 'rgba(239,239,239,0.12)',
  },
  typography: {
    useNextVariants: true,
  },
});

const useStyles = makeStyles((innerTheme) => ({
  root: {
    position: 'fixed',
    bottom: innerTheme.spacing(2),
    right: innerTheme.spacing(2),
    [innerTheme.breakpoints.up('lg')]: {
      right: innerTheme.spacing(20),
    }
  },
  rootContainer: {
    // borderTopColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 5,
    // marginTop: '7.5%',
  },
  stickyLeft: {
    height: window.innerHeight,
    width: '40%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  profileImage: {
    width: '100%',
    height: '90%',
    marginTop: '15%',
  },
  profileImage2: {
    width: '100%',
    marginTop: '15%',
    marginBottom: '5%',
    [innerTheme.breakpoints.up('lg')]: {
      display: 'none',
    }
  },
  scrollCenter: {
    paddingTop: '10%',
    [innerTheme.breakpoints.up('lg')]: {
      marginLeft: '35%',
    },
    [innerTheme.breakpoints.down('md')]: {
      paddingTop: 0,
    }
  },
  stickyRight: {
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: '#dee0df',
    position: 'fixed',
    top: 0,
    right: 0,
    height: window.innerHeight,
    width: '6.5%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  socialMediaIcon: {
    color: '#dee0df',
    marginTop: '25%',
  },
  myLinksContainer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  firstName: {
    color: innerTheme.palette.primary.contrastText,
    marginBottom: '4%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    }
  },
  title: {
    fontWeight: 'bold',
    color: innerTheme.palette.primary.contrastText,
    marginBottom: '4%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    }
  },
  subtitle: {
    fontWeight: 'bold',
  },
  typingAnimation: {
    fontFamily: 'monospace',
    color: '#00FFC2',
    fontSize: '2em',
    [innerTheme.breakpoints.down('sm')]: {
      fontSize: '1em',
      marginTop: '15%',
    }
  },
  bodyText: {
    color: '#dee0df',
    marginTop: '5%',
    marginBottom: '5%',
  },
  contactButton: {
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 0,
    borderWidth: 5,
  },
  bottomLinksContainer: {
    width: '100%',
    height: '90px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    [innerTheme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  bottomLink: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dee0df',
    textAlign: 'center',
    padding: 1,
    margin: 5,
    borderRadius: 50,
    width: '20%',
    height: '80%',
    cursor: 'pointer',
  }
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App() {
  const classes = useStyles();

  const redirectNewTab = url => {
    window.open(url, '_blank');
  }

  return (
    <>
    <MUIThemeProvider theme={theme}>
    <TopNav />
    <Grid container className={classes.rootContainer}>
      <Grid item lg={4} className={classes.stickyLeft}>
        <img
        src={Me}
        alt="me"
        className={classes.profileImage}
        />
      </Grid>
      <Grid item lg={7} md={12} sm={12} xs={12} className={classes.scrollCenter}>
        <img
        src={MeChess}
        alt="me"
        className={classes.profileImage2}
        />

        {/* home */}
       <ScreenContainer>
       <Typography variant="h2" className={classes.firstName}>
          I'm Evans
        </Typography>
        <Typography variant="h2" className={classes.title}>
          Mbuthia
        </Typography>
        <Typist
        className={classes.typingAnimation}
        startDelay={1000}
        >
          I'm a computer programmer
          <Typist.Delay ms={500} />
          <Typist.Backspace count={19} delay={200}/>
          UI/UX designer
          <Typist.Delay ms={500} />
          <Typist.Backspace count={14} delay={200}/>
          web developer
          <Typist.Delay ms={500} />
          <Typist.Backspace count={13} delay={200}/>
          mobile app dveelo
          <Typist.Backspace count={5}/>
          evelop
          <Typist.Backspace count={18} delay={200}/>
          react native developer
          <Typist.Delay ms={500} />
          <Typist.Backspace count={22} delay={200}/>
          chess player
          <Typist.Delay ms={500} />
          <Typist.Backspace count={12} delay={200}/>
          speed cuber
          <Typist.Delay ms={500} />
          <Typist.Backspace count={13} delay={200}/>
          Evanson Mbuthia Kihara
        </Typist>
        <Typography
        variant="body1"
        className={classes.bodyText}
        >
          Hi! I am a professional software developer based in Nairobi, Kenya. I am experienced in creating scalable software solutions that meet my clients' needs. I love working with teams and picking up on new tech and trends!
        </Typography>
        <Button
        variant="outlined"
        className={classes.contactButton}
        >CONTACT ME </Button>
       </ScreenContainer>
       <Divider/>

       {/* about1 */}
       <ScreenContainer>
       <Typography variant="h2" className={classes.title}>
          About Me
        </Typography>
        <Typography 
        variant="h5" 
        color="secondary"
        className={classes.subtitle}
        >
          MY STORY
        </Typography>
        <Typography
        variant="body1"
        className={classes.bodyText}
        >
          I am just another guy who fell for coding. I started writing html code in my freshman year of campus and loved it instantly. Since then, I have been discovering more of the beauty of building software every day. 
        </Typography>
        <Typography
        variant="body1"
        className={classes.bodyText}
        >
          Besides coding, I enjoy playing chess and solving the best-selling puzzle in the world, Erno Rubik’s cube. I have a decent sense of humor, I believe. 
        </Typography>
        <Typography
        variant="body1"
        className={classes.bodyText}
        >
          I love working in a productive team. I’m currently working part time with Iconic King, a software company based in Nairobi that majors in betting systems and internet games. I’m also pursuing a Bachelor’s degree in Computer Science at Moi University.
        </Typography>
       </ScreenContainer>


       <div
       className={classes.bottomLinksContainer}
       >
         <div
         className={classes.bottomLink}
         onClick={() => redirectNewTab('https://www.linkedin.com/in/evanson-mbuthia-kihara-85b473195/')}
         >
         <LinkedInIcon fontSize="large" className={classes.socialMediaIcon} />
         </div>
         <div
         className={classes.bottomLink}
         onClick={() => redirectNewTab('https://www.instagram.com/mbuthiakihara/')}
         >
           <InstagramIcon fontSize="large" className={classes.socialMediaIcon} />
         </div>
         <div
         className={classes.bottomLink}
         onClick={() => redirectNewTab('https://github.com/MbuthiaWaKihara/')}
         >
           <GithubIcon fontSize="large" className={classes.socialMediaIcon} />
         </div>
       </div>
      
      <Grid item lg={1} className={classes.stickyRight}>
        <MyLinksContainer>
          <MyLink onClick={() => redirectNewTab('https://www.linkedin.com/in/evanson-mbuthia-kihara-85b473195/')}>
            <LinkedInIcon fontSize="large" className={classes.socialMediaIcon} />
          </MyLink>
          <MyLink onClick={() => redirectNewTab('https://www.instagram.com/mbuthiakihara/')}>
            <InstagramIcon fontSize="large" className={classes.socialMediaIcon} />
          </MyLink>
          <MyLink onClick={() => redirectNewTab('https://github.com/MbuthiaWaKihara/')}>
            <GithubIcon fontSize="large" className={classes.socialMediaIcon} />
          </MyLink>
        </MyLinksContainer>
      </Grid>
      </Grid>
    </Grid>
    <ScrollTop >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
        </Fab>
    </ScrollTop>
    </MUIThemeProvider>
    </>
  );
}

export default App;
