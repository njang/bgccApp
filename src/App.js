import React, { Component } from 'react';
import logo from './TAM-Logo-white.svg';
import './App.css';
import Header from './components/Header';
import Eat from './components/Eat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Eat />
      </div>
    );
  }
}

export default App;
