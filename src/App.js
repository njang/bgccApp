import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Status from './components/Status';
import Routes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Status />
        { Routes }
      </div>
    );
  }
}

export default App;
