// import React from "react";
// import "../../styles/Style.css";
// import Button from "../../components/Button/Button";

// const Projectitem = (props) => {
//   console.log(props);
//   return (
//     <div className="project-container">
//       <div className="card">
//         <div className="front front1">
//           <div className="content">
//             <div
//               className="project-main"
//               style={{
//                 backgroundImage: "url(" + props.imageSrc + ")",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="front front2">
//           <div className="content">
//             <h3>{props.title}</h3>
//             <p>{props.desc}</p>
//             <a
//             href={props.Link}
//             target="_blank"
//             style={{
//               fontSize: "11px",
//               fontFamily: "'Roboto Mono', monospace",
//               color: " var(--green)",
//               textDecoration: "none",
//             }}
//           >
//             <div className="Button-project">View Code</div>
//           </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projectitem;


import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.22);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(13, 33, 55, 0.65));
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.32);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(100, 255, 218, 0.42);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.38);
  }

  .media {
    position: relative;
    aspect-ratio: 16 / 9;
    background: #0b1c2f;
  }

  .media img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: saturate(1.04) contrast(1.02);
    transform: scale(1.01);
  }

  .media::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(10, 25, 47, 0.05) 0%,
      rgba(10, 25, 47, 0.25) 55%,
      rgba(10, 25, 47, 0.75) 100%
    );
    pointer-events: none;
  }

  .body {
    padding: 1.1rem 1.1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    min-height: 190px;
  }

  h3 {
    margin: 0;
    font-size: 1.06rem;
    line-height: 1.25;
    color: #e6f1ff;
    letter-spacing: 0.2px;
  }

  p {
    margin: 0;
    color: var(--gray);
    line-height: 1.65;
    font-size: 0.93rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.1rem;
  }

  .tag {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.72rem;
    padding: 0.22rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(100, 255, 218, 0.22);
    color: rgba(100, 255, 218, 0.9);
    background: rgba(100, 255, 218, 0.06);
  }

  .actions {
    margin-top: auto;
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.45rem 0.85rem;
    border-radius: 10px;
    border: 1px solid rgba(100, 255, 218, 0.35);
    color: var(--green);
    text-decoration: none;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.78rem;
    background: rgba(100, 255, 218, 0.08);
    transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
  }

  .btn:hover {
    background: rgba(100, 255, 218, 0.13);
    border-color: rgba(100, 255, 218, 0.55);
    transform: translateY(-1px);
  }
`;

const Projectitem = ({ project }) => {
  const { Pname, desc, img, codeLink } = project;

  return (
    <Card>
      <div className="media">
        <img src={img} alt={Pname} loading="lazy" />
      </div>
      <div className="body">
        <h3>{Pname}</h3>
        <p>{desc}</p>
        <div className="actions">
          <a className="btn" href={codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Projectitem;
