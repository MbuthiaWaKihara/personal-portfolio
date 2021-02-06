import './App.css';
import Me from './images/me.jpg';

//MUI
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

//components
import TopNav from './components/TopNav';
import {
  MyLinksContainer,
  MyLink,
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
  scrollCenter: {
    // borderWidth: 1,
    // borderColor: 'green',
    // borderStyle: 'solid',
    [innerTheme.breakpoints.up('lg')]: {
      marginLeft: '35%',
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
  icon: {
    color: '#dee0df',
    marginTop: '25%',
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
      {
        [...new Array(20)].map((i, _i) => (
            <h1 key={_i}>Mbuthia</h1>
          ))
      }
      <Grid item lg={1} className={classes.stickyRight}>
        <MyLinksContainer>
          <MyLink>
            <LinkedInIcon fontSize="large" className={classes.icon}/>
          </MyLink>
          <MyLink>

          </MyLink>
          <MyLink>

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
