import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore,{ Navigation} from 'swiper';
import Projectdata from "./Projectdata"
import styled from 'styled-components';
import "./Style.css"
import Projectitem from './Projectitem';
import "swiper/swiper-bundle.min.css";
import { Fade} from "react-awesome-reveal";


SwiperCore.use([Navigation]);

const ProjectStyle=styled.div`
padding:0rem 0;
.project-items{
    display:flex;
    gap:3rem;
    margin-top:5rem;
}
.swiper-container{
    padding-top:3rem;
    max-width:100%;
}
.swiper-slide{
    // padding-right:2rem;
}
.swiper-button-prev,.swiper-button-next{
margin:0 0 0 20px;
position:absolute;
height:50px;
width:50px;
background-color:var(--green);
z-index:10;
left:auto;
top:0;
translateY:10%;
color:#173B6E;
border-radius:8px;
}
.swiper-button-prev{
    left:58.5rem;
}
.swiper-button-next{
    right: 0.5rem;
}
.swiper-button-prev:after,.swiper-button-next:after{
    position:absolute;
    font-size:2rem;
}
@media only screen and (max-width:768px){
    .project-items{
        flex-direction:column;
        max-width:400px;
        margin:0 auto;
        gap:5rem;
        margin-top:7rem;
    }
    .projectItemImg{
        width:100%;
    }
    .swiper-button-next{
        right: 0.5rem;
        height:40px;
        width:40px;
    }
    .swiper-button-prev{
        left:9.5rem;
        height:40px;
        width:40px;
    }
}

`

const Projects = () => {
    return (
        <ProjectStyle id="Section_Projects">
            <div className="project" >
                <Fade duration="7000">
                <div className="projectContainer" style={{paddingTop:'1.5rem',marginRight:"80px"}}>
                    <h2 class="about-me" style={{marginBottom:"-3rem"}}><span style={{color: "var(--green)"}}>03.</span><span style={{paddingRight:"5%"}}>Projects</span>  </h2>
                    <div className="project-items">
                        <Swiper spaceBetween={30} slidesPerView={1} navigation
                        breakpoints={{
                            640:{
                                slidesPerView:1,
                            },
                            768:{
                                slidesPerView:2,
                            },
                            1200:{
                                slidesPerView:3,
                            }
                        }
                        }> 
                        {Projectdata.map((project,index) =>{
                            return(
                                    <SwiperSlide>
                                        <Projectitem 
                                        title={project.Pname}
                                        imageSrc={project.img}
                                        desc={project.desc}
                                        />
                                    </SwiperSlide>
                            )
                        })}
                        </Swiper>
                    </div>
                </div>
                </Fade>
        </div>
        </ProjectStyle>
    )
}

export default Projects
