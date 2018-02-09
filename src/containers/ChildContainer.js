import React, { Component } from 'react';
import ChildModel from '../models/Child'
import EditChildForm from '../components/EditChild'
// import Children from '../components/Children'
import ChildFullView from '../components/ChildFullView'
import { Redirect } from 'react-router-dom';

class ChildContainer extends Component {
	constructor(){
    super()
    this.state = {
      child: '',
      childObject: '',
      editingChildId: null,
      editing: false,
      redirectToNewPage: false,
      inEditMode: false
    }
    this.editChild = this.editChild.bind(this);
    this.updateChild = this.updateChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
  }

  editChild(child){
    this.setState({
      // editingChildId: child._id,
      editing: true
    })
    let updatedState = !(this.state.inEditMode)
    this.setState({
      inEditMode: updatedState
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

  removeChild() {
    ChildModel.delete(this.props.match.params.id).then((res) => {
      this.setState({ redirectToNewPage: true })      
    });
  }

  render(){
  	let self = this;
    let child;
    let editChildForm; 

    // Upon successful completion of submit, the page will be redirected to home.
    if (this.state.redirectToNewPage) {
      return (
        <Redirect to="/"/>
      )
    }
    if (this.state.child === '') {
      ChildModel.getOne(this.props.match.params.id).then((res) => {
        child = res.data[0]
        let renderedChild = (
          <ChildFullView 
            editingChildId = { this.state.editingChildId }
            onEditChild = { this.editChild }
            onUpdateChild = { this.updateChild }
            onRemoveChild = { this.removeChild }
            id = { child._id }
            name = { child.name.first + ' ' + child.name.last }
            dob = { child.dob }
            emergencyContact = { child.emergencyContact }
            icon = { child.icon }
          />
        )
        self.setState({
          child: renderedChild,
          childObject: child
        })
      })
    }

    // console.log(this.state.inEditMode)
    if (this.state.inEditMode === true) {
      console.log(this.state.childObject)
      editChildForm = (
        <EditChildForm 
          fillName={ this.state.childObject.name.first + ' ' + this.state.childObject.name.last } 
          fillDOB={ this.state.childObject.dob } 
          fillEmergencyContact={ this.state.childObject.emergencyContact } 
        />
      )
    }

    return(
      <div className="children row" index={this.props.match.params.id} >
        { this.state.child }
        { editChildForm } 			
      </div>
    )
  }
}

export default ChildContainer;
