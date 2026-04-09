import React from "react";
import SkillsSection from "./SkillsSection";
import styled from "styled-components";
import { Fade} from "react-awesome-reveal";
import "../../styles/Style.css";

const Skillss = styled.div`
  .SkillsSection {
  }
  .skillsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    row-gap: 1rem;
    margin: 2rem 0rem;
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
                    <h2 className="about-me" style={{ marginBottom: "2rem" }}>
                        <span style={{ color: "var(--green)" }}>03.</span>
                        <span style={{ paddingRight: "5%" }}>My Skills</span>{" "}
                    </h2>
                    <div className="skillsContainer">
                        <SkillsSection skill={"C++"} progress={"90%"} width={"90%"} />
                        <SkillsSection skill={"Python"} progress={"85%"} width={"85%"} />
                        <SkillsSection skill={"C"} progress={"80%"} width={"80%"} />
                        <SkillsSection skill={"Prompt Engineering"} progress={"80%"} width={"80%"} />
                        <SkillsSection skill={"React.js"} progress={"80%"} width={"80%"} />
                        <SkillsSection skill={"Node.js"} progress={"80%"} width={"80%"} />
                        <SkillsSection skill={"JavaScript (ES6+)"} progress={"80%"} width={"80%"} />
                        <SkillsSection skill={"HTML5"} progress={"85%"} width={"85%"} />
                        <SkillsSection skill={"CSS3"} progress={"80%"} width={"80%"} />
                        <SkillsSection skill={"Bootstrap"} progress={"70%"} width={"70%"} />
                        <SkillsSection skill={"MySQL"} progress={"85%"} width={"85%"} />
                        <SkillsSection skill={"MongoDB"} progress={"80%"} width={"80%"} />
                    </div>
                </div>
                </Fade>
            </div>
        </Skillss>
    );
}

export default Skills;
