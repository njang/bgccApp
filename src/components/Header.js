import React, { Component } from 'react';
import './Header.css';
import logo from '../TAM-Logo-white.svg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/fontawesome-free-solid'

class Header extends Component {
  render() {
    return (
  		<header className="App-header bg-maroon text-center">
        <div className="row"> 
          <div className="col col-1 dropdown">
            <button class="btn bg-maroon text-white" type="button" data-toggle="dropdown">
              <FontAwesomeIcon className="h3" icon={ faBars } />
            </button>
            <ul class="dropdown-menu bg-maroon text-white">
              <li><a href="#">About</a></li>
              <li><a href="#map">Map</a></li>
              <li><a href="#">Weather</a></li>
            </ul>
          </div>
          <div className="col col-9">
            <h1 className="App-title text-uppercase font-weight-bold">BGCC</h1>
          </div>
          <div className="col col-1">
            <FontAwesomeIcon className="h3" icon={ faUser } />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
