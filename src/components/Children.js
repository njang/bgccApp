import React, {Component} from 'react'
import Child from './Child'

class Children extends Component {
  render(){
    let children = this.props.children.map( (child) => {
      return (
        <Child
          key = { child._id }
          child = { child }
          editingChildId={ this.props.editingChildId }
          onEditChild={ this.props.onEditChild }
          onUpdateChild={ this.props.onUpdateChild }
          onRemoveChild = { this.props.onRemoveChild }
        />
      )
    })
    return(
      <div className="children row">
        { children }
      </div>
    )
  }
}

export default Children