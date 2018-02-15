import React, { Component } from 'react';

class Potty extends Component {
  render() {
    return (
      <div className='col-6'>
        <h2>Potty</h2>
        <form className='form-group'>
          <div clasName='row'>
            <input className='form-control col-3' type='time' />
            <select className='form-control col-3' id='type' aria-describedby='type'>
              <option selected disabled hidden>--</option>
              <option value='dry'>Dry</option>
              <option value='wet'>Wet</option>
              <option value='BM'>BM</option>
            </select>
            <select className='form-control col-3' id='type' aria-describedby='type'>
              <option selected disabled hidden>--</option>
              <option value='tried'>Tried</option>
              <option value='pottied'>Pottied</option>
            </select>
          </div>
        </form>

        <label>Comments</label>
        <input type='text' className='form-control'/>
      </div>
    );
  }
}

export default Potty;