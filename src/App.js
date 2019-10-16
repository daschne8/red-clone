import React from 'react';
import logo from './logo.svg';
import './App.css';

import PostStubs from "./containers/post_stubs"

function App() {
  return (
    <div className="App">
    <div style={{flex: 1}}></div>
      <PostStubs />
      <div style={{flex: 1}}></div>
    </div>
  );
}

export default App;
