(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{16:function(n,e,t){},55:function(n,e,t){},71:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var i,s=t(2),a=t.n(s),c=t(27),r=t.n(c),o=(t(55),t(9)),l=t(8),j=t(30),d=t(17),b=t(18),h=t(21),x=t(29),m=(t(16),t(22)),p=t(1),g=function(n){var e=n.btnLink,t=void 0===e?"test":e,i=n.btnText,s=void 0===i?"test":i;return Object(p.jsx)(o.b,{to:t,style:{fontSize:"13px",fontFamily:"'Roboto Mono', monospace",color:" var(--green)",textDecoration:"none"},children:Object(p.jsx)("div",{className:"ButtonStyle",children:s})})},O=t(12),u=b.a.nav(i||(i=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--main);\n  .NavContainer{\n    padding-right:10%;\n    display:flex;\n    justify-content:flex-start;\n  }\n  .navbar li{\n    list-style: none;\n    display: inline-block;\n    padding-left: 3%;\n    color: var(--bright-gray);\n    opacity:1 ;\n  }\n  .navlink{\n    text-align: right;\n    color: var(--bright-gray);\n    text-decoration: none;\n  }\n  .navlink:hover{\n      transition-duration: 0.2s;\n      color: var(--green);\n      cursor: pointer;\n  }\n  .navbar li span{\n    color: var(--green);\n    font-family: 'Roboto Mono', monospace;\n  }\n  ul {\n    margin: 0 auto;\n    width: 90%;\n    text-align: right;\n  }\n    .navlink {\n      text-align: right;\n      display: inline-block;\n      font-family: 'Roboto Mono', monospace;\n      padding: 1rem 0.8rem;\n      font-size: 13px;\n      // color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: #9de0d0;\n    }\n  }\n  .logo{\n    margin: 1%;\n    color:var(--green);\n    font-size: 200%;\n    color: var(--green);\n    padding-left:3%;\n    }\n  .mobile-menu-icon {\n    position: absolute;\n    color:var(--green);\n    right: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    color:var(--green);\n    display: none;\n  }\n  .btn{\n    display:inline;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .logo{\t\n      margin:7% 10%;\t\n      \n    }\t\n    .mobile-menu-icon {\n      font-size:250%;\n      margin:6% -3%;\t\n      color:var(--green);\n      display: block;\n    }\n    .navItems {\n      --top:35%;\n      transition: 0.3s ease transform;\n      background-color: #ccd6f627;\n      width: 50%;\n      max-width: 196px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .span{\n        display:none;\n      }\n      .blurbody{\n        opacity:0;\n      }\n      .closeNavIcon {\n        font-size:200%;\n        opacity:0;\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        text-align:left;\n        display: block;\n        margin-bottom: 0.1rem;\n      }\n      .btn{\n        display:none;\n      }\n    }\n  }\n"]))),v=function(){var n=Object(s.useState)(!1),e=Object(j.a)(n,2),t=e[0],i=e[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(u,{children:Object(p.jsxs)("div",{className:"NavContainer",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)(x.a,{})}),Object(p.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},children:Object(p.jsx)(h.b,{})}),Object(p.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(p.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},children:Object(p.jsx)(h.a,{})}),Object(p.jsx)(O.a,{duration:"5000",children:Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"01."}),Object(p.jsx)(m.Link,{className:"navlink",to:"Section_Header",onClick:function(){return i(!t)},children:"Home"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"02."}),Object(p.jsx)(m.Link,{className:"navlink",to:"Section_About",smooth:!0,duration:80,exact:!0,onClick:function(){return i(!t)},children:"About"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"03."}),Object(p.jsx)(m.Link,{className:"navlink",to:"Section_Skills",onClick:function(){return i(!t)},children:"Skills"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"04."}),Object(p.jsx)(m.Link,{className:"navlink",to:"Section_Projects",smooth:!0,duration:80,exact:!0,onClick:function(){return i(!t)},children:"Projects"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"05."}),Object(p.jsx)(m.Link,{className:"navlink",to:"Section_Contact",exact:!0,onClick:function(){return i(!t)},children:"Contact"})]}),Object(p.jsx)("p",{className:"btn",children:Object(p.jsx)(g,{btnText:"Resume",btnLink:"Section_projects"})})]})})]})]})})})},f=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"home-container",id:"Section_Header",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("a",{href:"https://www.instagram.com/taanyarora/",target:"_blank",style:{paddingBottom:"10%"},children:Object(p.jsx)("i",{class:"fab fa-instagram"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/tanya-arora-450a131a9/",target:"_blank",children:Object(p.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100011724964103",target:"_blank",children:Object(p.jsx)("i",{class:"fab fa-facebook-f"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"#",target:"_blank",children:Object(p.jsx)("i",{class:"fab fa-twitter"})}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{style:{border:"1px solid #8892b0",display:"inline-block",size:"100",height:"100vh"}})]}),Object(p.jsx)("div",{className:"header",children:Object(p.jsx)(O.b,{duration:"2000",triggerOnce:!0,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{style:{fontFamily:"'Roboto Mono', monospace",fontSize:"16px",color:"var(--green)",letterSpacing:"0.09vw",marginTop:"100px"},children:"Hi, my name is"}),Object(p.jsx)("section",{className:"name",children:"Tanya Arora."}),Object(p.jsx)("span",{className:"info1",children:"I build user interfaces."}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"info2",children:"I'm a web developer based in Haryana,specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."}),Object(p.jsx)("p",{className:"home-btn",children:Object(p.jsx)(g,{btnText:"Get In Touch",btnLink:"/ContactSection"})})]})})}),Object(p.jsx)("div",{className:"right",children:"tanya.arora2308@gmail.com"})]})})},y=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(O.a,{duration:"3000",children:Object(p.jsxs)("div",{className:"about-container",id:"Section_About",children:[Object(p.jsxs)("div",{className:"about",children:[Object(p.jsxs)("h2",{class:"about-me",x:!0,children:[Object(p.jsx)("span",{style:{color:"var(--green)"},children:"01."}),Object(p.jsx)("span",{style:{paddingRight:"5%"},children:"About Me"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{className:"about-para",children:["Hello! I'm Tanya, a BTech student in ",Object(p.jsx)("span",{className:"work-link",children:"Banasthali University,Rajasthan "})," and a front-End Developer in Haryana,India.I have passion for UI/UX effects, animations and creating intuitive, dynamic user experiences.Feel free to take a look at my most recent projects on my ",Object(p.jsx)("a",{href:"#",class:"work-link",children:"Work page."}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"I can be as involved in your project as you need me to be; from the seed of the idea, to sketches, creative direction, design, copywriting and website design.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Here are a few technologies I've been working with recently:"]}),Object(p.jsx)("i",{class:"fas fa-caret-right",style:{color:"var(--green)"},children:Object(p.jsx)("span",{style:{color:"var(--gray)",marginRight:"100px"},children:"  HTML and CSS "})}),Object(p.jsx)("i",{class:"fas fa-caret-right",style:{color:"var(--green)"},children:Object(p.jsx)("span",{style:{color:"var(--gray)",marginRight:"100px"},children:"  React JS  "})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("i",{class:"fas fa-caret-right",style:{color:"var(--green)"},children:Object(p.jsx)("span",{style:{color:"var(--gray)",marginRight:"100px"},children:"  Javascript (ES6+)  "})}),Object(p.jsx)("i",{class:"fas fa-caret-right",style:{color:"var(--green)"},children:Object(p.jsx)("span",{style:{color:"var(--gray)",marginRight:"100px"},children:"Node JS  "})}),Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{className:"myImg"})]})})})};var k,w=function(n){var e=n.skill,t=n.progress,i=n.width;return Object(p.jsx)("div",{className:"SkillsSection",children:Object(p.jsxs)("div",{className:"skills-container",children:[Object(p.jsx)("h5",{className:"skill-title",children:e}),Object(p.jsxs)("div",{className:"skill-bar",children:[Object(p.jsx)("p",{className:"skill-text",children:t}),Object(p.jsx)("div",{className:"skill-progress",children:Object(p.jsx)("div",{className:"progress",children:Object(p.jsx)("div",{className:"inner-pregress",style:{width:i}})})})]})]})})},N=b.a.div(k||(k=Object(d.a)(["\n  .SkillsSection {\n  }\n  .skillsContainer {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 4rem;\n    row-gap: 1rem;\n    margin: 4rem 0rem;\n    @media screen and (max-width: 1100px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n  }\n  .skills-container {\n    .skill-title {\n        color:var(--bright-gray);\n      margin:0;\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    .skill-bar {\n      display: flex;\n      align-items: center;\n      .skill-text {\n      }\n      .skill-progress {\n        width: 80%;\n        .progress {\n          width: 100%;\n          height: 0.5rem;\n          background-color: red;\n          margin-left: 1rem;\n          background-color: var(--gray);\n          position: relative;\n          .inner-pregress {\n            position: absolute;\n            background-color: var(--green);\n            height: 100%;\n            bottom: 0;\n            left: 0;\n          }\n        }\n      }\n    }\n  }\n"])));var S,C=function(){return Object(p.jsx)(N,{id:"Section_Skills",children:Object(p.jsx)("div",{className:"project",style:{marginBottom:"2%"},children:Object(p.jsx)(O.a,{duration:"7000",children:Object(p.jsxs)("div",{className:"projectContainer",style:{paddingTop:"1.5rem",marginRight:"80px"},children:[Object(p.jsxs)("h2",{class:"about-me",style:{marginBottom:"2rem"},children:[Object(p.jsx)("span",{style:{color:"var(--green)"},children:"02."}),Object(p.jsx)("span",{style:{paddingRight:"5%"},children:"My Skills"})," "]}),Object(p.jsxs)("div",{className:"skillsContainer",children:[Object(p.jsx)(w,{skill:"HTML",progress:"90%",width:"90%"}),Object(p.jsx)(w,{skill:"CSS",progress:"90%",width:"90%"}),Object(p.jsx)(w,{skill:"Javascript",progress:"70%",width:"70%"}),Object(p.jsx)(w,{skill:"React Js",progress:"80%",width:"80%"}),Object(p.jsx)(w,{skill:"C Language",progress:"90%",width:"90%"}),Object(p.jsx)(w,{skill:"C++",progress:"90%",width:"90%"}),Object(p.jsx)(w,{skill:"Web Design",progress:"25%",width:"25%"}),Object(p.jsx)(w,{skill:"UI/Ux Design",progress:"75%",width:"75%"})]})]})})})})},I=t(77),R=t(75),z=t(76),M=t(74),L=[{id:1,Pname:"Hangman Game",desc:"A game where the user has to guess the letters in a certain word provided using React.js as a framework.",img:"https://i.postimg.cc/D09LDyWp/HangmanB.png"},{id:2,Pname:"Lights Out Puzzle",desc:"A game using React.js and Bootstrap5 where a random number of lights on a 5X5 board is switched on and the user has to switch all the lights off in as few button presses as possible.",img:"https://i.postimg.cc/PqVKtDPP/Lights-out-B.png"},{id:3,Pname:"Restaurant Website",desc:"A food delivery website which uses front-end technologies like HTML53,CSS3 and Javascript",img:"https://i.postimg.cc/Dz44X4xW/restaurant-B.png"},{id:4,Pname:"Shade Game",desc:" A color game made using HTML5 ,CSS3 and Vanilla Javascript where the user has to guess the colour based on RGBA values provided",img:"https://i.postimg.cc/90kVttt3/colorgame-B.png"},{id:5,Pname:"Gourmet Natural Food Website",desc:"A food delivery website which uses front-end technologies like HTML53,CSS3 and Javascript",img:"https://i.postimg.cc/W48qMzzG/gn.png"}],T=function(n){var e=n.title,t=n.imageSrc,i=n.desc;return Object(p.jsx)("div",{className:"project-container",children:Object(p.jsxs)("div",{class:"card",children:[Object(p.jsx)("div",{class:"front front1",children:Object(p.jsx)("div",{class:"content",children:Object(p.jsx)("div",{class:"project-main",style:{backgroundImage:"url("+t+")",backgroundRepeat:"no-repeat",backgroundSize:"cover"}})})}),Object(p.jsx)("div",{class:"front front2",children:Object(p.jsxs)("div",{class:"content",children:[Object(p.jsx)("h3",{children:Object(p.jsx)("a",{href:"/",target:"_blank",children:e})}),Object(p.jsx)("p",{children:i})]})})]})})};t(70);z.a.use([M.a]);var P,A=b.a.div(S||(S=Object(d.a)(["\npadding:0rem 0;\n.project-items{\n    display:flex;\n    gap:3rem;\n    margin-top:5rem;\n}\n.swiper-container{\n    padding-top:3rem;\n    max-width:100%;\n}\n.swiper-slide{\n    // padding-right:2rem;\n}\n.swiper-button-prev,.swiper-button-next{\nmargin:0 0 0 20px;\nposition:absolute;\nheight:50px;\nwidth:50px;\nbackground-color:var(--green);\nz-index:10;\nleft:auto;\ntop:0;\ntranslateY:10%;\ncolor:#173B6E;\nborder-radius:8px;\n}\n.swiper-button-prev{\n    left:58.5rem;\n}\n.swiper-button-next{\n    right: 0.5rem;\n}\n.swiper-button-prev:after,.swiper-button-next:after{\n    position:absolute;\n    font-size:2rem;\n}\n@media only screen and (max-width:768px){\n    .project-items{\n        flex-direction:column;\n        max-width:400px;\n        margin:0 auto;\n        gap:5rem;\n        margin-top:7rem;\n    }\n    .projectItemImg{\n        width:100%;\n    }\n    .swiper-button-next{\n        right: 0.5rem;\n        height:40px;\n        width:40px;\n    }\n    .swiper-button-prev{\n        left:9.5rem;\n        height:40px;\n        width:40px;\n    }\n}\n\n"]))),B=function(){return Object(p.jsx)(A,{id:"Section_Projects",children:Object(p.jsx)("div",{className:"project",children:Object(p.jsx)(O.a,{duration:"7000",children:Object(p.jsxs)("div",{className:"projectContainer",style:{paddingTop:"1.5rem",marginRight:"80px"},children:[Object(p.jsxs)("h2",{class:"about-me",style:{marginBottom:"-3rem"},children:[Object(p.jsx)("span",{style:{color:"var(--green)"},children:"03."}),Object(p.jsx)("span",{style:{paddingRight:"5%"},children:"Projects"}),"  "]}),Object(p.jsx)("div",{className:"project-items",children:Object(p.jsx)(I.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:L.map((function(n,e){return Object(p.jsx)(R.a,{children:Object(p.jsx)(T,{title:n.Pname,imageSrc:n.img,desc:n.desc})})}))})})]})})})})},F=function(){return Object(p.jsx)("div",{style:{textAlign:"center"},id:"Section_Contact",children:Object(p.jsxs)(O.c,{children:[Object(p.jsx)("span",{style:{display:"block",textAlign:"center",color:"var(--green)",fontFamily:"'Roboto Mono', monospace",fontSize:"1rem"},children:"04. What's Next?"}),Object(p.jsx)("h2",{style:{fontFamily:"'Roboto Mono', monospace",color:"var(--bright-gray)",fontSize:"2rem",fontWeight:"900",marginTop:"10px"},children:Object(p.jsx)("strong",{children:"Get In Touch"})}),Object(p.jsx)("p",{className:"connect-para",children:"Feel free to get in touch with me. I am always open to discussing new projects ,creative ideas or opportunities to be a part of your vision. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! "}),Object(p.jsx)("p",{className:"home-btn",style:{marginBottom:"10%"},children:Object(p.jsx)(g,{btnText:"Say Hello",btnLink:"/ContactSection"})})]})})},_=t(49),H=function(){return Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsxs)("p",{className:"footer-para",children:["Designed and Built by Tanya Arora ",Object(p.jsx)(_.a,{})]})})},E=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{}),Object(p.jsx)(f,{}),Object(p.jsx)(y,{}),Object(p.jsx)(C,{}),Object(p.jsx)(B,{}),Object(p.jsx)(F,{}),Object(p.jsx)(H,{})]})},D=(t(71),b.a.nav(P||(P=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--main);\n  .NavContainer{\n    padding-right:10%;\n    display:flex;\n    justify-content:flex-start;\n  }\n  .navbar li{\n    list-style: none;\n    display: inline-block;\n    padding-left: 3%;\n    color: var(--bright-gray);\n    opacity:1 ;\n  }\n  .navlink{\n    text-align: right;\n    color: var(--bright-gray);\n    text-decoration: none;\n  }\n  .navlink:hover{\n      transition-duration: 0.2s;\n      color: var(--green);\n      cursor: pointer;\n  }\n  .navbar li span{\n    color: var(--green);\n    font-family: 'Roboto Mono', monospace;\n  }\n  ul {\n    margin: 0 auto;\n    width: 90%;\n    text-align: right;\n  }\n    .navlink {\n      text-align: right;\n      display: inline-block;\n      font-family: 'Roboto Mono', monospace;\n      padding: 1rem 0.8rem;\n      font-size: 13px;\n      // color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: #9de0d0;\n    }\n  }\n  .logo{\n    margin: 1%;\n    color:var(--green);\n    font-size: 200%;\n    color: var(--green);\n    padding-left:3%;\n    }\n  .mobile-menu-icon {\n    position: absolute;\n    color:var(--green);\n    right: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    color:var(--green);\n    display: none;\n  }\n  .btn{\n    display:inline;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .logo{\t\n      margin:7% 10%;\t\n      \n    }\t\n    .mobile-menu-icon {\n      font-size:250%;\n      margin:6% -3%;\t\n      color:var(--green);\n      display: block;\n    }\n    .navItems {\n      --top:35%;\n      transition: 0.3s ease transform;\n      background-color: #ccd6f627;\n      width: 50%;\n      max-width: 196px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .span{\n        display:none;\n      }\n      .blurbody{\n        opacity:0;\n      }\n      .closeNavIcon {\n        font-size:200%;\n        opacity:0;\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        text-align:left;\n        display: block;\n        margin-bottom: 0.1rem;\n      }\n      .btn{\n        display:none;\n      }\n    }\n  }\n"])))),W=function(){var n=Object(s.useState)(!1),e=Object(j.a)(n,2),t=e[0],i=e[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(D,{children:Object(p.jsxs)("div",{className:"NavContainer",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)(x.a,{})}),Object(p.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},children:Object(p.jsx)(h.b,{})}),Object(p.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(p.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},children:Object(p.jsx)(h.a,{})}),Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"01."}),Object(p.jsx)(o.c,{className:"navlink",to:"/",onClick:function(){return i(!t)},children:"Home"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"02."}),Object(p.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:function(){return i(!t)},children:"About"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"03."}),Object(p.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:function(){return i(!t)},children:"Skills"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"04."}),Object(p.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:function(){return i(!t)},children:"Projects"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"05."}),Object(p.jsx)(o.c,{className:"navlink",to:"/",exact:!0,onClick:function(){return i(!t)},children:"Contact"})]}),Object(p.jsx)("p",{className:"btn",children:Object(p.jsx)(g,{btnText:"Resume",btnLink:"/"})})]})]})]})})})},J=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsxs)("div",{className:"contactSection",children:[Object(p.jsxs)("div",{className:"leftContactSection",children:[Object(p.jsx)("h2",{children:"QUESTIONS?"}),Object(p.jsx)("h2",{children:"COMMENTS?"}),Object(p.jsx)("p",{className:"greet",children:"I'LL LOVE TO HEAR FROM YOU."}),Object(p.jsxs)("span",{className:"leftContactSection-para",children:["My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"," "]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://www.instagram.com/taanyarora/",target:"_blank",children:Object(p.jsx)("i",{class:"fab fa-instagram"})}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/tanya-arora-450a131a9/",target:"_blank",children:Object(p.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(p.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100011724964103",target:"_blank",children:Object(p.jsx)("i",{class:"fab fa-facebook-f"})}),Object(p.jsx)("a",{href:"#",target:"_blank",children:Object(p.jsx)("i",{class:"fab fa-twitter"})})]}),Object(p.jsx)("div",{className:"rightContactSection",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{style:{margin:"10px"},children:"NAME"}),Object(p.jsx)("input",{type:"text",className:"form-input"}),Object(p.jsx)("label",{style:{margin:"10px"},children:"EMAIL"}),Object(p.jsx)("input",{type:"email",className:"form-input"}),Object(p.jsx)("label",{style:{margin:"10px"},children:"MESSAGE"}),Object(p.jsx)("textarea",{rows:"4",cols:"50",className:"form-input"}),Object(p.jsx)("div",{className:"contactButtonStyle",children:Object(p.jsx)(o.b,{to:"/",style:{fontSize:"13px",fontFamily:"'Roboto Mono', monospace",color:"#64ffda",textDecoration:"none"},children:"Submit"})})]})})]})]})};function G(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(E,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/About",children:Object(p.jsx)(y,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/Projects",children:Object(p.jsx)(B,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/ContactSection",children:Object(p.jsx)(J,{})})]})})})}var V=t(50),U=t.n(V),q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(e){var t=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),i(n),s(n),a(n),c(n)}))};r.a.render(Object(p.jsxs)(a.a.StrictMode,{children:[Object(p.jsx)(U.a,{url:"https://i.postimg.cc/fb7Rbkth/glowing-neon-letter-on-dark-260nw-70498114-removebg-preview.png"}),Object(p.jsx)(G,{})]}),document.getElementById("root")),q()}},[[72,1,2]]]);
//# sourceMappingURL=main.729a83b9.chunk.js.map