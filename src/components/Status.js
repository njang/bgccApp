import React, { Component } from 'react';
import './Status.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/fontawesome-free-solid'

class Status extends Component {
  render() {
    return (
  		<header className="Status bg-secondary text-white text-center">
        <div className="row"> 
          <div className="col col-2">
          	Sparrows
          </div>  
          <div className="col col-8">
           	Middle
          </div>  
          <div className="col col-1">
          	date
          </div>  
        </div>
      </header>
    );
  }
}

export default Status;
