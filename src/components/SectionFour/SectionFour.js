import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Rental from '../../assets/images/rental.png';
import Watson from '../../assets/images/watson.png';
import Mode from '../../assets/images/Mode.png';
import Lyft from '../../assets/images/lyft.png';
import PP from '../../assets/images/pp.png';
import Pref from '../../assets/images/preferred.png';
import Xtra from '../../assets/images/xtra.png';
import Lux from '../../assets/images/lux.png';
import Transit from '../../assets/images/transit.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination} from 'swiper/core';



SwiperCore.use([Pagination]);
const useStyles = makeStyles((theme) => ({

    main:{
      backgroundColor:'rgba(235,235,255)',
      width:'100%',
      height:'600px',
       [theme.breakpoints.down('xs')]: {
           height:'100%',
       },
       [theme.breakpoints.up('sm')]: {
           height:'100%',
       },
    },
    mainone:{
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: '320px',
        width: '100%',
        justifyContent: 'space-around',
        paddingTop: '42px',
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('xs')]: {
            padding:'0px', 
            flexDirection: 'column-reverse',
            gap:'0px',
     },
     [theme.breakpoints.up('sm')]: {
       flexDirection: 'column-reverse',
        padding: '43px',
     },
     [theme.breakpoints.up('md')]: {
        flexDirection: 'row-reverse',
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
        flexDirection:'column',
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
         maxWidth: '65% !important',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        fontSize:'12px',
        marginLeft: '24px',
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
     btnthreeSty:{
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
    btnfourSty:{
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
       
    spnSty:{
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
    btnsldSty:{
        backgroundColor:'#8B37FF',
        borderRadius:'22px',
        '&:hover':{
         backgroundColor:'#8B37FF',
        },
        [theme.breakpoints.down('sm')]: {
            borderRadius:'50%',
            height:'62px',
        },
    },

    /* card part */
    mnsty:{
        marginTop:'0rem',
        paddingLeft:'124px',
            '&.MuiCardContent-root':{
                padding:'15px',
            },
                [theme.breakpoints.down('sm')]: {
                    width:'100%',
                     marginTop:'0rem',
                     paddingLeft:'0px',
                },

    },
    htwoSty:{
        fontSize:'3.375rem',
        [theme.breakpoints.down('sm')]: {
          fontSize:'2.5rem',
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      gridContainer:{
        width:'100%',
        margin:0,
        padding:'30px',
        display:'flex',
        flexWrap:'nowrap',
        // scrollSnapType: 'x mandatory',

        // '&::-webkit-scrollbar': {
        //   width: '1px',
        //   height:'7px',
        //   padding:'0px 20px',
        // },
        // '&::-webkit-scrollbar-track': {
        //   background: '#fff',
        //   borderRadius: '2px',
        // },
        // '&::-webkit-scrollbar-thumb': {
        //   background: '#999',
        //   borderRadius: '5px',
        // },
        // [theme.breakpoints.down('sm')]: {
        //   padding: '0px 68px 0px 74px',
        // },
         [theme.breakpoints.up('md')]: {
              width: '100%',
                margin: 0,
                display: 'flex',
                flexWrap: 'nowrap',
                padding: '0px 354px 0px 146px',
        },
      },
      gdItem:{
          width:'300px',
         [theme.breakpoints.down('sm')]: {
          width:'212px',
          paddingLeft:'18px',
          paddingTop:'20px',
        },
      },
      crdhSty:{
        flex: 0,
        textAlign:'initial',
      },
      pSty:{
        fontSize:'1.12rem',
        color:'#12100c',
        textAlign: 'initial',
        fontFamily: 'sans-serif',
        lineHeight:'25px',
        [theme.breakpoints.down('sm')]: {
         fontSize:'12px'
       },
      },
      poneSty:{
        color: 'rgb(0, 0, 0)',
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '26px',
    textAlign: 'center',
    marginTop: '26px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px'
        },
      },
      avaimg:{
        width:'55%',
      },
    honeSty:{
            fontFamily: 'LyftProUI, sans-serif',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '28px',
         [theme.breakpoints.down('xs')]: {
              marginBlockStart: 0,
             marginBlockEnd: 0,
        },
    },
    rentSty:{
            display: 'flex',
    alignItems: 'center',
    gap: '5px',
    flex: 1,
    marginLeft: '51px',
    color:'#0C0B3131',
    },
      renttSty:{
            display: 'flex',
    alignItems: 'center',
    gap: '5px',
    flex: 1,
    marginLeft: '51px',
    color:'#0C0B3131',
        position: 'absolute',
    marginTop: '-61px',
    },
    paraSty:{
        marginLeft:'0%',
             [theme.breakpoints.down('xs')]: {
                 textAlign:'center',
             },
    },
    paraaSty:{
    fontSize: '12px',
    marginLeft: '-35%',
     [theme.breakpoints.down('xs')]: {
           marginLeft: '5%',
            paddingBottom: '29px', 
             marginBlockStart: '0em',
                 marginBlockEnd: '0em',   
     }, 
      [theme.breakpoints.up('sm')]: {
                  fontSize: '12px',
                  marginBlockStart: '0em',
                 marginBlockEnd: '0em',
          },  
          [theme.breakpoints.up('md')]: {
                  fontSize: '16px',
                  marginBlockStart: '0em',
                 marginBlockEnd: '0em',
          },      
    },
    crdSty:{
        [theme.breakpoints.down('sm')]: {
            '&.MuiCardContent-root':{
                padding:'15px',
            },
        },  
    },
  }));
  export default function SectionThree() {
    const classes = useStyles();
    return(
        <div className={classes.main}> 
                <div className={classes.mainone}>
                        <div className={classes.mainoneleft}>
                             <Button>
                             <span>
                            <svg width="32" height="32" viewBox="0 0 32 32" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M11.873 13.852h14.302v4H11.873l4.41 5.291-3.073 2.561L5 15.852 13.21 6l3.073 2.561z"></path></svg>
                            </span>
                             </Button>
                              <Button className={classes.btnsldSty} variant="contained" color="primary" href="#contained-buttons">
                              <span>
                              <svg width="32" height="32" viewBox="0 0 32 32" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M19.301 17.852H4.999v-4h14.302l-4.41-5.291L17.964 6l8.21 9.852-8.21 9.852-3.073-2.561z"></path></svg>
                             </span>
                              </Button>
                        </div> 
                        <div className={classes.mainoneright}>
                            <h1 className={classes.headtwoSty}>Ride. Bike. Scoot. Go bananas.</h1>
                            <p className={classes.paraSty}>We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.</p>
                        </div>  
                </div>
                <div className={classes.mnsty}>
                 <Swiper slidesPerView={0} spaceBetween={50} className={classes.mySwiper}>
                    <SwiperSlide>
                             <Grid className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Rentals</h5>
                                        <img src={Rental} alt="Mary" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{fill: '#000'}}><path d="m11.169 8.27.37-.401c.74-.802.71-2.067-.092-2.838L8.794 2.533a2.031 2.031 0 0 0-2.837.092l-3.424 3.67c-.74.803-.71 2.067.092 2.838l2.653 2.468c.802.77 2.066.71 2.838-.093l.339-.339.493.463 1.296.123.216 1.295.586.556h3.423l.031-2.252-3.331-3.084zm-5.428-.68c-.494-.462-.494-1.234-.062-1.727a1.22 1.22 0 0 1 1.727-.062 1.22 1.22 0 0 1 .062 1.728c-.463.524-1.234.524-1.727.061zm7.556 4.843H11.54l-.154-.864-.154-.895-.895-.092-.894-.093-.216-.185 1.141-1.203 2.93 2.745v.587z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Seamless</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{fill: '#000'}}><path fill-rule="evenodd" d="M2.782 6.444a5.429 5.429 0 0 0 0 3.112h2.027a16.005 16.005 0 0 1 0-3.112H2.782zm.752-1.555h1.513a9.58 9.58 0 0 1 .55-1.774A5.482 5.482 0 0 0 3.534 4.89zm9.684 1.555h-2.027a16.005 16.005 0 0 1 0 3.112h2.027a5.429 5.429 0 0 0 0-3.112zm-.752-1.555a5.482 5.482 0 0 0-2.063-1.774 9.58 9.58 0 0 1 .55 1.774h1.513zM6.372 6.444A14.226 14.226 0 0 0 6.289 8c0 .555.03 1.075.083 1.556h3.257a14.766 14.766 0 0 0-.001-3.112H6.372zm.275-1.555h2.707C8.977 3.399 8.386 2.556 8 2.556c-.385 0-.976.843-1.353 2.333zM3.534 11.11a5.482 5.482 0 0 0 2.063 1.774 9.58 9.58 0 0 1-.55-1.774H3.534zm8.932 0h-1.513a9.58 9.58 0 0 1-.55 1.774 5.482 5.482 0 0 0 2.063-1.774zm-5.82 0c.378 1.49.969 2.333 1.354 2.333.386 0 .977-.843 1.354-2.333H6.647zM8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Independence</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                             <Grid className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Bikes & Scooters</h5>
                                        <img src={Watson} alt="Watson" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M3 9h4v6l6-8.001H9V1z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Efficient</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M12.906 11.828C11.118 13.688 8.929 14 7.65 14c-.116 0-.231 0-.332-.008.178-.216.355-.433.524-.65.07-.088.131-.168.193-.256.254-.32.501-.657.732-.986.162-.224.324-.449.478-.673.894-1.307 1.703-2.67 2.343-4.096-1.002 1.178-2.12 2.212-3.283 3.158-.231.192-.47.377-.71.553-.307.249-.623.481-.94.697-.046.04-.1.08-.146.113-.239.168-.477.336-.716.497a.182.182 0 0 1-.07.048 9.084 9.084 0 0 1-.023-.642c0-1.7.688-3.402 1.756-4.68.137-.163.279-.33.425-.482 2.651-2.757 6.188-2.116 6.342-2.092l.586.12.108.61c.03.152.647 3.831-2.011 6.597zM6.779 5.222c-.208.217-.416.457-.632.714-.208.256-.408.529-.609.826-.038.064-.077.12-.115.184-.301-.136-.632-.393-.91-.713a6.98 6.98 0 0 1-1.04-1.58c.008.658.085 1.339.277 2.02.17.562.416 1.17.925 1.7a8.599 8.599 0 0 0-.67 2.693c-.887-.537-1.904-1.41-2.52-2.862-1.241-2.941.285-5.563.346-5.675L2.147 2l.586.112c.116.024 2.713.57 4.046 3.11z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Eco-friendly</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>
      
                    </SwiperSlide>
                     <SwiperSlide>
                            <Grid className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Wait & Save</h5>
                                        <img src={Mode} alt="Mode" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM6.063 5.565c0-.96 1.405-1.063 2.01-1.063.893 0 1.88.43 2.2.959l.14.232 2.102-.972-.137-.28c-.724-1.48-2.002-1.933-2.997-2.117V1H7v1.315c-2.21.009-3.453 1.538-3.453 3.25 0 2.825 2.641 3.12 4.388 3.315 1.544.183 2.292.564 2.292 1.168 0 1.19-1.693 1.282-2.213 1.282-1.169 0-2.294-.577-2.616-1.343l-.118-.28-2.28.965.12.28c.63 1.476 2.16 2.573 3.88 2.643V15h2.38v-1.475c1.762-.224 3.451-1.356 3.451-3.477 0-2.93-2.806-3.275-4.664-3.504-1.425-.17-2.104-.36-2.104-.98z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}>  Budget-friendly</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path d="M9.917 2.992c0 1.1-.896 1.992-2 1.992-1.105 0-2-.892-2-1.992S6.812 1 7.917 1c1.104 0 2 .892 2 1.992zm-.624 11.136c-.037.48-.48.872-.985.872h-.782c-.505 0-.948-.392-.986-.872l-.32-3.486L6.082 8.9l-.017-.218c-.038-.48-.36-.593-.717-.253l-.597.569c-.357.34-.924.356-1.26.035-.337-.32-.32-.86.037-1.2l1.65-1.567c.357-.34 1.062-.617 1.566-.617h2.343c.504 0 1.21.278 1.567.617l1.649 1.567c.357.34.374.88.038 1.2-.337.32-.904.305-1.26-.035l-.598-.57c-.356-.34-.679-.225-.716.254l-.018.218c-.01.142-.024.31-.038.488l-.098 1.255-.32 3.486z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Private</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Grid className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Lyft</h5>
                                        <img src={Lyft} alt="Mary" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                           <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M3 9h4v6l6-8.001H9V1z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Efficient</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                         <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path d="M9.917 2.992c0 1.1-.896 1.992-2 1.992-1.105 0-2-.892-2-1.992S6.812 1 7.917 1c1.104 0 2 .892 2 1.992zm-.624 11.136c-.037.48-.48.872-.985.872h-.782c-.505 0-.948-.392-.986-.872l-.32-3.486L6.082 8.9l-.017-.218c-.038-.48-.36-.593-.717-.253l-.597.569c-.357.34-.924.356-1.26.035-.337-.32-.32-.86.037-1.2l1.65-1.567c.357-.34 1.062-.617 1.566-.617h2.343c.504 0 1.21.278 1.567.617l1.649 1.567c.357.34.374.88.038 1.2-.337.32-.904.305-1.26-.035l-.598-.57c-.356-.34-.679-.225-.716.254l-.018.218c-.01.142-.024.31-.038.488l-.098 1.255-.32 3.486z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Private</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Grid className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Priority Pickup</h5>
                                        <img src={PP} alt="PP" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                           <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M3 9h4v6l6-8.001H9V1z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Efficient</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                         <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path d="M9.917 2.992c0 1.1-.896 1.992-2 1.992-1.105 0-2-.892-2-1.992S6.812 1 7.917 1c1.104 0 2 .892 2 1.992zm-.624 11.136c-.037.48-.48.872-.985.872h-.782c-.505 0-.948-.392-.986-.872l-.32-3.486L6.082 8.9l-.017-.218c-.038-.48-.36-.593-.717-.253l-.597.569c-.357.34-.924.356-1.26.035-.337-.32-.32-.86.037-1.2l1.65-1.567c.357-.34 1.062-.617 1.566-.617h2.343c.504 0 1.21.278 1.567.617l1.649 1.567c.357.34.374.88.038 1.2-.337.32-.904.305-1.26-.035l-.598-.57c-.356-.34-.679-.225-.716.254l-.018.218c-.01.142-.024.31-.038.488l-.098 1.255-.32 3.486z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Private</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>

                    </SwiperSlide>
                    <SwiperSlide>
                            <Grid  className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Preferred Mode</h5>
                                        <img src={Pref} alt="Pref" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="m14.69 7.211-.504-.35.232-.194c.233-.195.35-.506.233-.778-.078-.272-.35-.467-.66-.467h-.969l-.814-2.255A1.852 1.852 0 0 0 10.5 2H5.46c-.776 0-1.474.467-1.745 1.206L2.939 5.46H1.931c-.272 0-.543.195-.66.467-.116.272 0 .583.233.778l.272.155-.505.35c-.155.156-.271.35-.271.545.039 3.072.465 4.705.465 4.705v1.517c0 .233.194.466.466.466h1.396a.449.449 0 0 0 .465-.466v-1.05h8.416v1.05c0 .233.194.466.465.466h1.396a.449.449 0 0 0 .466-.466V12.46s.426-1.633.465-4.705a1.11 1.11 0 0 0-.31-.545zM4.84 3.594a.665.665 0 0 1 .62-.427h5.003c.271 0 .543.194.62.427l1.008 2.8h-8.26l1.008-2.8zM4.063 9.74H2.86A.737.737 0 0 1 2.125 9c0-.389.349-.739.736-.739h1.241c.388 0 .737.311.737.739-.038.428-.349.739-.775.739zm9.075 0h-1.203A.714.714 0 0 1 11.2 9c0-.389.31-.739.737-.739h1.203c.426 0 .736.311.736.739s-.31.739-.736.739z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}>  Roomier cars</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}}aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8 2 6.012 5.549 2 6.359l2.782 2.973-.49 4.081L8 11.67l3.709 1.743-.491-4.081L14 6.359l-4.012-.81z"></path></svg>
                                        <h6 style={{fontSize:'14px'}}>  Top drivers</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>

                    </SwiperSlide>
                    <SwiperSlide>
                            <Grid className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Lyft XL</h5>
                                        <img src={Xtra} alt="xtra" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path d="M5.818 7.56a2.003 2.003 0 0 0-1.145-.33C3.2 7.23 2 8.44 2 9.925V13.5h3.11v-2.42c0-1.045.545-1.98 1.417-2.475-.327-.275-.545-.66-.709-1.045zM4.673 6.35a1.917 1.917 0 0 0 1.909-1.925A1.917 1.917 0 0 0 4.672 2.5a1.916 1.916 0 0 0-1.908 1.925c0 1.063.854 1.925 1.909 1.925zM8 8.44a1.48 1.48 0 0 0 1.473-1.485c0-.82-.66-1.485-1.473-1.485a1.48 1.48 0 0 0-1.473 1.485c0 .82.66 1.485 1.473 1.485zm2.018 2.695A2.022 2.022 0 0 0 8 9.1c-1.09 0-2.018.935-2.018 2.035V13.5h4.09l-.054-2.365zm.109-3.575c.382-.165.764-.275 1.2-.275C12.8 7.285 14 8.495 14 9.98v3.52h-3.11v-2.42c0-1.045-.545-1.98-1.417-2.475.327-.275.545-.66.654-1.045zm1.2-1.21c1.055 0 1.91-.862 1.91-1.925a1.917 1.917 0 0 0-1.91-1.925 1.917 1.917 0 0 0-1.909 1.925c0 1.063.855 1.925 1.91 1.925z"></path></svg>
                                         <h6 style={{fontSize:'14px'}}>  Extra seats</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                         <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path d="M9.917 2.992c0 1.1-.896 1.992-2 1.992-1.105 0-2-.892-2-1.992S6.812 1 7.917 1c1.104 0 2 .892 2 1.992zm-.624 11.136c-.037.48-.48.872-.985.872h-.782c-.505 0-.948-.392-.986-.872l-.32-3.486L6.082 8.9l-.017-.218c-.038-.48-.36-.593-.717-.253l-.597.569c-.357.34-.924.356-1.26.035-.337-.32-.32-.86.037-1.2l1.65-1.567c.357-.34 1.062-.617 1.566-.617h2.343c.504 0 1.21.278 1.567.617l1.649 1.567c.357.34.374.88.038 1.2-.337.32-.904.305-1.26-.035l-.598-.57c-.356-.34-.679-.225-.716.254l-.018.218c-.01.142-.024.31-.038.488l-.098 1.255-.32 3.486z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Private</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Grid  className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent className={classes.crdSty}>
                                       <h5 className={classes.honeSty}>Lyft Lux</h5>
                                        <img src={Lux} alt="lux" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M3 9h4v6l6-8.001H9V1z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Efficient</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}}aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8 2 6.012 5.549 2 6.359l2.782 2.973-.49 4.081L8 11.67l3.709 1.743-.491-4.081L14 6.359l-4.012-.81z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Premium</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Grid  className={classes.gdItem}>
                                <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset',cursor: 'pointer'}} className={classes.crdSty}>
                                    <CardContent>
                                       <h5 className={classes.honeSty}>transition</h5>
                                        <img src={Transit} alt="Transit" className={classes.avaimg}/>
                                        <div className={classes.rentSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM6.063 5.565c0-.96 1.405-1.063 2.01-1.063.893 0 1.88.43 2.2.959l.14.232 2.102-.972-.137-.28c-.724-1.48-2.002-1.933-2.997-2.117V1H7v1.315c-2.21.009-3.453 1.538-3.453 3.25 0 2.825 2.641 3.12 4.388 3.315 1.544.183 2.292.564 2.292 1.168 0 1.19-1.693 1.282-2.213 1.282-1.169 0-2.294-.577-2.616-1.343l-.118-.28-2.28.965.12.28c.63 1.476 2.16 2.573 3.88 2.643V15h2.38v-1.475c1.762-.224 3.451-1.356 3.451-3.477 0-2.93-2.806-3.275-4.664-3.504-1.425-.17-2.104-.36-2.104-.98z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Budger-friendly</h6>
                                        </div>
                                        <div className={classes.renttSty}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#000'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M12.906 11.828C11.118 13.688 8.929 14 7.65 14c-.116 0-.231 0-.332-.008.178-.216.355-.433.524-.65.07-.088.131-.168.193-.256.254-.32.501-.657.732-.986.162-.224.324-.449.478-.673.894-1.307 1.703-2.67 2.343-4.096-1.002 1.178-2.12 2.212-3.283 3.158-.231.192-.47.377-.71.553-.307.249-.623.481-.94.697-.046.04-.1.08-.146.113-.239.168-.477.336-.716.497a.182.182 0 0 1-.07.048 9.084 9.084 0 0 1-.023-.642c0-1.7.688-3.402 1.756-4.68.137-.163.279-.33.425-.482 2.651-2.757 6.188-2.116 6.342-2.092l.586.12.108.61c.03.152.647 3.831-2.011 6.597zM6.779 5.222c-.208.217-.416.457-.632.714-.208.256-.408.529-.609.826-.038.064-.077.12-.115.184-.301-.136-.632-.393-.91-.713a6.98 6.98 0 0 1-1.04-1.58c.008.658.085 1.339.277 2.02.17.562.416 1.17.925 1.7a8.599 8.599 0 0 0-.67 2.693c-.887-.537-1.904-1.41-2.52-2.862-1.241-2.941.285-5.563.346-5.675L2.147 2l.586.112c.116.024 2.713.57 4.046 3.11z"></path></svg>
                                            <h6 style={{fontSize:'14px'}}> Eco-friendly</h6>
                                        </div>
                                    </CardContent>
                                </Card> 
                            </Grid>
                    </SwiperSlide>
                </Swiper>
                    <p className={classes.paraaSty}>*Availability of bikes, scooters, rentals, ride types, and transit information varies by region.</p>  
                </div>
        </div>        
    )}