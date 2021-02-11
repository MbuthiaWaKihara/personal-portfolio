import React from 'react';
import MyLogo from '../images/my-logo.png';

//MUI
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#dee0df',
        borderRadius: 10,
        width: '100%',
        marginTop: '10%',
        [theme.breakpoints.down('sm')]: {
            
        }
    },
    title: {
        fontWeight: 'bold',
        margin: '2%',
        color: theme.palette.primary.contrastText,
        marginBottom: '4%',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5em',
        }
      },
      subtitle: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1em',
        }
      },
      aboutTitle: {
          marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1em',
        }
      },
      aboutValue: {
        color: '#dee0df',
        marginLeft: '5%',
      },
      logo: {
          
      }
}));

const MySummary = () => {

    const classes = useStyles();
    const date = new Date();
    return (
        <>
            <div
            className={classes.container}
            >
                <Typography
                variant="h4"
                className={classes.title}
                >Evans Mbuthia</Typography>
                <Typography 
                variant="h6" 
                color="secondary"
                className={classes.subtitle}
                >
                SOFTWARE DEVELOPER
                </Typography>
                <Typography
                variant="h6"
                color="secondary"
                className={classes.aboutTitle}
                style={{
                    marginTop: '10%',
                }}
                >
                AGE <span className={classes.aboutValue}>{date.getFullYear() - 1998}</span>
                </Typography>
                <Typography
                variant="h6"
                color="secondary"
                className={classes.aboutTitle}
                
                >
                RESIDENCE <span className={classes.aboutValue}>Nairobi</span>
                </Typography>
                <Typography
                variant="h6"
                color="secondary"
                className={classes.aboutTitle}
                
                >
                PHONE <span className={classes.aboutValue}>+254700570450</span>
                </Typography>
                <Typography
                variant="h6"
                color="secondary"
                className={classes.aboutTitle}
                
                >
                EMAIL <span className={classes.aboutValue}>kiharambuthia@gmail.com</span>
                </Typography>
                <img
                src={MyLogo}
                alt="My Logo"
                className={classes.logo}
                />
            </div>
        </>
    )
}

export default MySummary;
