import React, { Component } from 'react';

class Incident extends Component {
  render() {
    return (
    	<div className="incidentReport">
    		<h2>Incident Report</h2>
		    <p id="reportInstruction" className="form-text text-muted">Fill in all appropriate areas.</p>
				<div className="form-group">
					<div className="row text-left">
						<div className="col col-4"><label>Classroom Teacher</label></div>
						<div className="col col-8"><input type="text" className="form-control" id="" aria-describedby="" placeholder="Classroom Teacher" /></div>
					</div>
					<div className="row text-left">
						<div className="col col-4"><label>Report completed by</label></div>
						<div className="col col-8"><input type="text" className="form-control" id="" aria-describedby="" placeholder="If different from above" /></div>
					</div>
					<div className="row text-left">
						<div className="col col-4"><label>Child's Name</label></div>
						<div className="col col-8"><input type="text" className="form-control" id="" aria-describedby="" placeholder="Child's Name" /></div>
					</div>
					<div className="row text-left">
						<div className="col col-4"><label>Date/time of incident</label></div>
						<div className="col col-8"><input type="datetime-local" className="form-control" id="" aria-describedby="" placeholder="Date/time of incident" /></div>
					</div>
					<div className="row text-left">
						<div className="col col-4"><label>Classroom</label></div>
						<div className="col col-8"><input type="text" className="form-control" id="" aria-describedby="" placeholder="Classroom" /></div>
					</div>
					<div className="row text-left">
						<div className="col col-4"><label>Place of Incident</label></div>
						<div className="col col-8"><input type="text" className="form-control" id="" aria-describedby="" placeholder="Place of Incident" /></div>
			    </div>
			  </div>
				<div className="form-group text-left">
					<form>
						<label for="injuryDescription">Describe injury (or risk in which child was involved)</label>
				    <textarea className="form-control" rows="4" id="injuryDescription" aria-describedby="" placeholder="Describe injury (or risk in which child was involved)" />
				    <hr />
			    </form>
			    <form>
						<label for="whenHowInjuryOccurred">When and how did the injury/incident occur?</label>
				    <textarea className="form-control" rows="4" id="whenHowInjuryOccurred" aria-describedby="" placeholder="When and how did the injury/incident occur?" />
				    <hr />
			    </form>
			    <form>
						<label for="careGuidanceGiven">What care/guidance was given?</label>
				    <textarea className="form-control" rows="4" id="careGuidanceGiven" aria-describedby="" placeholder="What care/guidance was given?" />
				    <hr />
			    </form>
			    <form>
						<label for="staffWitnessed">Staff who witnessed the injury/incident</label>
				    <textarea className="form-control" rows="4" id="staffWitnessed" aria-describedby="" placeholder="Staff who witnessed the injury/incident" />
				    <hr />
			    </form>
			    <form>
						<label for="staffPresent">Other staff who were present at the time of the injury/incident</label>
				    <textarea className="form-control" rows="4" id="staffPresent" aria-describedby="" placeholder="Other staff who were present at the time of the injury/incident" />
				    <hr />
			    </form>
			    <form>
						<label for="childrenCount">How many children were present?</label>
				    <textarea className="form-control" rows="4" id="childrenCount" aria-describedby="" placeholder="How many children were present?" />
				    <hr />
			    </form>
			  </div>
				<div className="form-group">
					<label>I verify that the above information is a true and accurate account of the incident/injury that occurred concerning this child.</label>
			    <input type="text" className="form-control" id="" aria-describedby="" placeholder="Signature of Teacher or Staff responsible for child" />
			    <input type="date" className="form-control" id="" aria-describedby="" placeholder="Date signed" />
					{/*<label>I verify that the above information is a true and accurate account of the incident/injury that occurred concerning this child.</label>
			    <input type="text" className="form-control" id="" aria-describedby="" placeholder="Signature of Director or Person in charge" />
			    <input type="date" className="form-control" id="" aria-describedby="" placeholder="Date signed" />*/}
					{/*<label>I verify that the above information is a true and accurate account of the incident/injury that occurred concerning this child.</label>
			    <input type="text" className="form-control" id="" aria-describedby="" placeholder="Signature of Director or Person in charge" />
			    <input type="date" className="form-control" id="" aria-describedby="" placeholder="Date signed" />*/}
			  </div>
			  <button className="btn btn-success">Submit</button>
			</div>
    );
  }
}

export default Incident;      	