import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomeSection from "./HomeSection";
import ContactSection from './ContactSection';
import About from './About';
import Projects from './Projects';



export default function App() {
  return (
    <>
      <BrowserRouter>
       <Switch>
        <Route exact path="/">
            <HomeSection />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/ContactSection">
            <ContactSection />
          </Route>
        </Switch>  
      </BrowserRouter>
    </>
  );
}