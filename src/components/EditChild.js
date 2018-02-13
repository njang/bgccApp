import React, {Component} from 'react'
// import ChildModel from '../models/Child'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid'

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
    this.removeClickedChild = this.removeClickedChild.bind(this);
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
      // name: {
      //   first: self.props.name.split(' ')[0],
      //   last: self.props.name.split(' ')[1]
      // },
      // dob: self.props.dob,
      // emergencyContact: self.props.emergencyContact,
      // If the field is left unfilled, use the values passed from Child component
      name: {
        first: self.state.name ? self.state.name.split(' ')[0] : self.props.name.split(' ')[0],
        last: self.state.name ? self.state.name.split(' ')[1] : self.props.name.split(' ')[1]
      },
      dob: self.state.dob ? self.state.dob : self.props.dob,
      emergencyContact: self.state.emergencyContact ? self.state.emergencyContact : self.props.emergencyContact,
      type: 'child'
    }
    // console.log(childObject.id);
    this.props.onUpdateChild(childObject);
    self.setState({
      name: '',
      dob: '',
      emergencyContact: ''
    })
  }


  removeClickedChild() {
    console.log(this.props)
    debugger;
    
    //this.props.onRemoveChild(this.props);
  }

  render(){
    return (
      <div className='editChildForm'>
        <form className='row form-group' onSubmit={ this.onSubmit }>
          <input className='col-8 form-control'
          	name = 'name'
            type = 'text'
            autoFocus = { this.props.autoFocus }
            onChange = { this.onChange }
            defaultValue = { this.props.name }
          />
          <input className='col-8 form-control'
            name = 'dob'
            type ='date'
            onChange = { this.onChange }
            defaultValue = { this.props.dob }
          />
          <button className='col-3 offset-1 btn btn-basic' type='submit'>Update</button>
          <input className='col-8 form-control'
          	name = 'emergencyContact'
            type = 'text'
            onChange = { this.onChange }
            defaultValue = { this.props.emergencyContact }
          />
          <button className='col-3 offset-1 btn btn-danger' onClick={ this.removeClickedChild }>Remove</button>
        </form>
      </div>
    )
  }
}

export default EditChildForm