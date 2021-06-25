import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Button = ({ btnLink = "test", btnText = "test" }) => {
  const linkStyle = {
    fontSize: "13px",
    fontFamily: "'Roboto Mono', monospace",
    color: " var(--green)",
    textDecoration: "none",
  };

  return (
    <Link to={btnLink} style={linkStyle}>
      <div className="ButtonStyle">{btnText}</div>
    </Link>
  );
};

export default Button;
