import React, { Component } from 'react';
import './Header.css';
import logo from '../TAM-Logo-white.svg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-brands'

class Header extends Component {
  render() {
    return (
  		<header className="App-header row">
        <h1 className="App-title col col-8 text-uppercase font-weight-bold align-middle">
        	<FontAwesomeIcon icon="faCoffee" />
        	BGCC
        </h1>
        <img src={logo} className="App-logo col col-4" alt="logo" />

      </header>
    );
  }
}

export default Header;
