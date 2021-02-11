import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Me from './images/me.jpg';
import MeChess from './images/me2.jpg';
import Typist from 'react-typist';
import AppStyle from './AppStyle';

//MUI
import { ThemeProvider as MUIThemeProvider, useTheme } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';

//components
import TopNav from './components/TopNav';
import ContentSlider from './components/ContentSlider';
import ContactForm from './components/ContactForm';
import MySummary from './components/MySummary';
import {
  MyLinksContainer,
  MyLink,
  ScreenContainer,
} from './custom-styled-components';

//utils
import myServices from './utils/my-services';
import experiences from './utils/experiences';
import education from './utils/education';
import skills from './utils/skills';
import latestWorks from './utils/latest-works';

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

const useStyles = makeStyles(AppStyle);

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
  const innerTheme = useTheme();
  const callMatch = useMediaQuery(innerTheme.breakpoints.down('sm'));
  const [pageElements, setPageElements] = React.useState(null);
  const date = new Date();

  const redirectNewTab = url => {
    window.open(url, '_blank');
  }

  const scrollToTargetView = viewId => {
    const element = document.querySelector(`#${viewId}`);
    element.scrollIntoView({behavior: 'smooth',});
  }

  const callOrScroll = () => {
    
    if(callMatch) {
      window.open('tel:+254700570450');
      return
    }
    scrollToTargetView("contact-section");
  }

  React.useEffect(() => {
    setPageElements({
      aboutSection: document.querySelector("#about-section"),
      resumeSection: document.querySelector("#resume-section"),
      portfolioSection: document.querySelector("#portfolio-section"),
      contactSection: document.querySelector("#contact-section"),
    });
  }, []);

  return (
    <>
    <MUIThemeProvider theme={theme}>
    <TopNav 
    scrollToTargetView={scrollToTargetView}
    pageElements={pageElements}
    />
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
       <div id="home-section" />
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
        onClick={callOrScroll}
        >CONTACT ME </Button>
       </ScreenContainer>
       <Divider/>

       {/* about1 */}
       <div id="about-section" />
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
          I love working in a productive team. I’m currently a freelancer. I’m also pursuing a Bachelor’s degree in Computer Science at Moi University.
        </Typography>
        <div
        className={classes.aboutSummaryContainer}
        >
          <div
          className={classes.aboutSummaryUnit}
          >
            <Typography
            variant="h6"
            color="secondary"
            className={classes.aboutTitle}
            >
              AGE <span className={classes.aboutValue}>{date.getFullYear() - 1998}</span>
            </Typography>
          </div>
          <div
          className={classes.aboutSummaryUnit}
          >
            <Typography
            variant="h6"
            color="secondary"
            className={classes.aboutTitle}
            >
              RESIDENCE <span className={classes.aboutValue}>Nairobi</span>
            </Typography>
          </div>
          <div
          className={classes.aboutSummaryUnit}
          >
            <Typography
            variant="h6"
            color="secondary"
            className={classes.aboutTitle}
            >
              PHONE <span className={classes.aboutValue}>+254700570450</span>
            </Typography>
          </div>
          <div
          className={classes.aboutSummaryUnit}
          >
            <Typography
            variant="h6"
            color="secondary"
            className={classes.aboutTitle}
            >
              EMAIL <span className={classes.aboutValue}>kiharambuthia@gmail.com</span>
            </Typography>
          </div>
        </div>
       </ScreenContainer>
       <Divider />
      
      {/* about2 */}
      <ScreenContainer>
      <Typography variant="h2" className={classes.title}>
          My Services
        </Typography>
        <Typography 
        variant="h5" 
        color="secondary"
        className={classes.subtitle}
        >
          WHAT I DO
        </Typography>
        <ContentSlider
        elements={myServices}
        />
      </ScreenContainer>
      <Divider />

      {/* resume */}
      <div id="resume-section" />
      <ScreenContainer>
      <Typography variant="h2" className={classes.title}>
          Experience
        </Typography>
        <Typography 
        variant="h5" 
        color="secondary"
        className={classes.subtitle}
        >
          I'VE WORKED WITH
        </Typography>
        <ContentSlider
        elements={experiences}
        />
      </ScreenContainer>
      <Divider />

      {/* resume2 */}
      <ScreenContainer>
      <Typography variant="h2" className={classes.title}>
          Education
        </Typography>
        <Typography 
        variant="h5" 
        color="secondary"
        className={classes.subtitle}
        >
          LEARNED AT
        </Typography>
        <ContentSlider
        elements={education}
        />
      </ScreenContainer>
      <Divider />
      <ScreenContainer>
      <Typography variant="h2" className={classes.title}>
          Coding Skills
        </Typography>
        <Typography 
        variant="h5" 
        color="secondary"
        className={classes.subtitle}
        >
          DEVELOPING ON
        </Typography>
        <div
        className={classes.skillsContainer}
        >
          {skills}
        </div>
      </ScreenContainer>
      <Divider />
      {/* portfolio */}
      <div id="portfolio-section" />
      <ScreenContainer>
      <Typography variant="h2" className={classes.title}>
          Portfolio
        </Typography>
        <Typography 
        variant="h5" 
        color="secondary"
        className={classes.subtitle}
        >
          LATEST WORKS
        </Typography>
        <ContentSlider
        elements={latestWorks}
        />
      </ScreenContainer>
      
      <Divider />
      {/* contact */}
      <div id="contact-section" />
      <ScreenContainer>
      <Typography variant="h2" className={classes.title}>
          Contact 
        </Typography>
        <Typography 
        variant="h5" 
        color="secondary"
        className={classes.subtitle}
        >
          TALK TO ME
        </Typography>
  
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ContactForm />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <MySummary />
          </Grid>
        </Grid>
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
      </Grid>
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
