import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import './DailyReport.css';
import Eat from './Eat'
import Rest from './Rest'
import Play from './Play'
import Potty from './Potty'

class DailyReport extends Component {
  render(){
    return(
    	<div>
    		<h2>Ate</h2>
	      <div className='row'>
	        <Eat meal='AM snack' id='snackAM' />
	        <Eat meal='Lunch' id='lunch' />
	        <Eat meal='PM snack' id='snackPM'/>
	      </div>
	      <Rest />
	      <Play />
	      <Potty />
	    </div>
    )
  }
}

export default DailyReport