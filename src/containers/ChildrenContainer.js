import React, { Component } from 'react';
import ChildModel from '../models/Child'
import Children from '../components/Children'
import AddChildForm from '../components/AddChild'

class ChildrenList extends Component {
  constructor(){
    super()
    this.state = {
      children: []
    }
    this.addChild = this.addChild.bind(this);
  }

  addChild(child) {
    let newChild = {
      child: child
    }
    ChildModel.create(newChild).then((res) => {
      let children = this.state.children
      let newChildren = children.push(res.data)
      this.setState({newChildren})
    })
  }
  
  componentDidMount(){
    this.fetchData()
  }
  
  fetchData(){
    ChildModel.all().then( (res) => {
      this.setState ({
        children: res.data,
        child: ''
      })
    })
  }

  render(){
    return (
      <div className="childrenList">
        <Children
          children={this.state.children} />
        <AddChildForm
          addChild={ this.addChild } />  
      </div>
    )
  }
}

export default ChildrenList;
