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
        <div className='col-1 h2'>
          <FontAwesomeIcon icon={ faBars } />
        </div>
        <div className='col-2 h2'>
          <Link to={'/'}>Sparrows</Link>
        </div>
        <div className='col-9 h2 text-right'>
          <Moment format='(ddd) MMM DD' />
        </div>
        {/*<div className='row'> 
          <div className='col col-1'>
            <button class='btn bg-maroon text-white' type='button' data-toggle='dropdown'>
              <FontAwesomeIcon className='h3' icon={ faBars } />
            </button>
          </div>
          <div className='col col-1'>
            <h1>Sparrows</h1>
          </div>
          <div className='col col-8'>
            <h1 className='App-title text-uppercase font-weight-bold'>BGCC</h1>
          </div>
          <div className='col col-2 offset-1'>
            <Moment format='(ddd) MMM.DD' />
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Header;
