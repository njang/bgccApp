import React, {Component} from 'react'
import './Child.css';
import EditChildForm from './EditChild'
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/fontawesome-free-solid'

const icons = require.context('../icons', true, /\.png$/)
const keys = icons.keys()
const iconsArray = keys.map(key => icons(key))

class ChildFullView extends Component {
  constructor() {
    super();
    this.removeClickedChild = this.removeClickedChild.bind(this);
    this.editClickedChild = this.editClickedChild.bind(this);
  }

  removeClickedChild() {
    this.props.onRemoveChild(this.props.child);
  }

  editClickedChild() {
    this.props.onEditChild(this.props.child);
  }

  render(){
    return(
      <div className="col-12 childCardOuter">
        <div className="childCardInner row">
          <img className="avatar col-2" src={ iconsArray[this.props.icon] } />
          <div className="nameDisplayFull col-7" >{ this.props.name }</div>
          <a href= { "tel:" + this.props.emergencyContact } className="col-3 emergencyCallButton">
            <FontAwesomeIcon icon={ faPhone } />
            <p>Emergency</p>
          </a>
          {/*<div className="col col-3">{this.props.child.name}</div>
          <span className="col col-3">{this.props.child.dob}</span>
          <span className="col col-3">{this.props.child.emergencyContact}</span>
          <button className="col col-2" onClick={ this.editClickedChild }>Edit</button>
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