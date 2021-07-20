import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Home from '../../assets/images/home.jpg';
import Driver from '../../assets/images/Driver.jpg';


const useStyles = makeStyles((theme) => ({
   
    main:{
        margin: '0 auto',
        width: '88%',
        display:'flex',
        flexDirection: 'row !important',
        paddingTop: 49,
        [theme.breakpoints.down('xs')]: {
           flexDirection: 'column !important',
           paddingTop: 0,
          },
          [theme.breakpoints.down('sm')]: {
              flexDirection: 'column !important',
              paddingTop: 23,
          },
          [theme.breakpoints.up('md')]: {
          },
    },
    mainone:{
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: '320px',
        width: '100%',
        maxWidth: '1280px',
        margin: '204px auto',
        justifyContent: 'flex-start',
        gap:'225px',
        padding: '0px 8px 0px 32px',
    },
    mainleft:{
        flex:1,
        textAlign: 'initial',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            marginTop:'24px',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            // paddingRight:'16px',
            width:'100%',
        },
        [theme.breakpoints.up('md')]: { 
        },
    },
    mainright:{
        flex:1,
              [theme.breakpoints.down('xs')]: {
                  paddingTop:'26px',
                },
                [theme.breakpoints.down('sm')]: {
                },
                [theme.breakpoints.down('md')]: {
                },
    },
    homeSty:{
        width:'100%',
        height: 'auto',
          [theme.breakpoints.down('xs')]: {
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'column',
                margin: '0 auto',
                width: '80%',
                paddingTop: '26px',
            },
            [theme.breakpoints.down('md')]: {
            },
            [theme.breakpoints.up('lg')]: {
            },
   },
   spnSty:{
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '20px',
    textTransform: 'uppercase', 
    fontFamily: 'LyftProUI, sans-serif',
    [theme.breakpoints.down('xs')]: {
        fontSize: '17px',  
    },
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.down('md')]: {
   },
   },
   headoneSty:{
    fontFamily: 'LyftProUI, sans-serif',
    fontWeight: '600',
    fontSize: '4.44rem',
    color:'#0C0B31',
    margin: '14px 0px',
    lineHeight: '92px',
    [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        lineHeight: '40px',
    },
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
    },
   },
   btnSty:{
    display: 'flex',
    gap: '26px',
    marginTop: '45px',
    // height: '49px',
    [theme.breakpoints.down('xs')]: {
       flexDirection:'column',
       alignItems:'center',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
   },
   },
   btnoneSty:{
    textTransform: 'none',
    backgroundColor: '#8B37FF',
    color:'rgba(255,255,255,1)',
    borderRadius: '22px',
    width: '26%',
    borderColor:'#fff',
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700',
    '&:hover':{
        backgroundColor: '#8B37FF',
    },
    [theme.breakpoints.down('xs')]: {
       padding:'9px',
       minWidth:'fit-content',
       width:'100%',
       maxWidth:'47%',
    //    maxHeight:'90%',
    //    borderColor:'none',


     },
     [theme.breakpoints.up('sm')]: {
        width:'100%',
        padding:'13px',
        maxWidth:'22%',
        maxHeight:'90%',
     },
     [theme.breakpoints.down('md')]: {
    },
   },
   btntwoSty:{
    textTransform: 'none',
    borderRadius: '22px',
    width: '26%',
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700',
    [theme.breakpoints.down('xs')]: {
        padding:'8px',
        minWidth:'fit-content',
        maxWidth:'46%',
        maxHeight:'90%',
        width:'100%',

      },
      [theme.breakpoints.up('sm')]: {
           width:'100%',
       padding:'13px',
       maxWidth:'25%',
       maxHeight:'90%',
      },
      [theme.breakpoints.down('md')]: {
     },
},
driverSty:{
    width:'40%',
    position: 'absolute',
    marginTop: '-204px',
    marginLeft: '-29%',
    [theme.breakpoints.down('xs')]: {
       display:'none',
    },
    [theme.breakpoints.down('sm')]: {
        display:'none',
    },
    [theme.breakpoints.up('md')]: {
    },
},
drivermaskSty:{
    width: '400px',
    marginLeft: '28%',
    borderTopRightRadius: '158px',
},
mainoneright:{
    textAlign: 'initial',
},
spnoneSty:{
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '20px',
    textTransform: 'uppercase', 
    fontFamily: 'LyftProUI, sans-serif',
   },
   headtwoSty:{
    fontFamily: 'LyftProUI, sans-serif',
    fontWeight: '600',
    fontSize: '2.1rem',
    color:'#0C0B31',
    margin:0,
    lineHeight:'44px',
    marginTop:'7px',
   },
  }));
  export default function Section() {
    const classes = useStyles();
    return(
        <div className={classes.main}>
                <div className={classes.mainleft}>
                    <span className={classes.spnSty}>READY WHEN YOU ARE</span>
                    <h1 className={classes.headoneSty} > Hop in. Crack a <br/> window. Let’s get <br/> back out there.</h1>
                    <div className={classes.btnSty}>
                    <Button variant="outlined" className={classes.btnoneSty}> Apply to drive</Button>
                    <Button variant="outlined" className={classes.btntwoSty}>Sign up to drive</Button>
                    </div>
                </div> 
                <div className={classes.mainright}>
                    <div>
                         <img  src={Home}  alt="Home" className={classes.homeSty}></img>
                    </div>
                      <div>
                        <img  src={Driver}  alt="Driver" className={classes.driverSty}></img>
                    </div>
                </div>   
        </div>
    )}

