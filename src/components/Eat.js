import React, { Component } from 'react';

class Eat extends Component {
  render() {
    return (
      <form className='col-md-4 col-sm-10 offset-md-0 offset-sm-1 form-group'>
        <label>{ this.props.meal }</label>
        <select className='form-control' id={ this.props.id } aria-describedby={ this.props.id }>
          <option selected disabled hidden>--</option>
          <option value='All'>Ate all</option>
          <option value='Lot'>Ate lots</option>
          <option value='Some'>Ate some</option>
          <option value='None'>Ate none</option>
        </select>
      </form>
    );
  }
}

export default Eat;
