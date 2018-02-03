import React, { Component } from 'react';

class Play extends Component {
  render() {
    return (
      <div>
        <h2>Play</h2>
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

export default Play;           