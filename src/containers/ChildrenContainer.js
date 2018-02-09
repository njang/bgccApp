import React, { Component } from 'react';
import ChildModel from '../models/Child'
import Children from '../components/Children'
import AddChildForm from '../components/AddChild'
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid'

class ChildrenContainer extends Component {
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
    let childId = childBody.id
    function isUpdatedChild(child) {
      return child._id === childId;
    }
    let self = this
    ChildModel.update(childId, childBody).then((res) => {
      let children = self.state.children
      children.find(isUpdatedChild).body = childBody
      self.setState({
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
          editingChildId = { this.state.editingChildId }
          onEditChild = { this.editChild }
          onUpdateChild = { this.updateChild }
          onRemoveChild = { this.removeChild }/>
        <div className="col-sm-12 col-md-6 col-lg-4 offset-lg-8 offset-md-6 childCardOuter"> 
          <Link to = { '/children/add' }>
            <div className='childCardInner text-white'>
              <FontAwesomeIcon className="avatar" icon={ faPlusCircle } />
              <span className="nameDisplay">Add child</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default ChildrenContainer;
