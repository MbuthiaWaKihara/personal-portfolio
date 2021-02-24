const AppStyle = theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
          right: theme.spacing(20),
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
        objectFit: 'cover',
      },
      profileImage2: {
        width: '100%',
        marginTop: '15%',
        marginBottom: '5%',
        objectFit: 'cover',
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        }
      },
      scrollCenter: {
        paddingTop: '10%',
        [theme.breakpoints.up('lg')]: {
          marginLeft: '35%',
        },
        [theme.breakpoints.down('md')]: {
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
      },
      myLinksContainer: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        }
      },
      firstName: {
        color: theme.palette.primary.contrastText,
        marginBottom: '4%',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2em',
        }
      },
      title: {
        fontWeight: 'bold',
        fontSize: '2em',
        color: theme.palette.primary.contrastText,
        marginBottom: '4%',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2em',
        }
      },
      subtitle: {
        fontSize: '1em',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1em',
        }
      },
      typingAnimation: {
        fontFamily: 'monospace',
        color: '#00FFC2',
        fontSize: '2em',
        [theme.breakpoints.down('sm')]: {
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
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
        [theme.breakpoints.only('md')]: {
          height: '150px',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      aboutSummaryContainer: {
          // borderStyle: 'solid',
          // borderWidth: 1, 
          // borderColor: 'green',
          width: '100%',
          height: '200px',
          [theme.breakpoints.up('md')]: {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              height: '150px',
          }
      },
      aboutSummaryUnit: {
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: 'red',
        width: '95%',
        height: '25%',
        [theme.breakpoints.up('md')]: {
          width: '45%',
          height: '50%',
        }
      },
      aboutTitle: {
        fontSize: '1em',
      },
      aboutValue: {
        color: '#dee0df',
        marginLeft: '5%',
      },
      skillsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: '10%',
      },
});

export default AppStyle;