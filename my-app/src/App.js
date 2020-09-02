// @flow
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './header';
import Footer from './footer';
import Home from './home-page';
import AboutMe from './about-me-page';
import Portfolio from './portfolio-page';

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path ="/portfolio" component={Portfolio}/>
        <Route path ="/about-me" component={AboutMe}/>


      </Switch>
      
      <Footer/>
    </div>
  );
}

export default App;
