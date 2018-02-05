import React, {Component} from 'react'

class Child extends Component {
  render(){
    return(
      <p data-todos-index={this.props.todo.id}>
        <span>{this.props.todo.body}</span>
      </p>
    )
  }
}

export default Child