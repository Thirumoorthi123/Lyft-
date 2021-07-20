import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    
    headerSty:{
        display:'flex',
        borderBottom: '1px solid rgba(12,11,49,0.16)',
        padding: 0,
        gap: 72,
        // [theme.breakpoints.down('xs')]: {
        //     padding: 0,
        //     gap: 0,    
        // },
        [theme.breakpoints.down('sm')]: {
            padding:0,
            gap: 0,
        },
        [theme.breakpoints.up('md')]: {
        },
    
    },
    logoSty:{
        flex:1,
        padding: 18,
    },
    searchSty:{
        flex:1,
    },
    listSty:{
        display:'flex',
        flex:3,
    },
    textfieldSty:{
        '& .MuiFilledInput-root':
        {
            backgroundColor: '#fff',
            border: '1px solid rgba(12,11,49,0.16)',
            borderRadius: 12,
            height: 46,
            width: 335,
            marginTop: 19,
            [theme.breakpoints.down('xs')]: {
               width:170,
             },
             [theme.breakpoints.down('sm')]: {
             },
             [theme.breakpoints.down('md')]: {
             },
        },
        '& .MuiInputLabel-filled':{
            paddingLeft:54,
            paddingTop: 15,
        },
    },
    typooSty:{
        display:'flex',
        borderLeft: '1px solid rgba(12,11,49,0.16)',
        borderRight: '1px solid rgba(12,11,49,0.16)',
    },
    mainSty:{
        // display:'flex',
    },
    dotSty:{
        position: 'absolute',
        paddingLeft: 25,
        top: 33,
        zIndex: 1,
    },
    // searchSty:{
    //     position: 'absolute',
    //     top: 42,
    //     paddingLeft: 42,
    // },
    btnSty:{
        borderRight: '1px solid rgba(12,11,49,0.16)',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: 700,
        fontSize: 15,
        texttransform: 'uppercase',
    },
  }));
  export default function Header() {
    const classes = useStyles();
    return(
      <header className={classes.headerSty}>
          <div  className={classes.logoSty}>
            <svg  fill='rgb(255, 0, 191)' preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 50" aria-labelledby="lyft-logo" height="40px"><g><title id="lyft-logo">Lyft Logo</title><path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path><path d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path><path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path></g></svg>
          </div>
          <div className={classes.searchSty}>
              <div className={classes.mainSty}>
                  <div className={classes.dotSty}>
                    <svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'#DE00A6'}} aria-hidden="true" focusable="false"><path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
                  </div>
                  <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField className={classes.textfieldSty} id="filled-basic" label="Where are you going" variant="filled"
                            InputProps={{
                                disableUnderline: true // remove the underline
                            }}
                        />
                    </form>
                  </div>
                  {/* <div className={classes.searchSty} >
                    <svg  width="16" height="16" viewBox="0 0 16 16" style={{fill:'rgba(12,11,49,1)'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M7.298 10.313a3.172 3.172 0 0 1-2.776-3.514 3.145 3.145 0 0 1 1.182-2.116 3.14 3.14 0 0 1 2.332-.66 3.17 3.17 0 0 1 2.777 3.515A3.15 3.15 0 0 1 9.63 9.653a3.151 3.151 0 0 1-2.332.66zm5.98 2.433-1.733-2.192A5.122 5.122 0 0 0 12.8 7.771V7.77a5.173 5.173 0 0 0-4.53-5.733 5.111 5.111 0 0 0-3.806 1.077 5.131 5.131 0 0 0-1.929 3.452 5.174 5.174 0 0 0 5.137 5.768 5.1 5.1 0 0 0 2.287-.56l1.747 2.212 1.571-1.24z"></path></svg>
                  </div> */}
              </div>
          </div>
          <div className={classes.listSty}>
              <div className={classes.typooSty} >
                    <Button className={classes.btnSty}  variant="h6"  gutterBottom>
                        DRIVER
                    </Button>
                    <Button className={classes.btnSty}  variant="h6" gutterBottom>
                        RIDER
                    </Button>
                    <Button className={classes.btnSty}   variant="h6" gutterBottom>
                        BUSINESS
                    </Button>
                    <Button className={classes.btnSty}   variant="h6" gutterBottom>
                        LOGIN
                    </Button>
                    <Button className={classes.btnSty}  variant="h6" gutterBottom>
                        SIGNUP
                    </Button>
            </div>
          </div>
      </header>
    )}