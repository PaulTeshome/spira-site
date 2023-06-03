// import logo from '../images/spira_logo1 1.png';
import './styles/Home.css';
import { useEffect } from 'react';
import LandingHeader from './LandingHeader';
import MottoSection from './MottoSection';
import Services from './Services';
import RecentWorks from './RecentWorks';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';


function Home() {

  useEffect(()=>{
    document.title='Spira Agency'
  },[])

  return (
    <div>
      <LandingHeader/>
      <MottoSection motto="EMPOWERING YOUR BRAND IN THE DIGITAL SPACE" description="
                At Spira, our mission is to provide personalized and result-driven solutions
                to help our clients achieve their business goals. 
                We believe in building strong relationships with our clients 
                and working closely with them to understand their unique needs and challenges."/>
      <Services/>
      <RecentWorks/>
      <OurTeam/>
      <AboutUs/>
    </div>
  );
}

export default Home;
