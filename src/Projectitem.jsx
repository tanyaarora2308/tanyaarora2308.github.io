import React from "react";
import "./Style.css";
import Button from "./Button";

const Projectitem = (props) => {
  console.log(props);
  return (
    <div className="project-container">
      <div class="card">
        <div class="front front1">
          <div class="content">
            <div
              class="project-main"
              style={{
                backgroundImage: "url(" + props.imageSrc + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div class="front front2">
          <div class="content">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <a
            href={props.Link}
            target="_blank"
            style={{
              fontSize: "11px",
              fontFamily: "'Roboto Mono', monospace",
              color: " var(--green)",
              textDecoration: "none",
            }}
          >
            <div className="Button-project">View Code</div>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectitem;
