import React, { Component } from 'react';
import './Header.css';
import Moment from 'react-moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

class Header extends Component {
  render() {
    return (
  		<header className='App-header bg-maroon row'>
        <FontAwesomeIcon className='h1 col-1' icon={ faBars } />
        <h1 className='col-2'>Sparrows</h1>
        <Moment className='h2 col-9 text-right' format='(ddd) MMM.DD' />
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
      </header>
    );
  }
}

export default Header;
