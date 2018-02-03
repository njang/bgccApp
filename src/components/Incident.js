import React, { Component } from 'react';

class Incident extends Component {
  render() {
    return (
    	<div className="incidentReport">
    		<h2>Incident Report</h2>
		    <small id="reportInstruction" class="form-text text-muted">Fill in all appropriate areas.</small>
				<div class="form-group">
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Classroom Teacher" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Person completing report (if different from above)" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Child's Name" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Date/time of incident" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Classroom" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Place of Incident" />
			  </div>

			</div>
    );
  }
}

export default Incident;      	