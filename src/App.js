import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "../src/Components/Home/Home.js";
import Projects from "../src/Components/Projects/Projects.js";
import LandingPage from "./Components/LandingPage/LandingPage";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (

      <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/mera-portfolio"><Home/></Route>
                <Route exact path="/projects"><Projects/></Route>
                <Route exact path="/portfolio"><Portfolio/></Route>
            </Switch>
        </BrowserRouter>
      </>

  );
}

export default App;
