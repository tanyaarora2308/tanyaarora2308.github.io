import React from 'react'
import Navbar from './components/Navigation/Navbar';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Skills from "./sections/Skills/Skills"
import Projects from './sections/Projects/Projects';
import Work from './sections/Work/Work';
import Connect from './sections/Connect/Connect'
import Footer from "./components/Common/Footer"


const HomeSection = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <About/>
            <Skills/>
            <Work/>
            <Projects/>
            <Connect/>
            <Footer/>
        </div>
    )
}

export default HomeSection
