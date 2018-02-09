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
    // this.editChild = this.editChild.bind(this);
    // this.updateChild = this.updateChild.bind(this);
    // this.removeChild = this.removeChild.bind(this);
  }
  render(){
  	let self = this;
  	if (this.state.child === '') {
	  	ChildModel.getOne(this.props.match.params.id).then((res) => {
		  	console.log(res.data[0])
		  	let child = res.data[0]
		  	let renderedChild = (
	  			<ChildFullView 
	  			  name = { child.name.first + ' ' + child.name.last }
	  			  icon = { child.icon }
	  			  emergencyContact = { child.emergencyContact }
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
