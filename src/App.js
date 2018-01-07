import React, { Component } from 'react';
import './App.css';
import Router from './components/Router';
import NavContainer from './containers/NavContainer'

class App extends Component {
  render() { 
    return (
    <div>
      <NavContainer />
      <Router />
    </div>
    );
  }
}

export default App;
