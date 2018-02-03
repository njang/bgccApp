import React, { Component } from 'react';

class Incident extends Component {
  render() {
    return (
    	<div className="incidentReport">
    		<h2>Incident Report</h2>
		    <small id="reportInstruction" class="form-text text-muted">Fill in all appropriate areas.</small>
				<div class="form-group">
			    <label for="exampleInputEmail1">Email address</label>
			    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			</div>
    );
  }
}

export default Incident;      	