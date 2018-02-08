import React, {Component} from 'react'
import ChildModel from '../models/Child'

class EditChildForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
  //   this.setState({
  //     child: event.target.value
  //   })
  // }
  // onInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }  
  
  onSubmit(event){
    event.preventDefault()
    let child = this.state.child
    this.props.onUpdateChild(child)
    this.setState({
      child: ""
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
            value={(this.state && this.state.child) || ''} />
          <input
          	name='dob'
            onChange={ this.onChange }
            placeholder={ this.props.fillDOB }
            type='text'
            value={(this.state && this.state.child) || ''} />
          <input
          	name='emergencyContact'
            onChange={ this.onChange }
            placeholder={ this.props.fillEmergencyContact }
            type='text'
            value={(this.state && this.state.child) || ''} />
          <button type='submit'>{ this.props.buttonName }</button>
        </form>
      </div>
    )
  }
}

export default EditChildForm