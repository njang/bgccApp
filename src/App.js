import React, { Component } from 'react';
import logo from './TAM-Logo-white.svg';
import './App.css';
import Header from './components/Header';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { MyRoutes}
        {/*<Eat />
        <Rest />
        <Play />
        <Potty />
        <Incident />*/}
      </div>
    );
  }
}

export default App;
