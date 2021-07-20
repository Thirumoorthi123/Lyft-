import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Reliable from '../../assets/images/reliable.png';
import Button from '@material-ui/core/Button';
import Lift from '../../assets/images/LyftPink.png';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    
    stmain:{
      backgroundColor:'rgba(235,235,255)',
      width:'100%',
      height:'100%',
      [theme.breakpoints.down('xs')]: {
        height:'100%',
        overflowY: 'hidden',
         overflowX: 'hidden',

    },
    [theme.breakpoints.up('sm')]: {
        height:'630px',
        //  overflowY: 'hidden',

    },  
    [theme.breakpoints.up('md')]: {
        height:'650px',
        overflowX: 'hidden',
    },
    },
    stmainone:{
        margin:'0 auto',
        width:'80%',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            '& .MuiGrid-container':{
                display: 'flex',
                flexWrap: 'wrap',   
            },
        },
        [theme.breakpoints.up('sm')]: {
            width:'100%',
            margin:'0 auto',
            '& .MuiGrid-container':{
                display: 'flex',
                flexWrap: 'nowrap',
            },
         },
         [theme.breakpoints.up('md')]: {
            margin:'0 auto',
            width:'80%', 
            '& .MuiGrid-container':{
                display: 'flex',
                flexWrap: 'unset',
            },
         },
    },
    stdriverSty:{
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
    stdrivermaskSty:{
        width: '400px',
          [theme.breakpoints.down('xs')]: {
            width: '293px',
            marginLeft: '0%',
     },
     [theme.breakpoints.up('sm')]: {
        width: '63%',
        marginTop: '58px',
     },
     [theme.breakpoints.down('md')]: {
         width: '60%',
    },
    },
    stmainoneright:{
        textAlign: 'initial',

        [theme.breakpoints.down('xs')]: {
            padding:'33px',
            textAlign:'center !important',
     },
     [theme.breakpoints.up('sm')]: {
        marginTop: 37,
        textAlign: 'initial !important',
        paddingLeft: '48px ',
     },
     [theme.breakpoints.down('md')]: {
        textAlign: 'initial',
    },
    },
    stspnoneSty:{
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
    stheadtwoSty:{
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
       stparaSty:{
            color:'rgba(12,11,49,1)',
            [theme.breakpoints.down('xs')]: {
                fontSize:'15px',
                textAlign:'center',
            },
       },
       streliSty:{
            display:'flex',
            gap:'6px',
            marginTop: '12px',
       },
       stflexSty:{
        display:'flex',
        gap:'6px',
        marginTop: '12px',
       },
       stparaoneSty:{
        margin:'4px',
       },
       stgpadSty:{
        display:'flex',
        gap:'2px',
        marginTop: '12px',
       },
       stbtnSty:{
        display: 'flex',
        flexDirection:'column',
        gap: '26px',
        marginTop: '45px',
        height: '49px',
        [theme.breakpoints.down('xs')]: {
           flexDirection:'column',
           alignItems:'center',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
            alignItems: 'initial',
            '& .MuiButton-label':{
                paddingLeft:'8px',
            },
        },
        [theme.breakpoints.up('md')]: {
            '& .MuiButton-label':{
                paddingLeft:'3px',
            },
       },
       },
    stbtnoneSty:{
        textTransform: 'none',
        backgroundColor: '#FFFFFF',
        color:'#000',
         fontSize:'12px',
        borderRadius: '22px',
        maxWidth: '59% !important',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        borderColor: 'rebeccapurple',
        '&:hover':{
            backgroundColor: 'none',
        },
        [theme.breakpoints.down('xs')]: {
           width:'100%',
           padding:'13px',
           minWidth:'fit-content',
           maxHeight:'90%',
           '& .MuiButton-label':{
            paddingLeft:'25px',
       },
         },
         [theme.breakpoints.down('sm')]: {
            width:'100%',
            padding:'13px',
            minWidth:'fit-content',
            maxHeight:'90%',
            '& .MuiButton-label':{
                paddingLeft:'37px',
           },
         },
         [theme.breakpoints.up('md')]: {
            width:'100%',
            padding:'13px',
            minWidth:'fit-content',
            minHeight:'99%',
            '& .MuiButton-label':{
                paddingLeft:'37px',
           },
        },
       },
       stbtntwoSty:{
        textTransform: 'none',
        borderRadius: '22px',
         maxWidth: '65% !important',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        fontSize:'12px',
        marginLeft: '24px',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            padding:'13px',
            maxHeight:'90%',
            minWidth: 'fit-content',
            textAlign: 'initial',

            '& .MuiButton-label':{
                paddingLeft:'42px',
            },
          },
          [theme.breakpoints.up('sm')]: {
               width:'100%',
           padding:'13px',
           minWidth: 'fit-content',
           maxHeight:'90%',
           '& .MuiButton-label':{
            paddingLeft:'13px',
        },
          },
          [theme.breakpoints.up('md')]: {
            width:'100%',
            padding:'13px',
            minWidth: 'fit-content',
            maxHeight:'90%',
            '& .MuiButton-label':{
             paddingLeft:'15px',
         },
         },
    },
     stbtnthreeSty:{
        textTransform: 'none',
        borderRadius: '22px',
         maxWidth: '65% !important',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        fontSize:'12px',
        marginLeft: '-11px',
        marginTop:'-26px',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            padding:'13px',
            minWidth:'fit-content',
            maxHeight:'90%',
            '& .MuiButton-label':{
                paddingLeft:'33px',
            },
          },
          [theme.breakpoints.up('sm')]: {
               width:'100%',
           padding:'13px',
           minWidth:'fit-content',
           maxHeight:'90%',
            '& .MuiButton-label':{
                paddingLeft:'46px',
            },
          },
          [theme.breakpoints.up('md')]: {
              '& .MuiButton-label':{
                paddingLeft:'17px',
            },
         },
    },
    stbtnfourSty:{
        textTransform: 'none',
        backgroundColor: '#8B37FF',
        color:'#FFF',
         fontSize:'14px',
        borderRadius: '22px',
        maxWidth: '23% !important',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        '&:hover':{
            backgroundColor: 'none',
        },
        [theme.breakpoints.down('xs')]: {
           width:'100%',
           padding:'19px',
           minWidth:'fit-content',
           maxHeight:'90%',
           fontSize:'14px',
         },
         [theme.breakpoints.up('sm')]: {
            width:'100%',
            padding:'13px',
             minWidth:'fit-content',
            maxHeight:'90%',
            '&.MuiButton-label':{
                paddingLeft:'5px',
            },
         },
         [theme.breakpoints.down('md')]: {
        },
       },
       
    stspnSty:{
        position: 'relative',
        left: '-40px',
        top: '15px',
         [theme.breakpoints.down('xs')]: {
               position: 'absolute',
                marginLeft: '29%',
                marginTop: '26%',
          },
          [theme.breakpoints.up('sm')]: {
            
          },
          [theme.breakpoints.down('md')]: {
         },
    },
    stspnnSty:{
        position: 'absolute',
        zIndex: 1,
        marginTop: '13px',
        marginLeft: '19px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-90px',   
            marginTop:'14px',
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft :'8px',  
        },
        [theme.breakpoints.up('md')]:{
            marginLeft: '33px !important',  
        },
    },
    stspnnoneSty:{
    position: 'absolute',
    zIndex: 1,
    marginTop: '83px',
    marginLeft: '19px',
    [theme.breakpoints.down('xs')]: {
        position: 'absolute ',
        marginTop: '74px ',
        marginLeft: '-105px ',
    },
    [theme.breakpoints.up('sm')]:{
        position: 'absolute ',
        marginTop: '84px ',
    },
    [theme.breakpoints.up('md')]:{
        position: 'absolute',
        marginTop: '85px',
        marginLeft: '39px',
    },
    },
    stspntwoSty:{
    position: 'absolute',
    zIndex: 1,
    marginTop: '127px',
    marginLeft: '19px',
     [theme.breakpoints.down('xs')]: {
        position: 'absolute',
        zIndex: 1,
        marginTop: '127px',
        marginLeft: '-104px',    
        '& .MuiButton-label':{
            paddingLeft:'30px',
        },
     },
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        zIndex: 1,
        marginTop: '127px',
        marginLeft: '22px',    
     },
     [theme.breakpoints.up('md')]: {
             zIndex: 1,
            position: 'absolute',
            marginTop: '131px',
            marginLeft: '36px',
     },
    },
    stimgtSty:{
    width: '6%',
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
        width: '30%',
        position: 'absolute',
        marginLeft: '71px',
        },
    [theme.breakpoints.up('sm')]: {
            width:'11%',
            paddingLeft:'51px',
        },   
     [theme.breakpoints.up('md')]: {
            width:'6%',
            paddingLeft:'6px',
        },     
    },
    stparaoneSty:{
        paddingTop:'26px',  
        fontSize:'12px',
         [theme.breakpoints.up('sm')]: {
            paddingTop: '45px',
            fontSize: '14px',
            position: 'absolute',
            marginLeft: '245px',
            paddingRight: '60px',
        }, 
          [theme.breakpoints.up('md')]: {
            marginTop:'-1%',
             marginLeft: '0px',
            paddingRight: '0px',

        },
    },
    stmainoneleft:{
        [theme.breakpoints.down('xs')]: {
            marginTop:'59%',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop:'0%',
        },
    },
    lyftdivsty:{
            display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    margin: '0 auto',
    width: '80%',
    marginTop: '85px',
    paddingLeft: '100px',
     [theme.breakpoints.down('xs')]: {
             paddingLeft: '0px',
            marginTop:'2%',
            alignTtems: 'center',
        },
    [theme.breakpoints.up('sm')]: {
            fontSize:'15px',
            alignItems:'center',
                marginTop: '50px',
        },
    [theme.breakpoints.up('md')]: {
               display: 'flex',
            flexDirection: 'column',
            alignItems: 'baseline',
            margin: '0 auto',
            width: '80%',
            marginTop: '85px',
            paddingLeft: '100px',
        },
    },
    anchSty:{
        [theme.breakpoints.up('md')]: {
            color:'#000',
        },
    },
  }));
  export default function SectionThree() {
    const classes = useStyles();
    return(
        <div className={classes.stmain}>
                <div className={classes.stmainone}>
                        <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                <div className={classes.stmainoneright}>
                                    <span className={classes.stspnoneSty}>RIDE WITH LYFT</span>
                                    <h1 className={classes.stheadtwoSty}>Ready,set,go.<br/> in just a few quick taps.<br/></h1>
                                    <p className={classes.stparaSty}>Whether you’re following your heart or your busy schedule, we’ll get <br /> you where you need to go,</p>
                                    <div className={classes.stbtnSty}>
                                    <svg className={classes.stspnnSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8 10v5H6V6.285c-.67 0-1.215.527-1.215 1.176V10H3.021V7.461c0-1.59 1.337-2.885 2.979-2.885h3.486c1.135 0 2.034-.575 2.498-1.114.594-.69 1.192-2.012 1.372-2.462L15 1.616c-.03.076-.758 1.89-1.662 2.94A5.014 5.014 0 0 1 11 6.059V15H9v-5H8zm2-7.5a1.501 1.501 0 1 1-3.002-.001 1.501 1.501 0 0 1 3.002 0zM1 15v-3h4v3H1z"></path></svg>
                                        <Button variant="outlined" className={classes.stbtnoneSty}> Get a reliable ride in minutes</Button>
                                    <svg className={classes.stspnnoneSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M14.918 5.366c-.1-.78-.697-1.366-1.394-1.366-.698 0-1.196.585-1.495 1.073l-1.295-.195a12.966 12.966 0 0 0-5.478 0l-1.196.195C3.761 4.585 3.263 4 2.566 4c-.797 0-1.395.585-1.494 1.366-.1.878-.498 5.366 2.59 5.951 0 0 2.69.683 4.283.683.996 0 1.992-.098 2.989-.293l1.892-.488c2.59-.975 2.192-5.073 2.092-5.853zM3.164 9.95c-1.395-.975-1.096-4.097-.996-4.488 0-.195.199-.39.398-.39.299 0 .498.293.598.586V9.95zM10.934 8H4.957V6.927h5.977V8zm1.892 1.951V5.756c.1-.293.399-.683.697-.683.2 0 .399.195.399.39 0 .39.299 3.513-1.096 4.488z"></path></svg>    
                                        <Button className={classes.stbtntwoSty}>Know that your driver is wearing a masks</Button>
                                        <svg className={classes.stspntwoSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M12 3h2v11H2V3h2V2h2v1h4V2h2v1zm-8.5 9.5h9V6h-9v6.5zM9 11h2V9H9v2z"></path></svg>
                                        <Button className={classes.stbtnthreeSty}>Schedule your ride in advance</Button>
                                    <Button variant="outlined" className={classes.stbtnfourSty}> Get a ride</Button>
                                    </div>
                                </div>  
                                </Grid>
                                <Grid item xs={12} md={6}>
                                <div className={classes.stmainoneleft}>
                                    <img  src={Reliable}  alt="Drivermask" className={classes.stdrivermaskSty}></img>
                                </div> 
                                </Grid>
                        </Grid> 
                </div>
                                    <div className={classes.lyftdivsty}>
                                        <div>
                                            <img  src={Lift}  alt="Geekaca logo" className={classes.stimgtSty}></img>
                                         </div>
                                         <div className={classes.stparaoneSty}>
                                            <p >
                                                <a href="https://www.lyft.com/memberships/lyft-pink" className={classes.anchSty}>Join Lyft Pink </a>
                                                to unlock perks like 15% off rides, free Grubhub+ membership,<br/> exclusive offers, and more. All for $19.99 a month. Available in the US only.
                                            </p>
                                         </div>   
                                    </div>    

        </div>        
    )}