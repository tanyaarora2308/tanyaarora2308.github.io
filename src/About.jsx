import React from 'react'
import { Fade } from "react-awesome-reveal";
import aboutmeColored from './Images/Aboumecolored.jpg';

const About = () => {
    return (
        <>
        <Fade duration="3000" >
        <div className="about-container" id="Section_About">
                <div className="about" >
                    <h2 class="about-me" x><span style={{color: "var(--green)"}}>02.</span><span style={{paddingRight:"5%"}}>About Me</span></h2><br/>
                    <p className="about-para">Hello! I'm Tanya, a BTech student in <span className="work-link">Banasthali University,Rajasthan </span> and a front-End Developer in Haryana,India.I have passion for UI/UX effects, animations and creating intuitive, dynamic user experiences.Feel free to take a look at my most recent projects on my <a href="#" class="work-link">Work page.</a><br/><br/>I can be as involved in your project as you need me to be; from the seed of the idea, to sketches, creative direction, design, copywriting and website design.<br/><br/>Here are a few technologies I've been working with recently:</p>
                    <i class="fas fa-caret-right" style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>  HTML and CSS </span></i>
                    <i class="fas fa-caret-right" style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>  React JS  </span></i><br/><br/>
                    <i class="fas fa-caret-right"style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>  Javascript (ES6+)  </span></i>
                    <i class="fas fa-caret-right"style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>Node JS  </span></i><br/>
                </div>
                <div className="myImg" style={{backgroundImage: `url(${aboutmeColored})`}}></div>
            </div>
        </Fade>
            
        </>
    )
}

export default About
