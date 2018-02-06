import React, {Component} from 'react'

class Child extends Component {
  render(){
    return(
      <div class="row" data-child-index={this.props.child.id}>
        <span class="col col-2">{this.props.child.name}</span>
        <span class="col col-4">{this.props.child.dob}</span>
      </div>
    )
  }
}

export default Child