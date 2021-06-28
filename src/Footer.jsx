import React from 'react'
import { FiStar } from "react-icons/fi";

const Footer = () => {
    return (
        <>
        <div className="footer-icons">
            <a href="https://www.instagram.com/taanyarora/" target="_blank" style={{paddingBottom: "10%"}}><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/tanya-arora-450a131a9/" target="_blank" ><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100011724964103" target="_blank" ><i class="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" ><i class="fab fa-twitter"></i></a>
        </div>
        <div style={{textAlign:"center",paddingTop:"2%"}}>
            <p className="footer-para">Designed and Built by Tanya Arora <FiStar/></p>
        </div>
        </>
    )
}

export default Footer
