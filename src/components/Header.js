import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

class Header extends Component {
  render() {
    return (
  		<div className='App-header row'>
        <div className='col-6 h2'>
          <Link to={'/'}><FontAwesomeIcon icon={ faBars } /> Sparrows</Link>
        </div>
        <div className='col-6 h2 text-right'>
          <Moment format='(ddd) MMM DD' />
        </div>
      </div>
    );
  }
}

export default Header;
