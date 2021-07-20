import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Mary from '../../assets/images/mary.png';
import Harold from '../../assets/images/harold.png';
import Timothy  from '../../assets/images/timothy.png';
import Christine from '../../assets/images/christine.png';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination} from 'swiper/core';

SwiperCore.use([Pagination]);



const useStyles = makeStyles((theme) => ({
    mnsty:{
        marginTop:'0rem',
        padding:'0px 75px',
        [theme.breakpoints.down('xs')]: {
          marginTop:'2rem',
          padding:'0px 0px',
        },
        [theme.breakpoints.up('sm')]: {
          marginTop:'2rem',
          padding:'0px 0px',
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
        overflowX:'hidden',
        flexWrap:'nowrap',
        [theme.breakpoints.down('sm')]: {
          padding:'0px',
        },
      },
      gdItem:{
            [theme.breakpoints.down('xs')]: {
              width:'320px',
            },
            [theme.breakpoints.down('sm')]: {
              width:'338px',
            },
            [theme.breakpoints.up('md')]: {
              width:'464px',
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
        [theme.breakpoints.down('xs')]: {
          fontSize:'14px'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize:'14px'
        },
      },
      avaimg:{
        width:'100%',
      },
      avatar:{
        width:'54px',
        height:'54px',
      },
      paaraSty:{
        marginTop: '-26px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        marginLeft:'-34px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'-34px',
                },
      },
    paaraoSty:{
            fontStyle: 'italic',
    },
    swiperSty:{
      [theme.breakpoints.down('sm')]: {
        slidesPerView: 1,
      },
    },
   
  }));
  export default function SectionTwo() {
    const classes = useStyles();
    return(
        <div className={classes.mnsty}>
               <Swiper slidesPerView={3} spaceBetween={40} pagination={{
                      "clickable": TextTrackCue,
                    }} className="mySwiper" 
                    breakpoints = {{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 120
                      },
                      // when window width is >= 768px
                      480: {
                        slidesPerView: 1,
                        spaceBetween: 50
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 50
                      },
                      1024: {
                        slidesPerView: 2,
                      }
                    }}

                    
                    >
                  <SwiperSlide>
                        <Grid className={classes.gdItem}>
                          <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset'}} className={classes.crdSty}>
                              <CardContent>
                              {
                                  <Avatar aria-label="recipe" className={classes.avatar}>
                                          <img src={Mary} alt="Mary" className={classes.avaimg}/>
                                  </Avatar>
                              }
                              <p className={classes.poneSty}>“My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat.”</p>
                              <CardHeader className={classes.crdhSty}
                              />
                              <subheaderTypographyProps>
                                  <p className={classes.paaraSty}>— Mary</p>
                                  <p className={classes.paaraoSty}>Driving with lyft since 2019 </p>
                              </subheaderTypographyProps>
                              </CardContent>
                          </Card> 
                        </Grid>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Grid className={classes.gdItem}>
                          <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset'}} className={classes.crdSty}>
                            <CardContent>
                            {
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                        <img src={Harold} alt="Mary" className={classes.avaimg}/>
                                </Avatar>
                                }
                            <p className={classes.poneSty}>“As a student, it’s hard to complete my class work around a schedule. I started driving more with Lyft and realized it was the perfect opportunity to make money and work on my own time! Driving with Lyft gives me freedom in my schedule to focus on school, which is my main priority.”</p>
                            <CardHeader className={classes.crdhSty}
                            />
                            <subheaderTypographyProps>
                                <p className={classes.paaraSty}>— Harold</p>
                                <p className={classes.paaraoSty}>Driving with lyft since 2020 </p>
                            </subheaderTypographyProps>
                            </CardContent>
                          </Card> 
                      </Grid>
                  </SwiperSlide>
                   <SwiperSlide>
                      <Grid className={classes.gdItem}>
                          <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset'}} className={classes.crdSty}>
                            <CardContent>
                            {
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                        <img src={Timothy} alt="Mary" className={classes.avaimg}/>
                                </Avatar>
                                }
                            <p className={classes.poneSty}>“Driving with Lyft is the perfect way to make money and be there for my family’s needs. I love providing a way to get my passengers from point A to B. Independence is key for me, and I enjoy meeting new people while driving!”</p>
                            <CardHeader className={classes.crdhSty}
                            />
                            <subheaderTypographyProps>
                                <p className={classes.paaraSty}>— Timothy</p>
                                <p className={classes.paaraoSty}>Driving with lyft since 2017 </p>
                            </subheaderTypographyProps>
                            </CardContent>
                          </Card> 
                      </Grid>
                  </SwiperSlide>
                   <SwiperSlide>
                      <Grid className={classes.gdItem}>
                         <Card style={{borderRadius:'12px',  textAlign: '-webkit-center', boxShadow: 'unset'}} className={classes.crdSty}>
                            <CardContent>
                            {
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                        <img src={Christine} alt="Mary" className={classes.avaimg}/>
                                </Avatar>
                                }
                            <p className={classes.poneSty}>“I'm a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I drive connects me to my community and gives me extra money to help make ends meet.”</p>
                            <CardHeader className={classes.crdhSty}
                            />
                            <subheaderTypographyProps>
                                <p className={classes.paaraSty}>— Christine</p>
                                <p className={classes.paaraoSty}>Driving with lyft since 2016 </p>
                            </subheaderTypographyProps>
                            </CardContent>
                          </Card> 
                      </Grid>
                  </SwiperSlide>
               </Swiper>
        </div>
    )}