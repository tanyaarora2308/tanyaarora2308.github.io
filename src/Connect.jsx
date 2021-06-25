import React from 'react'
import Button from './Button'
import "./Style.css";
import {Zoom } from "react-awesome-reveal";


const Connect = () => {
    return (
        <div style={{textAlign:"center"}} id="Section_Contact">
            <Zoom>
            <span style={{display:"block",textAlign:"center",color: "var(--green)",fontFamily: "'Roboto Mono', monospace",fontSize: "1rem"}}>04. What's Next?</span>
            <h2 style={{fontFamily: "'Roboto Mono', monospace",color: "var(--bright-gray)",fontSize: "2rem",fontWeight:"900",marginTop:"10px"}}><strong>Get In Touch</strong></h2>
            <p className="connect-para">Feel free to get in touch with me. I am always open to discussing new projects ,creative ideas or opportunities to be a part of your vision. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! </p>
            <p className="home-btn" style={{marginBottom:"10%"}}><Button btnText="Say Hello" btnLink="/ContactSection"/></p>
            </Zoom>
        </div>
    )
}

export default Connect
