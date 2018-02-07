import React, {Component} from 'react'
import EditChildForm from './EditChild'

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
    return(
      <div className="row" data-child-index={this.props.child._id}>
        <span className="col col-3">{this.props.child.name}</span>
        <span className="col col-3">{this.props.child.dob}</span>
        <span className="col col-3">{this.props.child.emergencyContact}</span>
        <button className="col col-2" onClick={ this.editClickedChild }>{this.props.child.name}</button>
        {/* this.props.editingChildId === this.props.child._id ? `${this.props.child.name} is being edited` : '' */}
        { this.props.editingChildId === this.props.child._id ? <EditChildForm autoFocus={true} onEditChild={this.props.onEditChild} buttonName="Update child!"/> : '' }
        <button className='col col-1 deleteButton' onClick={this.removeClickedChild}>(X)</button>
      </div>
    )
  }
}

export default Child