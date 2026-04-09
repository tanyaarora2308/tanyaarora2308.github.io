import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Projectdata from './Projectdata';
import styled from 'styled-components';
import '../../styles/Style.css';
import Projectitem from './Projectitem';
import 'swiper/swiper-bundle.min.css';
import { Fade } from 'react-awesome-reveal';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

SwiperCore.use([Navigation]);

const ProjectStyle = styled.div`
  padding: 0;
  width: 100%;

  /* margin overrides per breakpoint — everything else is in Style.css */
  .projectContainer {
    padding-top: 1.5rem;
    margin-left: 15%;
    margin-right: 5%;
  }

  .projectsHeaderRow {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .projectsNav {
    display: flex;
    gap: 0.65rem;
    align-items: center;
  }

  .navBtn {
    height: 44px;
    width: 44px;
    border-radius: 999px;
    border: 1px solid rgba(100, 255, 218, 0.35);
    background: rgba(10, 25, 47, 0.55);
    color: rgba(100, 255, 218, 0.95);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 160ms ease, background 160ms ease, border-color 160ms ease,
      opacity 160ms ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .navBtn:hover {
    transform: translateY(-1px);
    background: rgba(10, 25, 47, 0.8);
    border-color: rgba(100, 255, 218, 0.55);
  }

  .navBtn:active {
    transform: translateY(0px);
  }

  /* Swiper toggles this class when navigation is not available */
  .navBtn.swiper-button-disabled,
  .navBtn[disabled] {
    opacity: 0.35;
    pointer-events: none;
  }

  /* remove default Swiper arrow UI */
  .swiper-button-prev,
  .swiper-button-next {
    display: none !important;
  }

  .project-items {
    margin-top: 0.5rem;
  }

  .swiper-container,
  .swiper {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .swiper-slide {
    height: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .projectContainer {
      margin-left: 10%;
      margin-right: 4%;
    }
  }

  @media only screen and (max-width: 768px) {
    .projectContainer {
      margin-left: 6%;
      margin-right: 6%;
    }

    .projectsHeaderRow {
      align-items: center;
    }
  }

  @media only screen and (max-width: 480px) {
    .projectContainer {
      margin-left: 4%;
      margin-right: 4%;
    }

    .navBtn {
      height: 40px;
      width: 40px;
    }
  }
`;

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <ProjectStyle id="Section_Projects">
      <div className="project">
        <Fade duration={7000}>
          <div className="projectContainer">
            <div className="projectsHeaderRow">
              <h2 className="about-me" style={{ margin: 0 }}>
                <span style={{ color: 'var(--green)' }}>04.</span>
                <span style={{ paddingRight: '5%' }}>Projects</span>
              </h2>

              <div className="projectsNav" aria-label="Projects navigation">
                <button
                  type="button"
                  className="navBtn projects-swiper-prev"
                  aria-label="Previous projects"
                  ref={prevRef}
                >
                  <FiArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  className="navBtn projects-swiper-next"
                  aria-label="Next projects"
                  ref={nextRef}
                >
                  <FiArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="project-items">
              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                  // Swiper needs actual elements at init time; refs are the most reliable.
                  // eslint-disable-next-line no-param-reassign
                  swiper.params.navigation.prevEl = prevRef.current;
                  // eslint-disable-next-line no-param-reassign
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                breakpoints={{
                  // phone — 1 card, swipe to navigate
                  480: { slidesPerView: 1, spaceBetween: 16 },
                  // tablet — 2 cards
                  769: { slidesPerView: 2, spaceBetween: 20 },
                  // desktop — 3 cards for a clean grid feel with 3 items
                  1200: { slidesPerView: 3, spaceBetween: 24 },
                }}
              >
                {Projectdata.map((project) => (
                  <SwiperSlide key={project.id}>
                    <Projectitem project={project} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Fade>
      </div>
    </ProjectStyle>
  );
};

export default Projects;
