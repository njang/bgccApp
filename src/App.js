import React, { Component } from 'react';
import logo from './TAM-Logo-white.svg';
import './App.css';
import Header from './components/Header';
import Eat from './components/Eat';
import Rest from './components/Rest';
import Play from './components/Play';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Eat />
        <Rest />
        <Play />
      </div>
    );
  }
}

export default App;
