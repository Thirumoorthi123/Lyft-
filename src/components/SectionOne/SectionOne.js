import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drivermask from '../../assets/images/Drivermask.jpg';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainone:{
        display: 'flex',
        width:'100%',
        gap:'271px',
        marginTop:'19%',
        [theme.breakpoints.down('xs')]: {
            padding:'0!important ' , 
            flexDirection: 'column-reverse !important ',
            gap:'85px !important',
     },
     [theme.breakpoints.down('sm')]: {
       gap:0,
       marginTop: '8%',
       flexDirection: 'column',
       padding:'5px 123px',
     },
    //  [theme.breakpoints.down('md')]: {
    // },
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
        borderTopRightRadius: '124px',
          [theme.breakpoints.down('xs')]: {
            width: '293px !important',
            marginLeft: '-3% !important',
            borderTopRightRadius: '124px !important',
     },
     [theme.breakpoints.up('sm')]: {
         width:'542px !important',
         marginLeft:'-33% !important',
         borderTopRightRadius: '0px',

     },
     [theme.breakpoints.up('md')]: {
        width:'438px !important',
         marginLeft:'33% !important',
         borderTopRightRadius: '190px', 
    },
    },
    mainoneright:{
        textAlign: 'initial',
            [theme.breakpoints.down('xs')]: {
            padding:'22px',
            textAlign:'center',
            
     },
     [theme.breakpoints.up('sm')]: {
       marginTop:'12px',
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
            paddingLeft: '67px',
             paddingRight: '66px',
    
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
                 fontSize:'17px',
            },
            [theme.breakpoints.down('sm')]: {
            },
            [theme.breakpoints.down('md')]: {
            },
       },
       reliSty:{
            display:'flex',
            gap:'6px',
            marginTop: '12px',
            [theme.breakpoints.down('sm')]: {
                textAlign:'initial',
            },
       },
       flexSty:{
        display:'flex',
        gap:'6px',
        marginTop: '12px',
        [theme.breakpoints.down('sm')]: {
            textAlign:'initial',
        },
       },
       paraoneSty:{
        margin:'4px',
         [theme.breakpoints.down('xs')]: {
             fontSize:'15px',
            },
            [theme.breakpoints.down('sm')]: {
            },
            [theme.breakpoints.down('md')]: {
            },
       },
       gpadSty:{
        display:'flex',
        gap:'2px',
        marginTop: '12px',
        [theme.breakpoints.down('sm')]: {
            textAlign:'initial',
        },

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
        width: '26%',
        textDecoration: 'underline',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            padding:'13px',
            maxWidth:'73%',
            maxHeight:'90%',
          },
          [theme.breakpoints.up('sm')]: {
               width:'100%',
           padding:'13px',
           maxWidth:'35%',
           maxHeight:'90%',
          },
          [theme.breakpoints.down('md')]: {
         },
    },
    spnSty:{
        position: 'relative',
        left: '11px',
        top: '3px',
         [theme.breakpoints.down('xs')]: {
               position: 'absolute',
                marginLeft: '86%',
                marginTop: '6%',
          },
          [theme.breakpoints.up('sm')]: {
            
          },
          [theme.breakpoints.down('md')]: {
         },
    },
  }));
  export default function SectionOne() {
    const classes = useStyles();
    return(
        <div className={classes.mainone}>
                <div className={classes.mainoneleft}>
                     <img  src={Drivermask}  alt="Drivermask" className={classes.drivermaskSty}></img>
                </div> 
                <div className={classes.mainoneright}>
                     <span className={classes.spnoneSty}>DRIVE WITH LYFT</span>
                     <h1 className={classes.headtwoSty}>Set your own hours.<br/> Earn on your own terms.<br/></h1>
                     <p className={classes.paraSty}>Maybe you’re saving up for school. Or keeping flexible hours to spend <br /> more time with your family. It’s a great time to get in the driver’s seat,<br /> connect with your community, and earn a little extra cash. Plus, you can <br /> tell people you’ve got the best boss in town: you.</p>
                     <div className={classes.reliSty}>
                         <span>
                             <svg width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M3 19v-2h18v2H3zm0-4V5h18v10H3zm16-3.96V8.99c-.52-.03-1.02-.25-1.36-.6a2.09 2.09 0 0 1-.6-1.39h-2.41c.84.72 1.37 1.81 1.37 3s-.53 2.28-1.36 3h2.42c.01-.53.22-1.04.57-1.39.34-.34.84-.56 1.37-.57zM9.36 13v-.03A3.92 3.92 0 0 1 8 10c0-1.19.53-2.28 1.37-3H6.91A1.939 1.939 0 0 1 5 8.89v2.26c.99.02 1.8.86 1.81 1.85h2.55z"></path></svg>
                         </span>  
                         <div></div>
                         <div>
                             <strong>Reliable earnings</strong>
                             <p className={classes.paraoneSty}>Make money, keep your tips, and use in-app tools to help maximize <br /> your earnings.</p>
                         </div> 
                     </div>
                     <div className={classes.flexSty}>
                         <span>
                         <svg width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M19.862 10.519a7.946 7.946 0 0 0-.665-2.017l1.8-.874c.387.8.668 1.649.832 2.523l-1.967.368zm-1.216-2.975a8.01 8.01 0 0 0-2.006-2.062l1.162-1.628a10.013 10.013 0 0 1 2.503 2.574l-1.66 1.116zm-3.04-2.688A7.922 7.922 0 0 0 12 4l-.26.003-.062-1.999L12 2c1.585 0 3.103.36 4.508 1.072l-.902 1.784zM12 22C6.486 22 2 17.514 2 12c0-4.808 3.425-8.941 8.144-9.828l.369 1.966A7.999 7.999 0 0 0 4 12c0 4.411 3.589 8 8 8s8-3.589 8-8h2c0 5.514-4.486 10-10 10zm4-8h-5V8h2v4h3v2z"></path></svg>
                         </span>  
                         <div></div>
                         <div>
                             <strong>A flexible schedule</strong>
                             <p className={classes.paraoneSty}>Be your own boss and drive whenever it works for you.</p>
                         </div> 
                     </div>
                     <div className={classes.gpadSty}>
                         <span>
                         <svg width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8.11 20.99c-.283-.105.059-.579.169-.746.407-.614.492-.72 1.28-2.21.72-1.365.488-3.328-.274-4.745-1.299-2.416-1.26-2.863.755-4.829.852-.832 4.959-4.824 5.363-5.219.201-.197.388-.274.501-.229 0 0 .259.035-.073.63-.307.548-.51.778-1.254 2.131-.743 1.352-.467 3.33.306 4.742 1.315 2.408 1.27 2.847-.722 4.834a511.714 511.714 0 0 1-4.765 4.645c-.186.178-1.088 1.108-1.287.997"></path></svg>
                         </span>  
                         <div></div>
                         <div>
                             <strong>Get paid promptly</strong>
                             <p className={classes.paraoneSty}>Cash out your earnings whenever you want with Express Pay and Lyft Direct.</p>
                         </div> 
                     </div>
                     <div className={classes.btnSty}>
                        <Button variant="outlined" className={classes.btnoneSty}> Apply to drive</Button>
                        <Button className={classes.btntwoSty}>How drive pay works
                        <span>
                         <svg className={classes.spnSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M10.173 9.422H1V6.613h9.173L7.411 3.298 9.569 1.5 15 8.017l-5.431 6.517-2.158-1.798z"></path></svg>
                        </span>
                        </Button>
                    </div>
                </div>   
        </div>
    )}