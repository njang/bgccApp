import React, {Component} from 'react'
import './Child.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faTimesCircle, faEdit } from '@fortawesome/fontawesome-free-solid'

const icons = require.context('../icons', true, /\.png$/)
const keys = icons.keys()
const iconsArray = keys.map(key => icons(key))

class ChildFullView extends Component {
  constructor() {
    super();
    this.state = {
      child: ''
    }
    this.removeClickedChild = this.removeClickedChild.bind(this);
    this.editClickedChild = this.editClickedChild.bind(this);
  }

  removeClickedChild() {
    this.props.onRemoveChild(this.props);
  }

  editClickedChild() {
    // toggle edit mode on and off
    let updatedState = !(this.state.inEditMode)
    this.setState({
      inEditMode: updatedState
    })
    this.props.onEditChild(this.props.child);
  }

  render(){
    return(
      <div className='col-10 offset-1 childCardOuter'>
        <div className='childCardInner row'>
          <div className='col-2'>
            <img className='avatar' alt='avatar' src={ iconsArray[this.props.icon] } />
          </div>
          <div className='nameDisplayFull col-5'>
            { this.props.name }
            <br />
            { this.props.dob }
          </div>
          <div className='col-1 h2 text-white'>
            <FontAwesomeIcon icon={ faEdit } onClick={ this.editClickedChild } />
          </div>
          <div className='col-1 h2 text-danger'>
            <FontAwesomeIcon icon={ faTimesCircle } onClick={this.removeClickedChild} />
          </div>
          <a href= { 'tel:' + this.props.emergencyContact } className='col-3 emergencyCallButton'>
            <FontAwesomeIcon icon={ faPhone } />
            {/* <p>Emergency</p> */}
          </a>

          {/*<div className='col col-3'>{this.props.child.name}</div>
          <span className='col col-3'>{this.props.child.dob}</span>
          <span className='col col-3'>{this.props.child.emergencyContact}</span>
          <button className='col col-2' onClick={ this.editClickedChild }>Edit</button>
          { this.props.editingChildId === this.props.child._id ? 
            <EditChildForm 
              autoFocus = { true } 
              onEditChild = { this.props.onEditChild }
              onUpdateChild = { this.props.onUpdateChild }
              id = { this.props.child._id }
              fillName = { this.props.child.name }
              fillDOB = { this.props.child.dob } 
              fillEmergencyContact = { this.props.child.emergencyContact }
            /> : '' 
          }
          <button className='col col-1 deleteButton' onClick={this.removeClickedChild}>(X)</button>*/}
        </div>
      </div>
    )
  }
}

export default ChildFullView