import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";
import { FaTenge } from "react-icons/fa";
import "./Style.css";
import { Link } from "react-scroll";
import Button from "./Button";
import {Fade} from "react-awesome-reveal";

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--main);
  .NavContainer{
    padding-right:10%;
    display:flex;
    justify-content:flex-start;
  }
  .navbar li{
    list-style: none;
    display: inline-block;
    padding-left: 3%;
    color: var(--bright-gray);
    opacity:1 ;
  }
  .navlink{
    text-align: right;
    color: var(--bright-gray);
    text-decoration: none;
  }
  .navlink:hover{
      transition-duration: 0.2s;
      color: var(--green);
      cursor: pointer;
  }
  .navbar li span{
    color: var(--green);
    font-family: 'Roboto Mono', monospace;
  }
  ul {
    margin: 0 auto;
    width: 90%;
    text-align: right;
  }
    .navlink {
      text-align: right;
      display: inline-block;
      font-family: 'Roboto Mono', monospace;
      padding: 1rem 0.8rem;
      font-size: 13px;
      // color: var(--gray-1);
      outline: none;
    }
    .active {
      color: #9de0d0;
    }
  }
  .logo{
    margin: 1%;
    color:var(--green);
    font-size: 200%;
    color: var(--green);
    padding-left:3%;
    }
  .mobile-menu-icon {
    position: absolute;
    color:var(--green);
    right: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    color:var(--green);
    display: none;
  }
  .btn{
    display:inline;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .logo{	
      margin:7% 10%;	
      
    }	
    .mobile-menu-icon {
      font-size:250%;
      margin:6% -3%;	
      color:var(--green);
      display: block;
    }
    .navItems {
      --top:35%;
      transition: 0.3s ease transform;
      background-color: #ccd6f627;
      width: 50%;
      max-width: 196px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .span{
        display:none;
      }
      .blurbody{
        opacity:0;
      }
      .closeNavIcon {
        font-size:200%;
        opacity:0;
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        text-align:left;
        display: block;
        margin-bottom: 0.1rem;
      }
      .btn{
        display:none;
      }
    }
  }
`;

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <NavStyles>
        <div className="NavContainer">
          <div className="logo">
            <FaTenge />
          </div>
          <div
            className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
          >
            <MdMenu />
          </div>
          <ul className={!showNav ? "navItems hide-item" : "navItems"}>
            <div className="closeNavIcon" onClick={() => setShowNav(!showNav)}>
              <MdClose />
            </div>
            <Fade duration="5000">
              <div className="navbar">
                <li>
                  <span>01.</span>
                  <Link
                    className="navlink"
                    to="Section_Header"
                    onClick={() => setShowNav(!showNav)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span>02.</span>
                  <Link
                    className="navlink"
                    to="Section_About"
                    smooth={true}
                    duration={80}
                    exact
                    onClick={() => setShowNav(!showNav)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <span>03.</span>
                  <Link
                    className="navlink"
                    to="Section_Skills"
                    onClick={() => setShowNav(!showNav)}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <span>04.</span>
                  <Link
                    className="navlink"
                    to="Section_Projects"
                    smooth={true}
                    duration={80}
                    exact
                    onClick={() => setShowNav(!showNav)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <span>05.</span>
                  <Link
                    className="navlink"
                    to="Section_Contact"
                    exact
                    onClick={() => setShowNav(!showNav)}
                  >
                    Contact
                  </Link>
                </li>
                <p className="btn">
                  <Button btnText="Resume" btnLink="Section_projects" />
                </p>
              </div>
            </Fade>
          </ul>
        </div>
      </NavStyles>
    </>
  );
};

export default Navbar;
