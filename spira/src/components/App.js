// import logo from '../images/spira_logo1 1.png';
import './App.css';
import LandingHeader from './LandingHeader';
import MottoSection from './MottoSection';
import Services from './Services';
import RecentWorks from './RecentWorks';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
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
      <Footer/>
    </div>
  );
}

export default App;
