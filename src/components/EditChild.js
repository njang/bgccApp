import React, {Component} from 'react'
// import ChildModel from '../models/Child'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faTimesCircle, faEdit } from '@fortawesome/fontawesome-free-solid'

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
        <form onSubmit={ this.onSubmit }>
          <input
          	name = 'name'
            type = 'text'
            autoFocus = { this.props.autoFocus }
            onChange = { this.onChange }
            defaultValue = { this.props.name }
          />
          <input
            name = 'dob'
            type ='text'
            onChange = { this.onChange }
            defaultValue = { this.props.dob }
          />
          <input
          	name = 'emergencyContact'
            type = 'text'
            onChange = { this.onChange }
            defaultValue = { this.props.emergencyContact }
          />
          <button type='submit'>Update</button>
        </form>

        <div className='col-1 h2 text-danger'>
          <FontAwesomeIcon icon={ faTimesCircle } onClick={this.removeClickedChild} />
        </div>
      </div>
    )
  }
}

export default EditChildForm