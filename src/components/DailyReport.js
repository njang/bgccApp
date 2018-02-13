import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class DailyReport extends Component {
  render(){
    return(
      <div>
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
        
      </div>
    )
  }
}

export default DailyReport