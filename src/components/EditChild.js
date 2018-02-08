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
  //   this.setState({
  //     child: event.target.value
  //   })
  // }
  // onInputChange(event){
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
      name: self.state.name,
      dob: self.state.dob,
      emergencyContact: self.state.emergencyContact,
      type: 'child'
    }
    this.props.onUpdateChild(childObject);
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
          	name='name'
            autoFocus={ this.props.autoFocus }
            onChange={ this.onChange }
            placeholder={ this.props.fillName }
            type='text'
            value={(this.state && this.state.name) || ''}
          />
          <input
          	name='dob'
            onChange={ this.onChange }
            placeholder={ this.props.fillDOB }
            type='text'
            value={(this.state && this.state.dob) || ''}
          />
          <input
          	name='emergencyContact'
            onChange={ this.onChange }
            placeholder={ this.props.fillEmergencyContact }
            type='text'
            value={(this.state && this.state.emergencyContact) || ''}
          />
          <button type='submit'>{ this.props.buttonName }</button>
        </form>
      </div>
    )
  }
}

export default EditChildForm