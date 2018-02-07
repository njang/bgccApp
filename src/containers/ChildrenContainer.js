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
    this.removeChild = this.removeChild.bind(this);
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
  
  removeChild(child) {
    ChildModel.delete(child).then((res) => {
        let children = this.state.children.filter(function(child) {
          return child._id !== res.data._id
        });
        this.setState({children})
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
          children = { this.state.children } 
          onRemoveChild = { this.removeChild }/>
        <AddChildForm
          addChild={ this.addChild } />  
      </div>
    )
  }
}

export default ChildrenList;
