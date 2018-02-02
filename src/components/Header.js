import React, { Component } from 'react';
import './Header.css';
import logo from '../TAM-Logo-white.svg';

class Header extends Component {
  render() {
    return (
  		<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Becky Gates Children's Center</h1>
      </header>
    );
  }
}

export default Header;
