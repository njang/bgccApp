import React, { Component } from 'react';
import ChildModel from '../models/Child'
import Children from '../components/Children'
import ChildFullView from '../components/ChildFullView'

class ChildContainer extends Component {
	constructor(){
    super()
    this.state = {
      child: '',
      editingChildId: null,
      editing: false
    }
    this.editChild = this.editChild.bind(this);
    this.updateChild = this.updateChild.bind(this);
    // this.removeChild = this.removeChild.bind(this);
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

  render(){
  	let self = this;
  	if (this.state.child === '') {
	  	ChildModel.getOne(this.props.match.params.id).then((res) => {
		  	let child = res.data[0]
		  	let renderedChild = (
	  			<ChildFullView 
            editingChildId = { this.state.editingChildId }
            onEditChild = { this.editChild }
            onUpdateChild = { this.updateChild }
            onRemoveChild = { this.removeChild }
            name = { child.name.first + ' ' + child.name.last }
            dob = { child.dob }
            emergencyContact = { child.emergencyContact }
            icon = { child.icon }
	  			/>
	  		)
	  		self.setState({
	  			child: renderedChild
	  		})
	  	})
  	}
    return(
      <div className="children row" index={this.props.match.params.id} >
        { this.state.child } 				
      </div>
    )
  }
}

export default ChildContainer;
