import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import HomeSection from "./HomeSection";
import ContactSection from './sections/Connect/ContactSection';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';



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