import React, { Component } from 'react';

class Play extends Component {
  render() {
    return (
      <div className='col-6'>
        <h2>Play</h2>
        <form className='form-group'>
          <label>Favorite Activity</label>
          <input type='text' class='form-control'/>
          <label>Comments</label>
          <input type='text' class='form-control'/>
        </form>
      </div>
    );
  }
}

export default Play;           