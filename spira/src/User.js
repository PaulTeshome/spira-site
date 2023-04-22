import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import HireForm from './components/HireForm'
import  {Route, Routes} from "react-router-dom"

function User() {
  return (
    <div className="User">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/hireUs" element={<HireForm/>}/>
    </Routes>
    <Footer telegram_link="#tg" insta_link="#insta" gmail_link="email" phone1="+46731443749" 
            phone2="+46762727223" email="info@spiraagency.com" location="Stockholm, Sweden"/>
  </div>
  )
}

export default User