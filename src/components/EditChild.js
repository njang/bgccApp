import React, {Component} from 'react'
// import ChildModel from '../models/Child'

class EditChildForm extends Component {
  constructor() {
    super();
    this.state ={
      name: '',
      dob: '',
      emergencyContact: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }  
  
  onSubmit(event){
    event.preventDefault()
    let self = this
    let childObject = {
      id: self.props.id,
      // If the field is left unfilled, use the values passed from Child component
      name: self.state.name ? self.state.name : self.props.fillName,
      dob: self.state.dob? self.state.dob : self.props.fillDOB,
      emergencyContact: self.state.emergencyContact ? self.state.emergencyContact : self.props.fillEmergencyContact,
      type: 'child'
    }
    this.props.onUpdateChild(childObject);
    this.forceUpdate();
    self.setState({
      name: '',
      dob: '',
      emergencyContact: ''
    })
  }

  render(){
    return (
      <div className='editChildForm'>
        <form onSubmit={ this.onSubmit }>
          <input
          	name = 'name'
            type = 'text'
            autoFocus = { this.props.autoFocus }
            onChange = { this.onChange }
            defaultValue = { this.props.fillName }
          />
          <input
            name = 'dob'
            type ='text'
            onChange = { this.onChange }
            defaultValue = { this.props.fillDOB }
          />
          <input
          	name = 'emergencyContact'
            type = 'text'
            onChange = { this.onChange }
            defaultValue = { this.props.fillEmergencyContact }
          />
          <button type='submit'>Update</button>
        </form>
      </div>
    )
  }
}

export default EditChildForm