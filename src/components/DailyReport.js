import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import './DailyReport.css';

class DailyReport extends Component {
  render(){
    return(
      <div className='row'>
        <form className='col-md-4 col-sm-12 form-group'>
          <label>AM Snacks</label>
          <select class='form-control' id='snacksAM' aria-describedby='snacksAM' placeholder='Enter email'>
            <option selected disabled hidden>--</option>
            <option value='All'>Ate all</option>
            <option value='Lot'>Ate lots</option>
            <option value='Some'>Ate some</option>
            <option value='None'>Ate none</option>
          </select>
        </form>
        <form className='col-md-4 col-sm-12 form-group'>
          <label>Lunch</label>
          <select class='form-control' id='lunch' aria-describedby='lunch' placeholder='Enter email'>
            <option selected disabled hidden>--</option>
            <option value='All'>Ate all</option>
            <option value='Lot'>Ate lots</option>
            <option value='Some'>Ate some</option>
            <option value='None'>Ate none</option>
          </select>
        </form>
        <form className='col-md-4 col-sm-12 form-group'>
          <label>PM Snacks</label>
          <select class='form-control' id='snacksPM' aria-describedby='snacksPM' placeholder='Enter email'>
            <option selected disabled hidden>--</option>
            <option value='All'>Ate all</option>
            <option value='Lot'>Ate lots</option>
            <option value='Some'>Ate some</option>
            <option value='None'>Ate none</option>
          </select>
        </form>
        
      </div>
    )
  }
}

export default DailyReport