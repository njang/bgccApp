import React, { Component } from 'react';
import Moment from 'react-moment';
import './Status.css';
import {Link} from 'react-router-dom';


class Status extends Component {
  render() {
    return (
  		<header className="Status bg-secondary text-white text-center">
        <div className="row h4"> 
          <div className="col-3">
          	<Link to={'/'}>Sparrows</Link>
          </div>  
          <div className="col-3 offset-6">
   	       	<Moment format="(ddd) MMM.DD" />
          </div>  
        </div>
      </header>
    );
  }
}

export default Status;
