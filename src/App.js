import React, { Component } from 'react';
import './App.css';
import Router from './components/Router';
import Nav from './components/Nav'

class App extends Component {
  render() { 
    return (
    <div>
      <Nav />
      <Router />
    </div>
    );
  }
}

export default App;
