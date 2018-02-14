import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import './DailyReport.css';
import './ChildView.css';
import Eat from './Eat'
import Rest from './Rest'
import Play from './Play'
import Potty from './Potty'

class DailyReport extends Component {
  render(){
    return(
    	<div className='reportCard'>
	    	<div className='row'>
	    		<div className='col-6'>
		    		<h2>Eat</h2>
			      <div className='row'>
			        <Eat meal='AM snack' id='snackAM' />
			        <Eat meal='Lunch' id='lunch' />
			        <Eat meal='PM snack' id='snackPM'/>
			      </div>
		      </div>
		      <Rest />
		    </div>
	    	<div className='row'>	    
		      <Potty />
		      <Play />
		    </div>
	    </div>
    )
  }
}

export default DailyReport