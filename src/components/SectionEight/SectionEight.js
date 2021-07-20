import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lyft from '../../assets/images/LyftB.jpg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainSty:{
        width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '34px',
    },
    lyftSty:{
        width:'12%',
        [theme.breakpoints.down('xs')]: {
            width:'45%',
        },
         [theme.breakpoints.up('sm')]: {
            width:'25%',
        },
        [theme.breakpoints.up('md')]: {
            width:'12%',
        },
    },
    honeSty:{
        margin:0,
                [theme.breakpoints.down('xs')]: {
                    fontSize:'29px',
                },
    },
    btnSty:{
        gap: '26px',
        marginTop: '9px',
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
           minWidth:'fir-content',
           maxHeight:'90%',
          },
          [theme.breakpoints.down('md')]: {
         },
    },
    spnSty:{
        position: 'relative',
        left: '10px',
        top: '4px',
         [theme.breakpoints.down('xs')]: {
               position: 'absolute',
                marginLeft: '200px',
                marginTop: '5%',
          },
          [theme.breakpoints.up('sm')]: {
            
          },
          [theme.breakpoints.down('md')]: {
         },
    },
    paraSty:{
        paddingTop:'37px',
           [theme.breakpoints.down('xs')]: {
               padding:'42px 35px 0px',
           },
    },
    slideSty:{
        position: 'absolute',
        left: 0,
        right: 0,
        marginTop: '47px',     
        color:'#999', 
         [theme.breakpoints.down('sm')]: {
                 marginTop: '45px',
         },
    },
  }));
  export default function SectionEight() {
    const classes = useStyles();
    return(
      <div className={classes.mainSty}>
          <div>
            <img  src={Lyft}  alt="lyft" className={classes.lyftSty}></img>
          </div>
          <div>
              <h1 className={classes.honeSty}>We help you move your</h1>
          </div>
                <div className={classes.slideSty} >
                        <p class="item-1">people</p> 
                        <p class="item-2">employess</p>        
                        <p class="item-3">VIP's</p> 
                </div>
          <div>
              <p  className={classes.paraSty}>Affordable transportation solutions, effortless payments, and getting all the right people to <br/>
              all the right places. So you can get work done.
              </p>
          </div>
          <div className={classes.btnSty}>
                        <Button className={classes.btntwoSty}>Learn about Lyft Business
                            <span>
                                <svg className={classes.spnSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M10.173 9.422H1V6.613h9.173L7.411 3.298 9.569 1.5 15 8.017l-5.431 6.517-2.158-1.798z"></path></svg>
                            </span>
                        </Button>
          </div>
      </div>
    )}