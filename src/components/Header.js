import React, { Component } from 'react';
import './Header.css';
import logo from '../TAM-Logo-white.svg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

class Header extends Component {
  render() {
    return (
  		<header className="App-header row">
        <h1 className="App-title col col-11 text-uppercase font-weight-bold align-middle">
          <FontAwesomeIcon icon={ faBars } />
          <span> BGCC</span>
        </h1>
        <img src={logo} className="App-logo col col-1 align-middle" alt="logo" />

      </header>
    );
  }
}

export default Header;
