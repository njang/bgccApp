import React, { Component } from 'react';

class Rest extends Component {
  render() {
    return (
      <div className='col-6'>
        <div className='row'>
          <h2 className='col-12'>Rest</h2>
        </div>
        <div className='row'>
          <form className='col-md-12 col-sm-10 offset-sm-1 offset-md-0 form-group'>
            <label>During Rest Time I... </label>
            <select className='form-control' id='rest' aria-describedby='rest' defaultValue='--'>
              <option value='--' disabled hidden>--</option>
              <option value='slept'>Slept</option>
              <option value='rest'>Rested</option>
              <option value='active'>Was active</option>
              <option value='other'>Other</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Rest;
