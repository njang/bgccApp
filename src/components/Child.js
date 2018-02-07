import React, {Component} from 'react'

class Child extends Component {
  constructor() {
    super();
    this.removeClickedChild = this.removeClickedChild.bind(this);
  }
  removeClickedChild() {
    this.props.onRemoveChild(this.props.child);
  }
  render(){
    return(
      <div className="row" data-child-index={this.props.child._id}>
        <span className="col col-3">{this.props.child.name}</span>
        <span className="col col-3">{this.props.child.dob}</span>
        <span className="col col-3">{this.props.child.emergencyContact}</span>
        <span className='col col-3 deleteButton' onClick={this.removeClickedChild}>(X)</span>
      </div>
    )
  }
}

export default Child