// import logo from '../images/spira_logo1 1.png';
import './styles/Home.css';
import { useEffect ,useState} from 'react';
import LandingHeader from './LandingHeader';
import MottoSection from './MottoSection';
import Services from './Services';
import RecentWorks from './RecentWorks';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';
import axios from 'axios';


function Home() {

  const [motto,setMotto]=useState("")
  const [mission,setMission]=useState("");

  useEffect(()=>{
    document.title='Spira Agency'

    axios.get("/getMotto")
    .then(res => {
      setMotto(res.data[0].comp_motto)
        setMission(res.data[0].comp_mission)
    })
    .catch(error => {
      console.log(error);
    });

  },[])

  return (
    <div>
      <LandingHeader/>
      <MottoSection motto={motto} description={mission}/>
      <Services/>
      <RecentWorks/>
      <OurTeam/>
      <AboutUs/>
    </div>
  );
}

export default Home;
