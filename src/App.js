import React, { Component } from 'react';
import './App.css';
import Routes from './config/routes';
import Header from './components/Header';
import Status from './components/Status';
import ChildrenList from './containers/ChildrenList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Status />
        { Routes }
        <ChildrenList />
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
