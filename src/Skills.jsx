import React from "react";
import SkillsSection from "./SkillsSection";
import styled from "styled-components";
import { Fade} from "react-awesome-reveal";
import "./Style.css";

const Skillss = styled.div`
  .SkillsSection {
  }
  .skillsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    row-gap: 1rem;
    margin: 4rem 0rem;
    @media screen and (max-width: 1100px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .skills-container {
    .skill-title {
        color:var(--bright-gray);
      margin:0;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .skill-bar {
      display: flex;
      align-items: center;
      .skill-text {
      }
      .skill-progress {
        width: 80%;
        .progress {
          width: 100%;
          height: 0.5rem;
          background-color: red;
          margin-left: 1rem;
          background-color: var(--gray);
          position: relative;
          .inner-pregress {
            position: absolute;
            background-color: var(--green);
            height: 100%;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
  }
`;

function Skills() {
    return (
        <Skillss id="Section_Skills">
            <div className="project" style={{marginBottom:"2%"}}>
                <Fade duration="7000">
                <div
                    className="projectContainer"
                    style={{ paddingTop: "1.5rem", marginRight: "80px" }}
                >
                    <h2 class="about-me" style={{ marginBottom: "2rem" }}>
                        <span style={{ color: "var(--green)" }}>03.</span>
                        <span style={{ paddingRight: "5%" }}>My Skills</span>{" "}
                    </h2>
                    <div className="skillsContainer">
                        <SkillsSection skill={"HTML"} progress={"90%"} width={"90%"} />
                        <SkillsSection skill={"CSS"} progress={"90%"} width={"90%"} />
                        <SkillsSection skill={"Javascript"} progress={"70%"} width={"70%"} />
                        <SkillsSection skill={"React Js"} progress={"80%"} width={"80%"} />
                        <SkillsSection skill={"C Language"} progress={"90%"} width={"90%"} />
                        <SkillsSection skill={"C++"} progress={"90%"} width={"90%"} />
                        <SkillsSection skill={"Web Design"} progress={"25%"} width={"25%"}/>
                        <SkillsSection skill={"UI/Ux Design"} progress={"75%"} width={"75%"} />
                    </div>
                </div>
                </Fade>
            </div>
        </Skillss>
    );
}

export default Skills;
