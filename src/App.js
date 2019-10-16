import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from "./containers/home"
import Post from "./containers/post"
import NavBar from "./components/navBar"


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
      <div style={{flex: 1}}></div>
      <div className="page" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:postId" component={Post}/>
        </Switch>
      </div>
      <div style={{flex: 1}}></div>
      </div>
    </Router>
  );
}

export default App;
