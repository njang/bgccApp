import React, { Component } from 'react';
import Moment from 'react-moment';
import './Status.css';

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
   	       	Date
          </div>  
        </div>
      </header>
    );
  }
}

export default Status;
