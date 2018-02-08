import React, {Component} from 'react'
import './Child.css';
import EditChildForm from './EditChild'
// import Icons from '../icons/001-deer.png'

const icons = require.context('../icons', true, /\.png$/)
const keys = icons.keys()
const iconsArray = keys.map(key => icons(key))

class Child extends Component {
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
    let index = Math.round(Math.random()*11);
    return(
      <div className="col-sm-12 col-md-6 col-lg-4 childCardOuter" data-child-index={this.props.child._id}>
        <div className="childCardInner">
            
          <img className="avatar" src={ iconsArray[this.props.child.icon] } />
          <span className="nameDisplay" >{ this.props.child.name.first }</span>
          
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

export default Child