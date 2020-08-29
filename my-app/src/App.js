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
import Projects from './projects-page';

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>

        <Route exact path="/" component={Home}/>
        <Route path ="/projects" component={Projects}/>


      </Switch>
      
      <Footer/>
    </div>
  );
}

export default App;
