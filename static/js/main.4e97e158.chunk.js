(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{17:function(e,t,a){},53:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(27),r=a.n(s),o=(a(53),a(10)),c=a(8),l=a(15),d=a(21),g=a(29),b=(a(17),a(20)),j=a(9),m=a(1);const A=l.a.nav`
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
`;var p=()=>{const[e,t]=Object(n.useState)(!1);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(A,{children:[Object(m.jsx)("div",{className:e?"overlay isOpen":"overlay",onClick:()=>t(!1)}),Object(m.jsxs)("div",{className:"NavContainer",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(g.a,{})}),Object(m.jsx)("div",{className:"mobile-menu-icon",onClick:()=>t(!e),role:"button","aria-label":e?"Close menu":"Open menu",children:Object(m.jsx)(d.b,{})}),Object(m.jsxs)("ul",{className:e?"navItems isOpen":"navItems","aria-hidden":!e,children:[Object(m.jsx)("div",{className:"closeNavIcon",onClick:()=>t(!e),children:Object(m.jsx)(d.a,{})}),Object(m.jsx)(j.a,{duration:"5000",children:Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"span",children:"01."}),Object(m.jsx)(b.Link,{className:"navlink",to:"Section_Header",onClick:()=>t(!e),children:"Home"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"span",children:"02."}),Object(m.jsx)(b.Link,{className:"navlink",to:"Section_About",smooth:!0,duration:80,offset:-80,exact:!0,onClick:()=>t(!e),children:"About"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"span",children:"03."}),Object(m.jsx)(b.Link,{className:"navlink",to:"Section_Skills",smooth:!0,duration:80,offset:-80,onClick:()=>t(!e),children:"Skills"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"span",children:"04."}),Object(m.jsx)(b.Link,{className:"navlink",to:"Section_Work",smooth:!0,duration:80,offset:-80,exact:!0,onClick:()=>t(!e),children:"Work"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"span",children:"05."}),Object(m.jsx)(b.Link,{className:"navlink",to:"Section_Projects",smooth:!0,duration:80,offset:-80,exact:!0,onClick:()=>t(!e),children:"Projects"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"span",children:"06."}),Object(m.jsx)(b.Link,{className:"navlink",to:"Section_Contact",smooth:!0,duration:80,offset:-80,exact:!0,onClick:()=>t(!e),children:"Contact"})]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"navlink",href:"https://bit.ly/4cdodwK",target:"_blank",rel:"noopener noreferrer",onClick:()=>t(!1),children:"Resume"})}),Object(m.jsx)("p",{className:"btn",children:Object(m.jsx)("a",{href:"https://bit.ly/4cdodwK",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"13px",fontFamily:"'Roboto Mono', monospace",color:" var(--green)",textDecoration:"none"},className:"ButtonStyle",children:"Resume"})})]})})]})]})]})})};var x=e=>{let{btnLink:t="test",btnText:a="test"}=e;return Object(m.jsx)(o.b,{to:t,style:{fontSize:"13px",fontFamily:"'Roboto Mono', monospace",color:" var(--green)",textDecoration:"none"},children:Object(m.jsx)("div",{className:"ButtonStyle",children:a})})};var h=()=>Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"home-container",id:"Section_Header",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"https://www.instagram.com/taanyarora/",target:"_blank",style:{paddingBottom:"10%"},children:Object(m.jsx)("i",{class:"fab fa-instagram"})}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/tanya-arora-450a131a9/",target:"_blank",children:Object(m.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100011724964103",target:"_blank",children:Object(m.jsx)("i",{class:"fab fa-facebook-f"})}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"#",target:"_blank",children:Object(m.jsx)("i",{class:"fab fa-twitter"})}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{style:{border:"1px solid #8892b0",display:"inline-block",size:"100",height:"100vh"}})]}),Object(m.jsx)("div",{className:"header",children:Object(m.jsx)(j.b,{duration:"2000",triggerOnce:!0,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{style:{fontFamily:"'Roboto Mono', monospace",fontSize:"16px",color:"var(--green)",letterSpacing:"0.09vw",marginTop:"100px"},children:"Hi, my name is"}),Object(m.jsx)("section",{className:"name",children:"Tanya Arora."}),Object(m.jsx)("span",{className:"info1",children:"I build reliable systems at scale."}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"info2",children:"I\u2019m a Software Engineer building fast, efficient systems. I like simplifying complexity and making things work seamlessly."}),Object(m.jsx)("p",{className:"home-btn",children:Object(m.jsx)("a",{href:"https://mail.google.com/mail/?view=cm&to=tanya.arora.connect@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"16px",padding:"0.85rem 3rem",fontFamily:"'Roboto Mono', monospace",color:" var(--green)",textDecoration:"none"},className:"ButtonStyle",children:"Get In Touch"})})]})})}),Object(m.jsx)("div",{className:"right",children:"tanya.arora2308@gmail.com"})]})}),u=a.p+"static/media/tanya-profile.75a03384.jpg";var f=()=>Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{duration:"3000",children:Object(m.jsxs)("div",{className:"about-container",id:"Section_About",children:[Object(m.jsxs)("div",{className:"about",children:[Object(m.jsxs)("h2",{className:"about-me",children:[Object(m.jsx)("span",{style:{color:"var(--green)"},children:"02."}),Object(m.jsx)("span",{style:{paddingRight:"5%"},children:"About Me"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{className:"about-para",children:["I\u2019m Tanya, a Software Engineer focused on building scalable systems and high-performance applications.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"I specialize in backend and full-stack development, with a strong emphasis on optimization, system design, and solving complex data-driven problems. I enjoy pushing systems to be faster, cleaner, and more reliable, often leveraging AI to accelerate development and improve outcomes."]})]}),Object(m.jsx)("div",{className:"myImg",style:{backgroundImage:`url(${u})`}})]})})});var B=function(e){let{skill:t,progress:a,width:n}=e;return Object(m.jsx)("div",{className:"SkillsSection",children:Object(m.jsxs)("div",{className:"skills-container",children:[Object(m.jsx)("h5",{className:"skill-title",children:t}),Object(m.jsxs)("div",{className:"skill-bar",children:[Object(m.jsx)("p",{className:"skill-text",children:a}),Object(m.jsx)("div",{className:"skill-progress",children:Object(m.jsx)("div",{className:"progress",children:Object(m.jsx)("div",{className:"inner-pregress",style:{width:n}})})})]})]})})};const O=l.a.div`
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
`;var v=function(){return Object(m.jsx)(O,{id:"Section_Skills",children:Object(m.jsx)("div",{className:"project",style:{marginBottom:"2%"},children:Object(m.jsx)(j.a,{duration:"7000",children:Object(m.jsxs)("div",{className:"projectContainer",style:{paddingTop:"1.5rem",marginRight:"80px"},children:[Object(m.jsxs)("h2",{className:"about-me",style:{marginBottom:"2rem"},children:[Object(m.jsx)("span",{style:{color:"var(--green)"},children:"03."}),Object(m.jsx)("span",{style:{paddingRight:"5%"},children:"My Skills"})," "]}),Object(m.jsxs)("div",{className:"skillsContainer",children:[Object(m.jsx)(B,{skill:"C++",progress:"90%",width:"90%"}),Object(m.jsx)(B,{skill:"Python",progress:"85%",width:"85%"}),Object(m.jsx)(B,{skill:"C",progress:"80%",width:"80%"}),Object(m.jsx)(B,{skill:"Prompt Engineering",progress:"80%",width:"80%"}),Object(m.jsx)(B,{skill:"React.js",progress:"80%",width:"80%"}),Object(m.jsx)(B,{skill:"Node.js",progress:"80%",width:"80%"}),Object(m.jsx)(B,{skill:"JavaScript (ES6+)",progress:"80%",width:"80%"}),Object(m.jsx)(B,{skill:"HTML5",progress:"85%",width:"85%"}),Object(m.jsx)(B,{skill:"CSS3",progress:"80%",width:"80%"}),Object(m.jsx)(B,{skill:"Bootstrap",progress:"70%",width:"70%"}),Object(m.jsx)(B,{skill:"MySQL",progress:"85%",width:"85%"}),Object(m.jsx)(B,{skill:"MongoDB",progress:"80%",width:"80%"})]})]})})})})},y=a(75),I=a(73),Q=a(74),C=a(72),k=a.p+"static/media/lightsoutB.8b44bbc0.png",E=a.p+"static/media/HangmanB.cf68b068.png",w=a.p+"static/media/coachify.72df0e71.png",N=a.p+"static/media/restaurantB.91d316eb.png";var z=[{id:"1",Pname:"Coachify",desc:"A full-stack educational platform (React, Node, MongoDB) built to streamline assignments and enable real-time teacher\u2013student communication.",img:w,codeLink:"https://github.com/tanyaarora2308/EducationWebsite"},{id:"2",Pname:"Hangman Game",desc:"A polished Hangman experience with a clean UI, state-driven gameplay, and fast feedback as you guess the word.",img:E,codeLink:"https://github.com/tanyaarora2308/Hangman-Game"},{id:"3",Pname:"Blockchain X",desc:"A blockchain prototype built for HackCelestia using a smart-contract backend and a separate client dApp.",img:a.p+"static/media/blockchain.1907c6f4.png",codeLink:"https://github.com/tanyaarora2308/Blockchain-HackCelestia/tree/master"},{id:"4",Pname:"Lights Out Puzzle",desc:"A classic Lights Out puzzle with a 5\xd75 grid, randomized starts, and a satisfying win condition when all lights go off.",img:k,codeLink:"https://github.com/tanyaarora2308/Lights-Out-Game"},{id:"5",Pname:"Restaurant Website",desc:"A restaurant website built with front-end technologies including HTML, CSS, and JavaScript.",img:N,codeLink:"https://github.com/tanyaarora2308/Restaurant-Website"}];const H=l.a.article`
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
`;var S=e=>{let{project:t}=e;const{Pname:a,desc:n,img:i,codeLink:s}=t;return Object(m.jsxs)(H,{children:[Object(m.jsx)("div",{className:"media",children:Object(m.jsx)("img",{src:i,alt:a,loading:"lazy"})}),Object(m.jsxs)("div",{className:"body",children:[Object(m.jsx)("h3",{children:a}),Object(m.jsx)("p",{children:n}),Object(m.jsx)("div",{className:"actions",children:Object(m.jsx)("a",{className:"btn",href:s,target:"_blank",rel:"noopener noreferrer",children:"View Code"})})]})]})},R=(a(68),a(24));Q.a.use([C.a]);const D=l.a.div`
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
`;var q=()=>{const e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(m.jsx)(D,{id:"Section_Projects",children:Object(m.jsx)("div",{className:"project",children:Object(m.jsx)(j.a,{duration:7e3,children:Object(m.jsxs)("div",{className:"projectContainer",children:[Object(m.jsxs)("div",{className:"projectsHeaderRow",children:[Object(m.jsxs)("h2",{className:"about-me",style:{margin:0},children:[Object(m.jsx)("span",{style:{color:"var(--green)"},children:"04."}),Object(m.jsx)("span",{style:{paddingRight:"5%"},children:"Projects"})]}),Object(m.jsxs)("div",{className:"projectsNav","aria-label":"Projects navigation",children:[Object(m.jsx)("button",{type:"button",className:"navBtn projects-swiper-prev","aria-label":"Previous projects",ref:e,children:Object(m.jsx)(R.a,{size:18})}),Object(m.jsx)("button",{type:"button",className:"navBtn projects-swiper-next","aria-label":"Next projects",ref:t,children:Object(m.jsx)(R.b,{size:18})})]})]}),Object(m.jsx)("div",{className:"project-items",children:Object(m.jsx)(y.a,{spaceBetween:24,slidesPerView:1,onBeforeInit:a=>{a.params.navigation.prevEl=e.current,a.params.navigation.nextEl=t.current},navigation:{prevEl:e.current,nextEl:t.current},breakpoints:{480:{slidesPerView:1,spaceBetween:16},769:{slidesPerView:2,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:24}},children:z.map((e=>Object(m.jsx)(I.a,{children:Object(m.jsx)(S,{project:e})},e.id)))})})]})})})})},M=a.p+"static/media/barclays.00560cf8.jpg";var P=()=>Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{duration:"3000",children:Object(m.jsx)("div",{className:"work-container",id:"Section_Work",children:Object(m.jsxs)("div",{className:"work",children:[Object(m.jsxs)("h2",{class:"about-me",children:[Object(m.jsx)("span",{style:{color:"var(--green)"},children:"04."}),Object(m.jsx)("span",{style:{paddingRight:"5%"},children:"Work Experience"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{marginBottom:"2rem",display:"flex",alignItems:"flex-start",gap:"1.5rem"},children:[Object(m.jsx)("div",{className:"work-logo",style:{minWidth:"70px",height:"70px",backgroundColor:"#f5f5f5",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,padding:"0.5rem"},children:Object(m.jsx)("img",{src:"data:image/jpeg;base64,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G5ZhkFI/4lHUXx8ZipXj2eyJjQ3vHyc7u17jR8oOjzz0kOGM15Eqcqpq3IsZbVVBqprXZ6qJlOJCe4mPujc6ME+dA6Hy0NBBtTNugXhTPuObLhlyxaRlvsvxXW+tp62VtbDJKQZZDMXEvc8taT39wJA8eAg/Hbuja5W+xtx4c78oyYy2P4It5uVMJfha12fafs/xQNePDh4Qbb4g4VwzgfEIsawexwWS1tcZJAwl8s8h95JZHEue4693E/QaA0g67nLp3wDqNxdtiz2wQ3imiJfTVAcYqmlefd0UrdOb7DY9jobBQRJpfRc4YgvIqZcjzCooA7u+wuq6doI/ql4hDtflooJmcTcOYbwbiFPjGEWKmsNnhPcYoAS+V/zfI9xLnuOh95xJ8D5BBmaAgIMO5M4yo+UrO21196v1poiHtlbYrnJQuna7W2vfHp2vHyI9ygx3hXpg4w6eoJm4HiVHZamdvbPXuL56uYb3p00hc8jfnt3r8EG00BAQEBAQEBAQEBAQEBAQEHU5bjlPmOK3mw1j3x0l1opqGZ0R04MljLHEH66cUFQeI9LXVp0H8l3O68X2iPM7LVahlfQhlRT3CFpJYJqYvbKx42fLfbZAcQTsJF2Lqt60smibSUnTbQUlc7x9quL5KWFp+pEszfH/AKkGbYt0ncr885Hasi6msuoLlZ7bO2souPMcZ2WwTD9V1S73l7f6pLv97RIITQa0MaGtADQNAD2CD6gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//9k=",alt:"JP Morgan Chase",style:{maxWidth:"100%",maxHeight:"100%"}})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{style:{color:"var(--bright-gray)",fontFamily:"'Roboto Mono', monospace",fontSize:"1.3rem",marginBottom:"0.5rem",marginTop:"0"},children:"CAST (RWA & Regulatory Capital Engine)"}),Object(m.jsx)("p",{className:"about-para",children:"Worked on CAST, a centralized platform used to compute RWA (Risk-Weighted Assets), essentially the capital a bank needs to hold based on its risk exposure. Contributed to building data enrichment and cross-product netting pipelines that aggregate exposures across systems into reliable, audit-ready outputs for regulatory reporting."}),Object(m.jsx)("p",{className:"about-para",children:"Improved quarter-end (QE) processing time and stability by optimizing heavy SQL queries, fixing reconciliation issues, and streamlining data pipelines, bringing runtime down by ~65% (6h \u2192 2h) and significantly reducing manual effort involved in reporting."}),Object(m.jsx)("h4",{style:{color:"var(--bright-gray)",fontFamily:"'Roboto Mono', monospace",fontSize:"1.1rem",marginBottom:"0.5rem",marginTop:"1.5rem"},children:"Market Risk Engine (HVaR)"}),Object(m.jsx)("p",{className:"about-para",children:"Contributed to Historical Value at Risk (HVaR) calculations - a way to estimate how much a portfolio could lose by applying past market movements to current positions, by supporting large-scale processing of multi-asset portfolios used for daily risk monitoring and reporting."})]})]}),Object(m.jsxs)("div",{style:{marginBottom:"2rem",display:"flex",alignItems:"flex-start",gap:"1.5rem"},children:[Object(m.jsx)("div",{className:"work-logo",style:{minWidth:"70px",height:"70px",backgroundColor:"#f5f5f5",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,padding:"0.5rem"},children:Object(m.jsx)("img",{src:M,alt:"Barclays",style:{maxWidth:"100%",maxHeight:"100%"}})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{style:{color:"var(--bright-gray)",fontFamily:"'Roboto Mono', monospace",fontSize:"1.3rem",marginBottom:"0.5rem",marginTop:"0"},children:"Micro-Frontends Integration"}),Object(m.jsx)("p",{className:"about-para",children:"Built a prototype application to demonstrate integration of micro-frontends using React and Angular into a unified UI with single-spa, and implemented server-side rendering (SSR) to evaluate performance and feasibility."})]})]})]})})})});var L=()=>Object(m.jsx)("div",{style:{textAlign:"center"},id:"Section_Contact",children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)("span",{style:{display:"block",textAlign:"center",color:"var(--green)",fontFamily:"'Roboto Mono', monospace",fontSize:"1rem"},children:"05. What's Next?"}),Object(m.jsx)("h2",{style:{fontFamily:"'Roboto Mono', monospace",color:"var(--bright-gray)",fontSize:"2rem",fontWeight:"900",marginTop:"10px"},children:Object(m.jsx)("strong",{children:"Get In Touch"})}),Object(m.jsx)("p",{className:"connect-para",children:"Feel free to get in touch with me. I am always open to discussing new projects ,creative ideas or opportunities to be a part of your vision. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! "}),Object(m.jsx)("p",{className:"home-btn",style:{marginBottom:"10%"},children:Object(m.jsx)("a",{href:"mailto:tanya.arora.connect@gmail.com",style:{fontSize:"13px",fontFamily:"'Roboto Mono', monospace",color:" var(--green)",textDecoration:"none"},className:"ButtonStyle",children:"Say Hello"})})]})});var T=()=>Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"footer-icons",children:[Object(m.jsx)("a",{href:"https://www.instagram.com/taanyarora/",target:"_blank",style:{paddingBottom:"10%"},children:Object(m.jsx)("i",{class:"fab fa-instagram"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/tanya-arora-450a131a9/",target:"_blank",children:Object(m.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(m.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100011724964103",target:"_blank",children:Object(m.jsx)("i",{class:"fab fa-facebook-f"})}),Object(m.jsx)("a",{href:"#",target:"_blank",children:Object(m.jsx)("i",{class:"fab fa-twitter"})})]}),Object(m.jsx)("div",{style:{textAlign:"center",paddingTop:"2%"},children:Object(m.jsxs)("p",{className:"footer-para",children:["Designed and Built by Tanya Arora ",Object(m.jsx)(R.c,{})]})})]});var X=()=>Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)(h,{}),Object(m.jsx)(f,{}),Object(m.jsx)(v,{}),Object(m.jsx)(P,{}),Object(m.jsx)(q,{}),Object(m.jsx)(L,{}),Object(m.jsx)(T,{})]});a(69);const G=l.a.nav`
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
`;var W=()=>{const[e,t]=Object(n.useState)(!1);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(G,{children:Object(m.jsxs)("div",{className:"NavContainer",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(g.a,{})}),Object(m.jsx)("div",{className:"mobile-menu-icon",onClick:()=>t(!e),children:Object(m.jsx)(d.b,{})}),Object(m.jsxs)("ul",{className:e?"navItems":"navItems hide-item",children:[Object(m.jsx)("div",{className:"closeNavIcon",onClick:()=>t(!e),children:Object(m.jsx)(d.a,{})}),Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"01."}),Object(m.jsx)(o.c,{className:"navlink",to:"/",onClick:()=>t(!e),children:"Home"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"02."}),Object(m.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:()=>t(!e),children:"About"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"03."}),Object(m.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:()=>t(!e),children:"Skills"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"04."}),Object(m.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:()=>t(!e),children:"Work"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"05."}),Object(m.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:()=>t(!e),children:"Projects"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"06."}),Object(m.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:()=>t(!e),children:"Contact"})]}),Object(m.jsx)("p",{className:"btn",children:Object(m.jsx)(x,{btnText:"Resume",btnLink:"/"})})]})]})]})})})};var F=()=>Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(W,{}),Object(m.jsx)("div",{className:"contactSection",children:Object(m.jsx)("div",{className:"rightContactSection",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{style:{margin:"10px"},children:"NAME"}),Object(m.jsx)("input",{type:"text",className:"form-input"}),Object(m.jsx)("label",{style:{margin:"10px"},children:"EMAIL"}),Object(m.jsx)("input",{type:"email",className:"form-input"}),Object(m.jsx)("label",{style:{margin:"10px"},children:"MESSAGE"}),Object(m.jsx)("textarea",{rows:"4",cols:"50",className:"form-input"}),Object(m.jsx)("div",{className:"contactButtonStyle",children:Object(m.jsx)(o.b,{to:"/",style:{fontSize:"13px",fontFamily:"'Roboto Mono', monospace",color:"#64ffda",textDecoration:"none"},children:"Submit"})})]})})})]});const U=()=>(Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[]),null);function J(){return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(U,{}),Object(m.jsxs)(c.c,{children:[Object(m.jsx)(c.a,{exact:!0,path:"/",children:Object(m.jsx)(X,{})}),Object(m.jsx)(c.a,{exact:!0,path:"/About",children:Object(m.jsx)(f,{})}),Object(m.jsx)(c.a,{exact:!0,path:"/Projects",children:Object(m.jsx)(q,{})}),Object(m.jsx)(c.a,{exact:!0,path:"/ContactSection",children:Object(m.jsx)(F,{})})]})]})})}var V=a(48),Z=a.n(V);var K=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:s,getTTFB:r}=t;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(m.jsxs)(i.a.StrictMode,{children:[Object(m.jsx)(Z.a,{url:"https://i.postimg.cc/fb7Rbkth/glowing-neon-letter-on-dark-260nw-70498114-removebg-preview.png"}),Object(m.jsx)(J,{})]}),document.getElementById("root")),K()}},[[70,1,2]]]);
//# sourceMappingURL=main.4e97e158.chunk.js.map