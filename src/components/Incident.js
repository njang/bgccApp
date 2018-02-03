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
				<div class="form-group">
					<label> </label>
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Describe injury (or risk in which child was involved)" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="When and how did the injury/incident occur?" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="What care/guidance was given?" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Staff who witnessed the injury/incident" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Other staff who were present at the time of the injury/incident" />
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="How many children were present?" />
			  </div>
				<div class="form-group">
					<label>I verify that the above information is a true and accurate account of the incident/injury that occurred concerning this child.</label>
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Signature of Teacher or Staff responsible for child" />
			    <input type="date" class="form-control" id="" aria-describedby="" placeholder="Date signed" />
					<label>I verify that the above information is a true and accurate account of the incident/injury that occurred concerning this child.</label>
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Signature of Director or Person in charge" />
			    <input type="date" class="form-control" id="" aria-describedby="" placeholder="Date signed" />
					<label>I verify that the above information is a true and accurate account of the incident/injury that occurred concerning this child.</label>
			    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Signature of Director or Person in charge" />
			    <input type="date" class="form-control" id="" aria-describedby="" placeholder="Date signed" />			  </div>
			</div>
    );
  }
}

export default Incident;      	