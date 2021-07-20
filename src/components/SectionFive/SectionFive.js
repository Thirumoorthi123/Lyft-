import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  mainSty: {
    display: 'flex',
    backgroundColor: 'rgb(43, 27, 129)',
   
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap : 29,
      padding: '16px 16px',
      alignItems:'baseline'
    },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        gap : 14,
        padding: '16px 16px',
        alignItems:'center'
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        padding: '20px 139px',
        alignItems: 'center',
        gap: 52,

      },

    //   [theme.breakpoints.down('xs')]: {
    //         flexDirection: 'column',
    //         alignItems: 'flex-start',
    //         gap: '15px',
    //         padding:'15px',
    //   },
    // [theme.breakpoints.up('sm')]: {
    //   paddingLeft:'3%',
    //   gap:'29px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingLeft:'11%',
    //   paddingTop:'28px',
    // },
  },
  paraSty: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'LyftProUI, sans-serif',
    fontWeight: 700,
    fontSize: '26px',
    lineHeight: '32px',
    textAlign: 'initial',
    margin: 0,
  },
  // btnoneSty: {
  //   textTransform: 'none',
  //   backgroundColor: '#FFFFFF',
  //   color: '#000',
  //   borderRadius: '22px',
  //   width: '26%',
  //   fontFamily: 'ProximaNova, sans-serif',
  //   fontWeight: '700',
  //   '&:hover': {
  //     backgroundColor: '#999999',
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     width: '100%',
  //     padding: '13px',
  //     minWidth: 'fit-content',
  //     maxHeight: '90%',
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     padding: '13px',
  //     minWidth: 'fit-content',
  //     maxHeight: '90%',
  //   },
  //   [theme.breakpoints.down('md')]: {
  //   },
  // },
  // // inputTagclass: {
  //   [theme.breakpoints.down('sm')]: {
  //     width: '290px',
  //     '&.MuiFormLabel-root': {
  //       paddingLeft: '20px',
  //     },
  //   },
  // },
  spannSty: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      zIndex: 1,
      paddingTop: '20px',
      paddingLeft: '12px',
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      zIndex: 1,
      paddingTop: '20px',
      paddingLeft: '12px',
    },
  },
  spannoneSty: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      zIndex: 1,
      paddingTop: '20px',
      paddingLeft: '12px',
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      zIndex: 1,
      paddingTop: '20px',
      paddingLeft: '12px',
    },
  },
  txtSty: {
    '& .MuiFormControl-root':{
      minWidth: 320,
      [theme.breakpoints.down('xs')]: {
        minWidth: 288,
      },
          [theme.breakpoints.up('sm')]: {
            minWidth: 230,
          },
          [theme.breakpoints.up('md')]: {
            minWidth: 286,
          },
    },
    '& .MuiFilledInput-root':{
      backgroundColor:'#fff',
      borderRadius: 12,
    },
    '& .MuiInputLabel-filled':{
      paddingLeft: 30,
    },
  },
  txtoneSty:{
    '& .MuiFormControl-root':{
      minWidth: 320,
      [theme.breakpoints.down('xs')]: {
        minWidth: 288,
      },
      [theme.breakpoints.up('sm')]: {
        minWidth: 230,
      }, 
      [theme.breakpoints.up('md')]: {
        minWidth: 286,
      },
    },
    '& .MuiFilledInput-root':{
      backgroundColor:'#fff',
      borderRadius: 12,
    },
    '& .MuiInputLabel-filled':{
      paddingLeft: 30,
    },
  },
  btnSty:{
    textTransform: 'none',
    backgroundColor: '#FFFFFF',
    color: '#000',
    borderRadius: '22px',
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700',
    padding: 8,
    minWidth: 'fit-content',
    '&:hover': {
          backgroundColor: '#999999',
        },

    '& .MuiButton-outlined':{
      border:'none',
      textTransform: 'none',
    },
  },

}));
export default function SectionFive() {
  const classes = useStyles();
  return (
    <div className={classes.mainSty}>
      <div className={classes.paraSty}>
        <p>Ready to roll? Get a Lyft estimate.</p>
      </div>
      <div className={classes.txtSty}>
        <form>
          <span className={classes.spannSty}>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{ fill: 'rgba(139,55,255,1)' }} aria-hidden="true" focusable="false"><path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
          </span>
          <TextField id="filled-basic" className={classes.inputTagclass} label="Enter Pick-up location ?" variant="filled"
            InputProps={{
              disableUnderline: true // remove the underline for inputfield
            }}
          />
        </form>
      </div>
      <div className={classes.txtoneSty}>
        <form>
        <span className={classes.spannoneSty}>
        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#FF00BF'}} aria-hidden="true" focusable="false"><path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
         </span>
          <TextField  id="filled-basic"  className={classes.inputTagclass} label="Enter drop-off location?" variant="filled" 
            InputProps={{
              disableUnderline: true // remove the underline for inputfield
            }}
        />
        </form>
        </div>
        <div className={classes.btnSty}>
        <Button variant="outlined"> Get estimate</Button>
        </div> 
      {/* <div>
            <p className={classes.paraSty}>Ready to roll? <br/>Get a Lyft estimate.</p>
        </div>
        <div className={classes.txtSty}>
        <form>
          <span className={classes.spannSty}>
             <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'rgba(139,55,255,1)'}} aria-hidden="true" focusable="false"><path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
         </span>
          <TextField  id="filled-basic"  className={classes.inputTagclass} label="Enter Pick-up location ?" variant="filled" 
            InputProps={{
              disableUnderline: true // remove the underline for inputfield
            }}
        />
        </form>
        </div>
        <div>
        <form>
        <span className={classes.spannoneSty}>
        <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#FF00BF'}} aria-hidden="true" focusable="false"><path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
         </span>
          <TextField  id="filled-basic"  className={classes.inputTagclass} label="Enter drop-off location?" variant="filled" 
            InputProps={{
              disableUnderline: true // remove the underline for inputfield
            }}
        />
        </form>
        </div>
        <div style={{width:'37%'}}>
        <Button variant="outlined" className={classes.btnoneSty}> Get estimate</Button>
        </div> */}
    </div>
  )
}