import React, { Component } from 'react';

class Potty extends Component {
  render() {
    return (
      <div className='col-6'>
        <h2>Potty Training</h2>
        <form>
          <label>Favorite Activity</label>
          <input type="text" class="form-control"/>
          <label>Comments</label>
          <input type="text" class="form-control"/>
        </form>
      </div>
    );
  }
}

export default Potty;           