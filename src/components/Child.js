import React, {Component} from 'react'

class Child extends Component {
  render(){
    return(
      <div class="row" data-child-index={this.props.child.id}>
        <span class="col col-3">{this.props.child.name}</span>
        <span class="col col-3">{this.props.child.dob}</span>
        <span class="col col-3">{this.props.child.emergencyContact}</span>
      </div>
    )
  }
}

export default Child