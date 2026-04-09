import React from 'react'
import { Fade } from "react-awesome-reveal";
import aboutmeColored from '../../Images/tanya-profile.jpg';

const About = () => {
    return (
        <>
        <Fade duration="3000" >
        <div className="about-container" id="Section_About">
                <div className="about" >
                    <h2 className="about-me"><span style={{color: "var(--green)"}}>02.</span><span style={{paddingRight:"5%"}}>About Me</span></h2><br/>
                    <p className="about-para">I’m Tanya, a Software Engineer focused on building scalable systems and high-performance applications.<br/><br/>I specialize in backend and full-stack development, with a strong emphasis on optimization, system design, and solving complex data-driven problems. I enjoy pushing systems to be faster, cleaner, and more reliable, often leveraging AI to accelerate development and improve outcomes.</p>
                    {/* <i class="fas fa-caret-right" style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>  HTML and CSS </span></i>
                    <i class="fas fa-caret-right" style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>  React JS  </span></i><br/><br/>
                    <i class="fas fa-caret-right"style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>  Javascript (ES6+)  </span></i>
                    <i class="fas fa-caret-right"style={{color: "var(--green)"}}><span style={{color: "var(--gray)",marginRight:"100px"}}>Node JS  </span></i><br/> */}
                </div>
                <div className="myImg" style={{backgroundImage: `url(${aboutmeColored})`}}></div>
            </div>
        </Fade>
            
        </>
    )
}

export default About
