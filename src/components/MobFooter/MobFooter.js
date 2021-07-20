import React from 'react';
import styled from 'styled-components';
// import plus from '../../assets/images/plus.svg';
import { useState } from 'react';
import Down from '../../assets/images/down.svg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const MobMainFooter = styled.div`
background-color: #ffffff;
height: 100%;
width: 100%;
    padding-top: 30px;
    line-height: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        width: 100%;
        display:none;
    }
}
`;
const MobOne = styled.div`
width: 277px;
border-bottom: 1px solid #999;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}

h3{
    font-size: 15px;
    font-family: LyftProUI, sans-serif;
    margin-left: -162px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -600px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;

    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;

const MobTwo = styled.div`
width: 277px;
border-bottom: 1px solid #999;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}

h3{
    font-size: 15px;
    font-family: LyftProUI, sans-serif;
    margin-left: -182px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -610px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;

const MobThree = styled.div`
width: 277px;
border-bottom: 1px solid #999;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}
h3{
    font-size: 15px;
    font-family: LyftProUI, sans-serif;
    margin-left: -180px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -620px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;

const MobFour = styled.div`
width: 277px;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}
h3{
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    margin-left: -230px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -640px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;
const useStyles = makeStyles((theme) => ({
    fTwo:{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '18px 3px 46px 3px',
        gap:'0%',
        [theme.breakpoints.down('xs')]: {
            padding: '37px 0px 46px 0px',
           },
           [theme.breakpoints.up('sm')]: {
            gap:'38%',
          },
          [theme.breakpoints.up('md')]: {
            gap:'244px',
          },
    },
    fLeft:{
        display:'flex',
        alignItems:'center',
        gap:'20px',
        position:'absolute',
        right:'16%', 
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                paddingTop: '19px',
                marginLeft: '35px',
                right:'4%',
                gap:'0px',
                lineHeight:'27px',
            },
    },
    ahSty:{
        color:'blue',
        fontSize:'12px',
    },
    gLogo:{
        position: 'relative',
        top: '-1px',
        zIndex: 0,
    },
    lessSty:{
        width:'24px',
        height:'24px',
    },
    spSty:{
        color:'rgba(18,16,12,0.70196)',
        fontWeight:'400',
        fontSize:'14px',
    },
    fRight:{
        display:'flex',
        gap:'12px',
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
            maxWidth:'22%',
            maxHeight:'90%',
         },
         [theme.breakpoints.down('md')]: {
        },
       },
       btntwoSty:{
        textTransform: 'none',
        borderRadius: '22px',
        width: '26%',
        fontFamily: 'ProximaNova, sans-serif',
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            padding:'13px',
            maxWidth:'47%',
            maxHeight:'90%',
          },
          [theme.breakpoints.up('sm')]: {
               width:'100%',
           padding:'13px',
           maxWidth:'25%',
           maxHeight:'90%',
          },
          [theme.breakpoints.down('md')]: {
         },
    },
    footerFour:{
        marginTop: '27px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        
    },
    btnSty:{
        textTransform:'none',
        color:'#0C0B31',
        fontSize:'16px',
        borderRadius:'22px',
        fontWeight:'700',
        padding:'9px 21px',
    },
    socialSty:{
        display:'flex',
        gap:'26px',
        cursor: 'pointer',

    },
    twitterSty:{
        '&:hover':{
            color:'blue',
        },
    },
    facebookSty:{
        '&:hover':{
            color:'blue',
        },
    },
    instSty:{
        '&:hover':{
            color:'blue',
        },
    },
  }));

export function MobFooter({ toggle}){
    const [isOpen,setOpen] = useState(false)
    const [resource,setResource] = useState(false)
    const [company,setCompany] = useState(false)
    const [legal,setLegal] = useState(false)
    const classes = useStyles();

    return<>
        <MobMainFooter>
            <MobOne>
                <h3>DRIVER</h3>
                <img  src={Down}  alt="plus" onClick={()=> setOpen(!isOpen)} ></img>
                {isOpen && 
                 <ul>
                     <li>Become a Driver</li>
                     <li>Earings</li>
                     <li>Cities</li>
                     <li>Help</li>
                     <li>Safety</li>
                     <li>Application Requirements</li>
                     <li>Express Drive</li>
                      <li>Bonus</li>
                     <li>Lyft Rewards</li>
                     <li>Insurance</li>
                     <li>Hub</li>
                 </ul>
                }
            </MobOne>
            <MobTwo>
            <h3>RIDER</h3>
            <img  src={Down}  alt="plustwo" onClick={()=> setResource(!resource)}></img>
                {resource && 
                 <ul>
                     <li>Sing up to ride</li>
                     <li>Fare Estimate</li>
                     <li>Lyft Pink</li>
                     <li>Cities</li>
                     <li>Help</li>
                     <li>Safety</li>
                     <li>Business Profile</li>
                     <li>Rewards</li>
                     <li>Events</li>
                     <li>Airports</li>
                     <li>Gift Cards</li>
                     <li>Donate</li>
                     <li>Blog</li>
                 </ul>
                }
            </MobTwo>
            <MobThree>
            <h3>LYFT</h3>
            <img  src={Down}  alt="plus" onClick={()=> setCompany(!company)}></img>
            {company && 
                 <ul>
                     <li>Careers</li>
                     <li>LyftUp</li>
                     <li>Business</li>
                     <li>Rentals</li>
                     <li>Bikes</li>
                     <li>Scooters</li>
                     <li>Self Driving</li>
                     <li>Lyft Media</li>
                     <li>Developers</li>
                     <li>Press</li>
                     <li>Investor Relations</li>
                 </ul>
                }
            </MobThree>
            <MobFour>
                    <div className={classes.footerFour}>
                        <div>
                        <Button className={classes.btnSty} variant="outlined">Lyft driver app</Button>
                        </div>
                        <div>
                        <Button className={classes.btnSty} variant="outlined">Lyft rider app</Button>
                        </div>
                        <div>
                        <Button className={classes.btnSty} variant="outlined">Ride on Web</Button>
                        </div>
                </div>
           <div className={classes.fTwo}>
                <div className={classes.fLeft}>
                    <a href="www.google.com"  className={classes.ahSty}> Terms</a>
                    <a href="www.google.com"  className={classes.ahSty}> Privacy</a>
                    <span className={classes.spSty}>© Lyft,Inc</span>
                    <span className={classes.spSty}>CPUC ID No. TCP0032513-P</span>
                </div>
                <div className={classes.fRight}>
                    <span className={classes.socialSty}>
                    <svg className={classes.twitterSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="M5.403 13.376c5.283 0 8.172-4.377 8.172-8.173 0-.124 0-.248-.008-.371A5.844 5.844 0 0 0 15 3.345a5.733 5.733 0 0 1-1.65.452 2.882 2.882 0 0 0 1.263-1.589 5.77 5.77 0 0 1-1.824.698 2.875 2.875 0 0 0-4.895 2.62 8.155 8.155 0 0 1-5.92-3.002 2.874 2.874 0 0 0 .89 3.834 2.851 2.851 0 0 1-1.304-.36v.037c0 1.368.964 2.545 2.304 2.816a2.868 2.868 0 0 1-1.297.05 2.876 2.876 0 0 0 2.684 1.994A5.764 5.764 0 0 1 1 12.085a8.132 8.132 0 0 0 4.403 1.289"></path></svg>
                    <svg  className={classes.facebookSty}width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M15 8a7 7 0 1 0-8.094 6.915v-4.892H5.13V8h1.777V6.458c0-1.755 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.882c-.87 0-1.141.54-1.141 1.093V8h1.941l-.31 2.023H9.094v4.892A7.002 7.002 0 0 0 15 8"></path></svg>
                    <svg className={classes.instSty} width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8.67 2c1.032.003 1.262.012 1.801.036.639.03 1.075.13 1.456.279a2.94 2.94 0 0 1 1.063.692c.333.333.538.668.691 1.062.149.382.25.818.28 1.456.028.64.035.844.035 2.473v.246c0 1.406-.008 1.621-.036 2.227-.029.639-.13 1.075-.279 1.456a2.94 2.94 0 0 1-.691 1.063 2.94 2.94 0 0 1-1.063.691c-.381.149-.817.25-1.456.28-.64.028-.844.035-2.473.035h-.246c-1.406 0-1.62-.008-2.227-.036-.638-.029-1.074-.13-1.456-.279a2.94 2.94 0 0 1-1.062-.691 2.94 2.94 0 0 1-.692-1.063c-.148-.381-.25-.817-.279-1.456a32.225 32.225 0 0 1-.035-1.8V7.326c.002-1.032.01-1.262.035-1.8.03-.64.13-1.075.279-1.457a2.94 2.94 0 0 1 .692-1.062 2.94 2.94 0 0 1 1.062-.692c.382-.148.818-.25 1.456-.279.539-.024.769-.033 1.8-.035zm-.21 1.081h-.923c-1.185.001-1.397.009-1.963.035-.584.026-.902.124-1.113.206-.28.109-.48.239-.69.449-.21.21-.34.41-.449.69-.082.211-.18.529-.206 1.113-.026.566-.034.778-.035 1.963v.922c.001 1.186.009 1.397.035 1.963.026.585.124.902.206 1.114.109.28.239.48.449.69.21.21.41.34.69.448.211.082.529.18 1.113.207.566.025.778.033 1.963.034h.922a34.927 34.927 0 0 0 1.963-.034c.585-.027.902-.125 1.114-.207.28-.109.48-.239.69-.449.21-.21.34-.41.448-.69.082-.21.18-.528.207-1.113.025-.566.033-.777.034-1.963v-.922a34.951 34.951 0 0 0-.034-1.963c-.027-.584-.125-.902-.207-1.113a1.858 1.858 0 0 0-.449-.69c-.21-.21-.41-.34-.69-.449-.21-.082-.528-.18-1.113-.206-.566-.026-.777-.034-1.963-.035zm-.462 1.837a3.08 3.08 0 1 1 0 6.16 3.08 3.08 0 0 1 0-6.16zm0 1.08a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm3.202-1.92a.72.72 0 1 1 0 1.44.72.72 0 0 1 0-1.44z"></path></svg>
                    </span>
                </div>
            </div>

           </MobFour>
        </MobMainFooter>    
          </>
}