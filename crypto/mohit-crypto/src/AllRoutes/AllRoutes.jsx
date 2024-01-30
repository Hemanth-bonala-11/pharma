import React from 'react'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from '../components/AboutUs'

const AllRoutes = () => {
  return (
    <Router>
    <div>
        
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
        
    </div>
    </Router>
  )
}

export default AllRoutes