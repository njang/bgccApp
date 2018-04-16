import React, {Component} from 'react'
import ChildModel from '../models/Child'
import {Link, Redirect} from 'react-router-dom';

class AddChildForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      dob: '',
      emergencyContact: '',
      type: 'child',
      redirectToNewPage: false
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // Initialize redirect flag to false.
    // this.redirectToNewPage = false;
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
      // Check the flag to trigger redirect action.
      this.setState({ redirectToNewPage: true })
    })
  }

  render(){
    // Upon successful completion of submit, the page will be redirected to home.
    if (this.state.redirectToNewPage) {
      return (
        <Redirect to="/"/>
      )
    }
    return (
      <div className='childCardOuter row'>
        <div className='childCardInner col-8 offset-2 text-white'>
          <h2 className='text-center text-uppercase'>Enroll a child</h2>
          <form className='form-group' onSubmit={ this.onFormSubmit }>
            <div className='row my-3'>
              <label className='col-3 offset-2'>
                Name
              </label>
              <input className='col-5 form-control'
                name='name'
                type='text'
                onChange={ this.onInputChange }
                placeholder="Child's full name"
                value={ this.state.name } 
                required />
            </div>
            <div className='row my-3'>
              <label className='col-3 offset-2'>
                Date of birth
              </label>
              <input className='col-5 form-control'
                name="dob"
                type="date"
                value={this.state.dob}
                onChange={ this.onInputChange } 
                placeholder="mm/dd/yyyy"              
                required />
            </div>
            <div className='row my-3'>
              <label className='col-3 offset-2'>
                Emergency contact
              </label>
              <input className='col-5 form-control'
                name="emergencyContact"
                type="tel"
                value={ this.state.emergencyContact }
                onChange={ this.onInputChange } 
                placeholder="Phone number"
                required />
            </div>
            <div className='row my-3'>
              <button className='col-2 offset-3 btn bg-success text-white text-uppercase' type='submit'>Add</button>
              <Link className='col-2 offset-2 btn bg-secondary text-white' to={'/'} >
                  Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddChildForm