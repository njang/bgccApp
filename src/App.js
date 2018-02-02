import React, { Component } from 'react';
import logo from './TAM-Logo-white.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <form>
          <label>AM Snacks</label>
          <select class="form-control" id="snacksAM" aria-describedby="emailHelp" placeholder="Enter email">
            <option value="volvo">--</option>
            <option value="volvo">Ate all</option>
            <option value="saab">Ate a lot</option>
            <option value="mercedes">Ate some</option>
            <option value="audi">Ate none</option>
          </select>
        </form>

        <form>
          <label>Lunch</label>
          <select class="form-control" id="snacksAM" aria-describedby="emailHelp" placeholder="Enter email">
            <option value="volvo">--</option>
            <option value="volvo">Ate all</option>
            <option value="saab">Ate a lot</option>
            <option value="mercedes">Ate some</option>
            <option value="audi">Ate none</option>
          </select>
        </form>

        <form>
          <label>PM Snacks</label>
          <select class="form-control" id="snacksAM" aria-describedby="emailHelp" placeholder="Enter email">
            <option value="volvo">--</option>
            <option value="volvo">Ate all</option>
            <option value="saab">Ate a lot</option>
            <option value="mercedes">Ate some</option>
            <option value="audi">Ate none</option>
          </select>
        </form>

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

export default App;
