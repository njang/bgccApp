import React, { Component } from 'react';

class Rest extends Component {
  render() {
    return (
      <div>
        <h2>Rest</h2>
        <form>
          <label>During Rest Time I </label>
          <select class="form-control" id="snacksAM" aria-describedby="emailHelp" placeholder="Enter email">
            <option value="volvo">--</option>
            <option value="volvo">Slept</option>
            <option value="saab">Rested</option>
            <option value="mercedes">Was active</option>
            <option value="audi">Other</option>
          </select>
        </form>

        <h2>Play</h2>
        <form>
          <label>Favorite Activity</label>
          <input type="text" class="form-control"/>
          <label>Comments</label>
          <input type="text" class="form-control"/>
        </form>
        <h2>Potty</h2>
        <h2>Commnts</h2>
      </div>
    );
  }
}

export default Rest;           