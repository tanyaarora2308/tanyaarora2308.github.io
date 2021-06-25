import React from 'react'
import "./Style.css";
import Button from "./Button";
import {JackInTheBox} from "react-awesome-reveal";

const Header = () => {
    return (
        <>
            <div className="home-container" id="Section_Header">
                <div className="left">
                        <a href="https://www.instagram.com/taanyarora/" target="_blank" style={{paddingBottom: "10%"}}><i class="fab fa-instagram"></i></a><br/>
                        <a href="https://www.linkedin.com/in/tanya-arora-450a131a9/" target="_blank" ><i class="fab fa-linkedin-in"></i></a><br/>
                        <a href="https://www.facebook.com/profile.php?id=100011724964103" target="_blank" ><i class="fab fa-facebook-f"></i></a><br/>
                        <a href="#" target="_blank" ><i class="fab fa-twitter"></i></a><br/>
                        <hr style={
                            { border:"1px solid #8892b0",display: "inline-block", size:"100",height:"100vh"}}/>
                </div>
                
                    <div className="header">
                    <JackInTheBox duration="2000" triggerOnce>
                            <>
                            <section style={{fontFamily: "'Roboto Mono', monospace", fontSize: "16px",color: "var(--green)", letterSpacing: "0.09vw",marginTop:"100px"}}>Hi, my name is</section>
                            <section className="name">Tanya Arora.</section>
                            <span className="info1">I build user interfaces.</span><br/><br/>
                            <div className="info2">I'm a web developer based in Haryana,specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</div>
                            <p className="home-btn"><Button btnText="Get In Touch" btnLink="/ContactSection"/></p>
                            </>
                    </JackInTheBox>
                    </div>
                
                <div className="right">tanya.arora2308@gmail.com</div>
            </div>
        </>
    )
}

export default Header
