import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import HireForm from './components/HireForm'
import  {Route, Routes} from "react-router-dom"
import axios from 'axios'

function User() {

  const [footerData, setFooterData]= useState([]);
  useEffect(()=>{
    axios.get("/general/getFooter")
    .then(res => {
     setFooterData(res.data[0])
    })
    .catch(error => {
      console.log(error);
    });
    
  },[])

  return (
    <div className="User">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/hireUs" element={<HireForm/>}/>
    </Routes>
    <Footer telegram_link={footerData.other_socials} insta_link={footerData.insta_link} gmail_link={footerData.comp_email} phone1={footerData.comp_phone1} phone2={footerData.comp_phone2} 
            email={footerData.comp_email} location={footerData.comp_location}/>
  </div>
  )
}

export default User