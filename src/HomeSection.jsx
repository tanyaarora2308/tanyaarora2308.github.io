import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from "./Skills"
import Projects from './Projects';
import Connect from './Connect'
import Footer from "./Footer"


const HomeSection = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Connect/>
            <Footer/>
        </div>
    )
}

export default HomeSection
