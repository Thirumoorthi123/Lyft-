import React from 'react';
import { DeviceList} from '../responsive';
import { useMediaQuery} from 'react-responsive';
import {MobileNavLinks} from './mobNavLinks';
import Header from './Header';

 export default function MainNavbar(){
         const isMobile = useMediaQuery({maxWidth : DeviceList.mobile})

      return( <>
                  {/* <Header /> */}
                   {!isMobile && <Header /> } 
                   {isMobile && <MobileNavLinks />} 
            </>
      )
};