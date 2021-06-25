import React from "react";
import "./Style2.css";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

const ContactSection = () => {
  return (
<>
    <Navbar2/>
    <div className="contactSection">
      <div className="leftContactSection">
        <h2>QUESTIONS?</h2>
        <h2>COMMENTS?</h2>
        <p className="greet">
          I'LL LOVE TO HEAR FROM YOU.
        </p>
        <span className="leftContactSection-para">
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!{" "}
        </span>
        <br />
        <br />
        <a href="https://www.instagram.com/taanyarora/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tanya-arora-450a131a9/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100011724964103"
          target="_blank"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div className="rightContactSection">
        <form>
          <label style={{ margin: "10px" }}>NAME</label>
          <input type="text" className="form-input" />
          <label style={{ margin: "10px" }}>EMAIL</label>
          <input type="email" className="form-input" />
          <label style={{ margin: "10px" }}>MESSAGE</label>
          <textarea rows="4" cols="50" className="form-input" />
          <div className="contactButtonStyle">
            <Link
              to="/"
              style={{
                fontSize: "13px",
                fontFamily: "'Roboto Mono', monospace",
                color: "#64ffda",
                textDecoration: "none",
              }}
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactSection;
