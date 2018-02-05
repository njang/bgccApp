import React, { Component } from 'react';
import ChildModel from '../models/Child'
import Children from '../components/Children'

class ChildrenList extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    ChildModel.all().then( (res) => {
      this.setState ({
        todos: res.data.todos,
        todo: ''
      })
    })
  }
  render(){
    return (
      <div className="todosComponent">
        <Children
          todos={this.state.todos} />
      </div>
    )
  }
}

export default ChildrenList;
