import React, {Component} from 'react'
import Child from './Child'

class Children extends Component {
  render(){
    let children = this.props.todos.map( (todo) => {
      return (
        <Child
          key={todo._id}
          todo={todo}/>
      )
    })
    return(
      <div className="todos">
        {children}
      </div>
    )
  }
}

export default Children