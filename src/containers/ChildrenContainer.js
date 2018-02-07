import React, { Component } from 'react';
import ChildModel from '../models/Child'
import Children from '../components/Children'
import AddChildForm from '../components/AddChild'

class ChildrenList extends Component {
  constructor(){
    super()
    this.state = {
      children: [],
      editingChildId: null,
      editing: false
    }
    this.addChild = this.addChild.bind(this);
    this.editChild = this.editChild.bind(this);
    this.updateChild = this.updateChild.bind(this);
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
  
  editChild(child){
    this.setState({
      editingChildId: child._id,
      editing: true
    })
  }

  updateChild(childBody) {
    let childId = this.state.editingchildId
    function isUpdatedChild(child) {
        return child._id === childId;
    }
    ChildModel.update(childId, childBody).then((res) => {
        let children = this.state.children
        children.find(isUpdatedChild).body = childBody
        this.setState({
          children: children, 
          editingChildId: null, 
          editing: false
        })
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

          editingChildId={this.state.editingChildId}
          onEditChild={this.editChild}
          onDeleteChild={this.deleteChild} 
          onUpdateChild={this.updateChild}
          
          onRemoveChild = { this.removeChild }/>
        <AddChildForm
          addChild={ this.addChild } />  
      </div>
    )
  }
}

export default ChildrenList;
