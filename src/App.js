import './App.css';
import  MainNavbar  from './components/NavBar';
import { SectionMain } from './components/Section';
import { SectionOneMain } from './components/SectionOne';
import { SectionTwoMain } from './components/SectionTwo';
import { SectionThreeMain } from './components/SectionThree';
import { SectionFourMain } from './components/SectionFour';
import { SectionFiveMain } from './components/SectionFive';
import { SectionSixMain } from './components/SectionSix';
import { SectionSevenMain } from './components/SectionSeven';
import { SectionEightMain } from './components/SectionEight';
import { SectionNineMain } from './components/SectionNine';
import { MainFooter } from './components/Footer';
import { MobFooterMain } from './components/MobFooter';
import { useMediaQuery} from 'react-responsive';
import {DeviceList} from './components/responsive';
// import {MainCard} from './components/Card';



function App() {
    const isMobile = useMediaQuery({maxWidth : DeviceList.mobile})

  return (
    <div className="App">
      <MainNavbar/>
      <SectionMain/>
      <SectionOneMain/>
       <SectionTwoMain/>
      <SectionThreeMain />
      <SectionFourMain/>
      <SectionFiveMain/>
      <SectionSixMain/>
      <SectionSevenMain/>
      <SectionEightMain/>
      <SectionNineMain/>
      {/* <MainFooter />  */}

        {!isMobile && <MainFooter />} 
        {isMobile && <MobFooterMain/>}
        {/* <MainCard /> */}
    </div>
  );
}

export default App;
