// import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     display: 'flex',
//     // flexWrap: 'wrap',
//     // minWidth: '320px',
//     // width: '100%',
//     // maxWidth: '1340px',
//     // margin: '0px auto',
//     // paddingRight: '8px',
//     // borderBottom:'1px solid #999',
//     // padding:'13px 31px',
//     //  [theme.breakpoints.down('xs')]: {
//     //    padding:'13px 0px',
//     //        borderBottom:'1px solid #999',
      
//     // },
//     // [theme.breakpoints.down('sm')]: {
//     // },
//     // [theme.breakpoints.down('md')]: {
//     //   padding: '6px',
//     // },
//   },    
//   first:{
//     flex:1,
//   },

//   third:{
//     flex:1,
//   },
//    svgSty:{
//         color:'rgb(255,0,191)',
//         '&:hover':{
//             cursor:'pointer',
//             color:'#000',
//         },
//       },
//         second: {
//           flex:1,
//         // height: '38px',
//         // marginTop: '7px',
//         // position: 'relative',
//         // border:'2px solid #000',
//         // borderRadius:'6px',
//         // minWidth:'80px',
//         // height:'44px',
//         // '&:hover': {
//         //   backgroundColor: fade(theme.palette.common.white, 0.25),
//         // },
//         // marginRight: theme.spacing(2),
//         // marginLeft: 0,
//         // width: '100%',
//         // [theme.breakpoints.down('xs')]: {
//         //    border:'1px solid #999',
//         // },
//         //  [theme.breakpoints.down('sm')]: {
//         //   marginLeft: theme.spacing(10),
//         //   width: 'auto',
//         // },
//         // [theme.breakpoints.down('md')]: {
//         // },
//       },


//       menuButton: { 
//         marginRight: theme.spacing(2),
//       },
//       title: {
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//           display: 'block',
//         },
//       },
//       svgSty:{
//         color:'rgb(255,0,191)',
//         '&:hover':{
//             cursor:'pointer',
//             color:'#000',
//         },
//       },
//       search: {
//         height: '38px',
//         marginTop: '7px',
//         position: 'relative',
//         border:'2px solid #000',
//         borderRadius:'6px',
//         minWidth:'80px',
//         height:'44px',
//         '&:hover': {
//           backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.down('xs')]: {
//            border:'1px solid #999',
//         },
//          [theme.breakpoints.down('sm')]: {
//           marginLeft: theme.spacing(10),
//           width: 'auto',
//         },
//         [theme.breakpoints.down('md')]: {
//         },
//       },
//       searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       inputRoot: {
//         color: 'rgba(12,11,49,1)',
//            [theme.breakpoints.down('xs')]: {
//              width:'166px',
//         },
//         [theme.breakpoints.down('sm')]: {
//         },
//         [theme.breakpoints.down('md')]: {
//         },
//       },
//       toolSty:{
//         gap:'220px',
//          [theme.breakpoints.down('xs')]: {
//            gap:'0px',
//            borderBottom:'1px solid red',
//         },
//         [theme.breakpoints.down('sm')]: {
//           gap:'23px',
//         },
//         [theme.breakpoints.down('md')]: {
//           gap:'23px',
//         },
//       },
//       dSty:{
//         display:'flex',
//       },  
//       bSty:{
//         boxShadow:'none',
//         backgroundColor:'#ffffff',
//         [theme.breakpoints.down('xs')]: {
//           borderBottom:'1px solid res',
//        },
//        [theme.breakpoints.down('sm')]: {
//        },
//        [theme.breakpoints.down('md')]: {
//        },
//       },
//       svgsearchSty:{
//           position:'absolute',
//         margin: '13px 0px 0px -29px',
//          [theme.breakpoints.down('xs')]: {
//           margin: '12px 2px 2px -159px',
//         },
//         [theme.breakpoints.down('sm')]: {
//         },
//         [theme.breakpoints.down('md')]: {
//         }
//       },
//       svgdotSty:{
//         position: 'absolute',
//         left: '7px',
//         top: '12px',
//         [theme.breakpoints.down('xs')]: {
//           display:'none',
//         },
//         [theme.breakpoints.down('sm')]: {
//         },
//         [theme.breakpoints.down('md')]: {
//         }
//       },
//       inputInput: {
//         padding: theme.spacing(1.6, 11.5, 1, 0),
//         marginLeft:'-21px',
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.down('xs')]: {
//               padding: '13px 13px 8px 46px',
//         },
//         [theme.breakpoints.down('sm')]: {
//         },
//         [theme.breakpoints.down('md')]: {
//         },
//       },
//       sectionDesktop: {
//         display: 'none',
//         [theme.breakpoints.down('md')]: {
//           display: 'flex',
//         },
//       },
//       sectionMobile: {
//         display: 'flex',
//         [theme.breakpoints.down('md')]: {
//           display: 'none',
//         },
//       },
//       mobSty:{
//          [theme.breakpoints.down('xs')]: {
//            position: 'absolute',
//            left: '20px',
//         },
//         [theme.breakpoints.down('sm')]: {
//         },
//         [theme.breakpoints.down('md')]: {
//         },
//       },
//       typomainSty:{
//         display:'flex',
//         gap:'63px',
//         color:'#0C0B31',
//         alignItems: 'center',
//         paddingLeft: '35px',
//          [theme.breakpoints.down('xs')]: {
//           display:'none',
//         },
//         [theme.breakpoints.down('sm')]: {
//           display:'none',
//         },
//         [theme.breakpoints.up('md')]: {
//         },
        
//       },
//       typooSty:{
//         fontFamily: 'LyftProUI, sans-serif',
//         color:'#0C0B31',
//         fontSize:'14px',
//         fontWeight:'600',
//         '&:hover':{
//           cursor:'pointer',
//           color:'blue',
//         },
//       }


// }));

// export default function NavBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static" className={classes.bSty}>
//         <Toolbar className={classes.toolSty}>
//           <svg className={classes.svgSty} fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 50" aria-labelledby="lyft-logo" height="40px"><g><title id="lyft-logo">Lyft Logo</title><path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path><path d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path><path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path></g></svg>
//        <div className={classes.mobSty}>
//           <div  className={classes.dSty}>
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//               </div>
//               <div>
//                 <svg className={classes.svgdotSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'#DE00A6'}} aria-hidden="true" focusable="false"><path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
//               </div>
//             <InputBase
//               placeholder="Where are you going?"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//               />           
//             <svg className={classes.svgsearchSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'var(--core-ui-theme-icon-primary,rgba(12,11,49,1))'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M7.298 10.313a3.172 3.172 0 0 1-2.776-3.514 3.145 3.145 0 0 1 1.182-2.116 3.14 3.14 0 0 1 2.332-.66 3.17 3.17 0 0 1 2.777 3.515A3.15 3.15 0 0 1 9.63 9.653a3.151 3.151 0 0 1-2.332.66zm5.98 2.433-1.733-2.192A5.122 5.122 0 0 0 12.8 7.771V7.77a5.173 5.173 0 0 0-4.53-5.733 5.111 5.111 0 0 0-3.806 1.077 5.131 5.131 0 0 0-1.929 3.452 5.174 5.174 0 0 0 5.137 5.768 5.1 5.1 0 0 0 2.287-.56l1.747 2.212 1.571-1.24z"></path></svg>
//           </div>
//               <div className={classes.typomainSty}>
//               <Typography className={classes.typooSty} variant="h6"  gutterBottom>
//                  DRIVER
//               </Typography>
//               <Typography className={classes.typooSty} variant="h6" gutterBottom>
//                  RIDER
//               </Typography>
//               <Typography className={classes.typooSty} variant="h6" gutterBottom>
//                  BUSINESS
//             </Typography>
//             <Typography className={classes.typooSty} variant="h6" gutterBottom>
//                  LOGIN
//               </Typography>
//               <Typography className={classes.typooSty} variant="h6" gutterBottom>
//                  SIGNUP
//             </Typography>
//               </div>        
//           </div>  
//         </div>  
//           </Toolbar>
//       </AppBar>

//     </div>
//   );
// }





//        {/* <div className={classes.first}>
//           <svg className={classes.svgSty} fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 50" aria-labelledby="lyft-logo" height="40px"><g><title id="lyft-logo">Lyft Logo</title><path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path><path d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path><path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path></g></svg>
//         </div>
//         <div className={classes.second}>
//           test
//         </div>
//         <div className={classes.third}>
//           content
//         </div> */}