import React, { useState } from "react";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";
import { FaTenge } from "react-icons/fa";
import "../../styles/Style.css";
import { Link } from "react-scroll";
import {Fade} from "react-awesome-reveal";

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--main);
  .overlay {
    display: none;
  }
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

    .logo{	
      margin:7% 10%;	
      
    }	
    .mobile-menu-icon {
      z-index:100;
      font-size: 22px;
      margin: 4.5% 1%;
      color:var(--green);
      display: block;
      width: 38px;
      height: 38px;
      border-radius: 999px;
      background: rgba(10, 25, 47, 0.55);
      border: 1px solid rgba(100, 255, 218, 0.35);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .mobile-menu-icon:hover {
      transform: translateY(-1px);
      background: rgba(10, 25, 47, 0.78);
      border-color: rgba(100, 255, 218, 0.55);
    }

    .overlay {
      display: block;
      position: fixed;
      inset: 0;
      background: rgba(2, 12, 27, 0.62);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 180ms ease;
    }

    .overlay.isOpen {
      opacity: 1;
      pointer-events: auto;
    }
    .navItems {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: min(68vw, 280px);
      margin: 0;
      padding: 1rem 0.75rem 1.25rem;
      background: #112240;
      border-left: 1px solid rgba(100, 255, 218, 0.18);
      box-shadow: -18px 0 42px rgba(0, 0, 0, 0.45);
      transform: translateX(110%);
      transition: 220ms ease transform;
      border-radius: 0;
      text-align: left;
      .span{
        display:none;
      }
      .blurbody{
        opacity:0;
      }
      .closeNavIcon {
        font-size: 30px;
        opacity: 1;
        display: block;
        width: 44px;
        height: 44px;
        border-radius: 999px;
        border: 1px solid rgba(100, 255, 218, 0.35);
        background: rgba(10, 25, 47, 0.55);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0.75rem auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0;
        margin-bottom: 0.25rem;
      }
      .btn{
        display:none;
      }
    }

    .navItems.isOpen {
      transform: translateX(0%);
    }

    .navlink {
      flex: 1;
      display: block;
      width: 100%;
      padding: 0.85rem 0.6rem;
      border-radius: 10px;
      text-align: center;
    }

    .navlink:hover {
      background: rgba(100, 255, 218, 0.08);
    }
  }
`;

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <NavStyles>
        <div
          className={showNav ? "overlay isOpen" : "overlay"}
          onClick={() => setShowNav(false)}
        />
        <div className="NavContainer">
          <div className="logo">
            <FaTenge />
          </div>
          <div
            className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            aria-label={showNav ? "Close menu" : "Open menu"}
          >
            <MdMenu />
          </div>
          <ul className={showNav ? "navItems isOpen" : "navItems"} aria-hidden={!showNav}>
            <div className="closeNavIcon" onClick={() => setShowNav(!showNav)}>
              <MdClose />
            </div>
            <Fade duration="5000">
              <div className="navbar">
                <li>
                  <Link
                    className="navlink"
                    to="Section_Header"
                    onClick={() => setShowNav(!showNav)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="navlink"
                    to="Section_About"
                    smooth={true}
                    duration={80}
                    offset={-80}
                    exact
                    onClick={() => setShowNav(!showNav)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="navlink"
                    to="Section_Skills"
                    smooth={true}
                    duration={80}
                    offset={-80}
                    onClick={() => setShowNav(!showNav)}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="navlink"
                    to="Section_Work"
                    smooth={true}
                    duration={80}
                    offset={-80}
                    exact
                    onClick={() => setShowNav(!showNav)}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    className="navlink"
                    to="Section_Projects"
                    smooth={true}
                    duration={80}
                    offset={-80}
                    exact
                    onClick={() => setShowNav(!showNav)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="navlink"
                    to="Section_Contact"
                    smooth={true}
                    duration={80}
                    offset={-80}
                    exact
                    onClick={() => setShowNav(!showNav)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    className="navlink"
                    href="https://bit.ly/4cdodwK"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowNav(false)}
                  >
                    Resume
                  </a>
                </li>
                <p className="btn">
                  <a href="https://bit.ly/4cdodwK" target="_blank" rel="noopener noreferrer" style={{fontSize: "13px", fontFamily: "'Roboto Mono', monospace", color: " var(--green)", textDecoration: "none"}} className="ButtonStyle">Resume</a>
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
