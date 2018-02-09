import React, {Component} from 'react'
import ChildModel from '../models/Child'

class ViewChildForm extends Component {
	render() {
		return (
			<div>
				{ this.props.name }
        <br />
        { this.props.dob } 
        <br />
        { this.props.emergencyContact }
			</div>
			)
	}
}

export default ViewChildForm