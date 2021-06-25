import React from "react";
import "./Style.css";


const Projectitem = ({ title, imageSrc, desc }) => {
  return (

    <div className="project-container">
      <div class="card">
        <div class="front front1">
          <div class="content">
            <div
              class="project-main"
              style={{
                backgroundImage: "url(" + imageSrc + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div class="front front2">
          <div class="content">
            <h3>
              <a href="/" target="_blank">
                {title}
              </a>
            </h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectitem;
