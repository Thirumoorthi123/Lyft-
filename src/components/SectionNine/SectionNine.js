import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Airbnb from '../../assets/images/airbnb.svg';
import Scension from '../../assets/images/ascension.svg';
import Bluecross from '../../assets/images/bluecrosss.svg';
import SAP from '../../assets/images/SAP.svg';
import Delta from '../../assets/images/delta.svg';
import Logis from '../../assets/images/logisticare.svg';
import Sales from '../../assets/images/salesforce.svg';
import Slack from '../../assets/images/slack.svg';
import Sap from '../../assets/images/SAP.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination} from 'swiper/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainSty:{
        display: 'flex',
    flexWrap: 'wrap',
    minWidth: '320px',
    width: '100%',
    maxWidth: '1280px',
    margin: '0px auto',
    justifyContent:'center',
    
    },
    lyftSty:{
        width:'100%',
       [theme.breakpoints.down('sm')]: {
           width:'49%',
       },

    },
    imgSty:{
        display:'flex',
        marginLeft:'11%',
    },
    spnimgSty:{
        display:'flex',
        gap:'19px',

        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            gap:0,
        },  
    },
  }));
  export default function SectionNine() {
    const classes = useStyles();
    return(
      <div className={classes.mainSty}>
        <div></div>  
                <div className={classes.imgSty} >
                    <div>
                        <span className={classes.spnimgSty}>  
                        <img  src={Airbnb}  alt="lyft" className={classes.lyftSty}></img>
                        <img  src={Scension}  alt="lyft" className={classes.lyftSty}></img>
                        <img  src={Bluecross}  alt="lyft" className={classes.lyftSty}></img>
                        <img  src={SAP}  alt="lyft" className={classes.lyftSty}></img>

                        {/* <Swiper slidesPerView={0} spaceBetween={50} className={classes.mySwiper}>  
                            <SwiperSlide>  
                                <img  src={Airbnb}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  src={Scension}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  src={Bluecross}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  src={SAP}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  src={Delta}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                 <img  src={Logis}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                 <img  src={Sales}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                 <img  src={Slack}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                 <img  src={SAP}  alt="lyft" className={classes.lyftSty}></img>
                            </SwiperSlide>
                        </Swiper>         */}
                        </span>
                    </div>
                </div>
        <div></div>                
    </div>
    )}