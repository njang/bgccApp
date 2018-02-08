import React, { Component } from 'react';
import Moment from 'react-moment';
import './Status.css';

class Status extends Component {
  render() {
    return (
  		<header className="Status bg-secondary text-white text-center">
        <div className="row"> 
          <div className="col col-2 offset-1">
          	Sparrows
          </div>  
          <div className="col col-2 offset-6">
   	       	<Moment format="(ddd) MMM.DD" />
          </div>  
        </div>
      </header>
    );
  }
}

export default Status;
