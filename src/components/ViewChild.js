import React, {Component} from 'react'
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

class ViewChildForm extends Component {
	render() {
		let number = phoneUtil.parseAndKeepRawInput( this.props.emergencyContact.toString(), 'US' );
		return (
			<div>
				{ this.props.name }
        <br />
        { this.props.dob } 
        <br />
        <a href={ 'tel:' + this.props.emergencyContact }>{ phoneUtil.formatInOriginalFormat( number, 'US' ) }</a>
			</div>
			)
	}
}

export default ViewChildForm