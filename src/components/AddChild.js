import React, {Component} from 'react'
import ChildModel from '../models/Child'

class AddChildForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      dob: '',
      emergencyContact: '',
      type: 'child'
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  onFormSubmit(event){
    event.preventDefault()
    let self = this
    let nameFirst = self.state.name.split(' ')[0]
    let nameLast = self.state.name.split(' ')[1]
    let childObject = {
      name: {
        first: nameFirst,
        last: nameLast
      },
      dob: self.state.dob,
      emergencyContact: self.state.emergencyContact,
      icon: Math.round(Math.random()*11),
      type: 'child'
    }

    ChildModel.create(childObject).then((res) => {
      this.setState({
        name: '',
        dob: '',
        emergencyContact: ''
      })
    })
  }
  render(){
    return (
       <div>
        <h2 className='text-center'>Add a child to classroom</h2>
        <form onSubmit={ this.onFormSubmit }>
          <div className='row'>
            <label className='col-2 offset-3'>
              Name
            </label>
            <input className='col-4'
              name='name'
              type='text'
              onChange={ this.onInputChange }
              placeholder="Add child's name"
              value={ this.state.name } 
              required />
          </div>
          <div className='row'>
            <label className='col-2 offset-3'>
              Date of birth
            </label>
            <input className='col-4'
              name="dob"
              type="text"
              value={this.state.dob}
              onChange={ this.onInputChange } 
              required />
          </div>
          <div className='row'>
            <label className='col-2 offset-3'>
              Emergency contact
            </label>
            <input className='col-4'
              name="emergencyContact"
              type="text"
              value={ this.state.emergencyContact }
              onChange={ this.onInputChange } 
              required />
          </div>
          <button className='text-center' type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddChildForm