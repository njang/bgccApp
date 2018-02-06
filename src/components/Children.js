import React, {Component} from 'react'
import Child from './Child'

class Children extends Component {
  render(){
    let children = this.props.children.map( (child) => {
      return (
        <Child
          key = { child._id }
          child = { child }
        />
      )
    })
    return(
      <div className="children">
        { children }
      </div>
    )
  }
}

export default Children