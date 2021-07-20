import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Driver from '../../assets/images/Driverv.jpg';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainone:{
        display: 'flex',
        minWidth: '320px',
        width: '100%',
        maxWidth: '1280px',
        marginTop: '4%',
        justifyContent: 'flex-start',
        gap:'279px',
        padding: '0px 8px 0px 32px',
        [theme.breakpoints.down('xs')]: {
            padding:'0px', 
            flexDirection: 'column-reverse',
            gap:'8px',
     },
     [theme.breakpoints.up('sm')]: {
              gap:'0px',
        padding: '0px 0px 0px 0px',
 
     },
     [theme.breakpoints.up('md')]: {
             margin: '0 auto',
    justifyContent: 'space-around',
    gap: '0px',
    paddingTop: '47px',
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
        marginLeft: '28%',
        borderTopLeftRadius: '158px',
          [theme.breakpoints.down('xs')]: {
            width: '293px',
            marginLeft: '0%',
            borderTopLeftRadius: '114px',

     },
     [theme.breakpoints.up('sm')]: {
         width: '263px',
            marginLeft: '0%',
       
     },
     [theme.breakpoints.up('md')]: {
           width: '400px',
        marginLeft: '0%',
    },
    },
    mainoneright:{
        textAlign: 'initial',
            [theme.breakpoints.down('xs')]: {
            padding:'22px',
              textAlign:'center',

     },
     [theme.breakpoints.up('sm')]: {
       textAlign:'center',
       padding:'0px 80px 0px 80px'
     },
     [theme.breakpoints.up('md')]: {
          textAlign:'initial',
       padding:'0px 0px 0px 0px'
    },
    },
    spnoneSty:{
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '20px',
        textTransform: 'uppercase', 
        fontFamily: 'LyftProUI, sans-serif',
    [theme.breakpoints.down('xs')]: {
            paddingLeft: '67px',
             paddingRight: '66px',
    
     },
     [theme.breakpoints.up('sm')]: {
       
     },
     [theme.breakpoints.down('md')]: {
    },
       },
    headtwoSty:{
        // fontFamily: 'LyftProUI, sans-serif',
        fontWeight: '600',
        fontSize: '2.1rem',
        color:'#0C0B31',
        margin:0,
        lineHeight:'44px',
        marginTop:'7px',
         [theme.breakpoints.down('xs')]: {
               textAlign: 'center',
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
                     textAlign:'center',
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
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        '&:hover':{
            backgroundColor: '#8B37FF',
        },
        [theme.breakpoints.down('xs')]: {
           width:'100%',
           padding:'13px',
           maxWidth:'47%',
           maxHeight:'90%',
         },
         [theme.breakpoints.up('sm')]: {
            width:'100%',
            padding:'13px',
            maxWidth:'24%',
            maxHeight:'90%',
         },
         [theme.breakpoints.down('md')]: {
        },
       },
       btntwoSty:{
        textTransform: 'none',
        borderRadius: '22px',
        maxWidth: '52% !important',
        textDecoration: 'none',
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
           maxHeight:'90%',
            minWidth:'fit-content',
          },
          [theme.breakpoints.up('md')]: {
            minWidth:'fit-content',
         },
    },
    spnSty:{
        position: 'relative',
        left: '-28px',
        top: '15px',
         [theme.breakpoints.down('xs')]: {
               position: 'absolute',
                marginLeft: '287px',
                marginTop: '0%',
          },
          [theme.breakpoints.up('sm')]: {
            top: '3px',
            left: '10px',
            position: 'relative',
          },
          [theme.breakpoints.down('md')]: {
         },
    },
  }));
  export default function SectionSeven() {
    const classes = useStyles();
    return(
        <div className={classes.mainone}>
                <div className={classes.mainoneleft}>
                     <img  src={Driver}  alt="Driver" className={classes.drivermaskSty}></img>
                </div> 
                <div className={classes.mainoneright}>
                     <span className={classes.spnoneSty}>VACCINE ACCESS</span>
                     <h1 className={classes.headtwoSty}>Getting the vaccine starts with<br/> getting to the vaccine<br/></h1>
                     <p className={classes.paraSty}>The pandemic has been tough on all of us, but it’s been particularly<br /> 
                        hard on communities that are underserved by public transit, healthcare,<br /> 
                        and other basic services. It’s our duty to help the best way we can: with <br />
                        rides. We’re working with partners and community members to help <br/>
                        provide access to transportation to vaccine sites for people who need it.<br/>
                        So everyone can say, “Sorry, COVID, our ride’s here.”</p>
                     <div className={classes.btnSty}>
                        <Button className={classes.btntwoSty}>Learn more about vaccine access
                        <span>
                            <svg className={classes.spnSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M10.173 9.422H1V6.613h9.173L7.411 3.298 9.569 1.5 15 8.017l-5.431 6.517-2.158-1.798z"></path></svg>
                       </span>
                        </Button>
                    </div>
                </div>   
        </div>
    )}