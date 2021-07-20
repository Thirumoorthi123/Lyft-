import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drivermask from '../../assets/images/Drivermask.jpg';
import Button from '@material-ui/core/Button';
import Mw from '../../assets/images/Mw.png';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainone:{
        display: 'flex',
        flexDirection: 'row-reverse',
            justifyContent: 'space-around',
            margin: '0 auto',
            paddingTop: '49px',
        [theme.breakpoints.down('xs')]: {
            padding:'0px', 
            flexDirection: 'column-reverse',
            gap:'85px',
     },
     [theme.breakpoints.up('sm')]: {
         padding:'29px',
     },
     [theme.breakpoints.up('md')]: {
    },
    },
    driverSty:{
        width:'493px',
        height:'324px',
        position: 'absolute',
        marginTop: '44px',
        marginLeft: '46%',
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
          [theme.breakpoints.down('xs')]: {
            width: '293px',
            marginLeft: '0%',
     },
     [theme.breakpoints.up('sm')]: {
       
     },
     [theme.breakpoints.down('md')]: {
    },
    },
    mainoneright:{
        textAlign: 'initial',
            [theme.breakpoints.down('xs')]: {
            padding:'22px',
     },
     [theme.breakpoints.up('sm')]: {
       
     },
     [theme.breakpoints.down('md')]: {
    },
    },
    spnoneSty:{
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '20px',
        textTransform: 'uppercase', 
        fontFamily: 'LyftProUI, sans-serif',
    [theme.breakpoints.down('xs')]: {
           
    
     },
     [theme.breakpoints.up('sm')]: {
       
     },
     [theme.breakpoints.down('md')]: {
    },
       },
    headtwoSty:{
        fontFamily: 'LyftProUI, sans-serif',
        fontWeight: '600',
        fontSize: '2.1rem',
        color:'#0C0B31',
        margin:0,
        lineHeight:'44px',
        marginTop:'7px',
         [theme.breakpoints.down('xs')]: {
               textAlign: 'initial',
             fontSize: '26px',
             lineHeight: '33px',
     },
     [theme.breakpoints.up('sm')]: {
       
     },
     [theme.breakpoints.down('md')]: {
    },

       },
       paraSty:{
            color:'rgba(12,11,49,1)',
                 [theme.breakpoints.down('xs')]: {
                     textAlign:'initial',
                 }, 
                 [theme.breakpoints.up('sm')]: {
                     textAlign:'initial',
                     padding:'0px',
                 }, 
                [theme.breakpoints.up('md')]: {
                    textAlign:'initial',
                     padding:'0px',

                },

       },
       reliSty:{
            display:'flex',
            gap:'6px',
            marginTop: '12px',
       },
       flexSty:{
        display:'flex',
        gap:'6px',
        marginTop: '12px',
       },
       paraoneSty:{
        margin:'4px',
       },
       gpadSty:{
        display:'flex',
        gap:'2px',
        marginTop: '12px',
       },
       btnSty:{
        display: 'flex',
        gap: '26px',
        marginTop: '45px',
        height: '49px',
        [theme.breakpoints.down('xs')]: {
           flexDirection:'column',
           alignItems:'initial',
           gap:'7px',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
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
        maxWidth: '36% !important',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        '&:hover':{
            backgroundColor: '#8B37FF',
        },
        [theme.breakpoints.down('xs')]: {
           width:'100%',
           padding:'13px',
           minWidth:'fit-content',
           maxHeight:'90%',
         },
         [theme.breakpoints.up('sm')]: {
            width:'100%',
            padding:'13px',
            maxHeight:'90%',
            minWidth:'fit-content',

         },
         [theme.breakpoints.down('md')]: {
        },
       },
       btntwoSty:{
        textTransform: 'none',
        borderRadius: '22px',
        maxWidth: '43% !important',
        textDecoration: 'underline',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            padding:'13px',
            minWidth:'fit-content',
            maxHeight:'90%',
          },
          [theme.breakpoints.up('sm')]: {
               width:'100%',
           padding:'13px',
            minWidth:'fit-content',
           maxHeight:'90%',
          },
          [theme.breakpoints.down('md')]: {
         },
    },
    spnSty:{
        position: 'relative',
        left: '4px',
        top: '12px',
         [theme.breakpoints.down('xs')]: {
               position: 'absolute',
                marginLeft: '97%',
                marginTop: '2%',
          },
          [theme.breakpoints.up('sm')]: {
                top: '5px',
                left: '14px',
                position: 'relative',
          },
          [theme.breakpoints.up('md')]: {
              position: 'relative',
            left: '14px',
            top: '5px',
         },
    },
  }));
  export default function SectionSix() {
    const classes = useStyles();
    return(
        <div className={classes.mainone}>
                <div className={classes.mainoneleft}>
                     <img  src={Mw}  alt="Mw" className={classes.drivermaskSty}></img>
                </div> 
                <div className={classes.mainoneright}>
                     <span className={classes.spnoneSty}>SAFETY FIRST</span>
                     <h1 className={classes.headtwoSty}>How to show up like a <br/> best stranger.<br/></h1>
                     <p className={classes.paraSty}>Every ride should feel safe and comfy to everyone. A few simple ground <br /> rules can help make that happen for all drivers and riders. Read up,<br /> mask up, and crack a window to enjoy the breeze in your hair.</p>
                     <div className={classes.btnSty}>
                        <Button variant="outlined" className={classes.btnoneSty}> Learn about safety</Button>
                        <Button className={classes.btntwoSty}>Community guidelines
                            <span>
                                <svg className={classes.spnSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M10.173 9.422H1V6.613h9.173L7.411 3.298 9.569 1.5 15 8.017l-5.431 6.517-2.158-1.798z"></path></svg>
                            </span>
                        </Button>
                        {/* <svg className={classes.spnSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M10.173 9.422H1V6.613h9.173L7.411 3.298 9.569 1.5 15 8.017l-5.431 6.517-2.158-1.798z"></path></svg> */}
                    </div>
                </div>   
        </div>
    )}