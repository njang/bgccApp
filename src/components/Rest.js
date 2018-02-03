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
      </div>
    );
  }
}

export default Rest;           