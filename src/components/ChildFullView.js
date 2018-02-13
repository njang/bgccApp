import React, {Component} from 'react'
import './Child.css';
import ChildModel from '../models/Child'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import EditChildForm from '../components/EditChild'
import ViewChildForm from '../components/ViewChild'
import { faPhone, faTimesCircle, faEdit } from '@fortawesome/fontawesome-free-solid'

const icons = require.context('../icons', true, /\.png$/)
const keys = icons.keys()
const iconsArray = keys.map(key => icons(key))

class ChildFullView extends Component {
  constructor() {
    super();
    this.state = {
      child: ''
    }
    this.removeClickedChild = this.removeClickedChild.bind(this);
    this.updateClickedChild = this.updateClickedChild.bind(this);
    this.editClickedChild = this.editClickedChild.bind(this);
  }

  removeClickedChild() {
    console.log(this.props)
    this.props.onRemoveChild(this.props);
  }

  editClickedChild() {
    let self = this
    ChildModel.getOne(this.props.id).then((res) => {
      let child = res.data[0]
      self.setState({
        child: child
      })
    })
    // toggle edit mode on and off
    let updatedState = !(this.state.inEditMode)
    this.setState({
      inEditMode: updatedState
    })
    this.props.onEditChild(this.props.child);
  }

  updateClickedChild(childBody) {
    let childId = childBody.id
    // function isUpdatedChild(child) {
    //   return child._id === childId;
    // }
    let self = this    
    ChildModel.update(childId, childBody)
    // ChildModel.update(childId, childBody).then((res) => {
    //   let children = self.state.children
    //   // children.find(isUpdatedChild).body = childBody
    //   self.setState({
    //     child: '',
    //     // children: children, 
    //     // editingChildId: null, 
    //     // editing: false,
    //     inEditMode: false
    //   })
    // })
    self.setState({
      child: '',
      inEditMode: false
    })
  }

  render(){
    let displayElementX = (
      <div>
        { this.props.name }
        <br />
        { this.props.dob } 
        <br />
        { this.props.emergencyContact }
      </div>
    );

    let displayElement = (
      <ViewChildForm 
        name = { this.props.name }
        dob = { this.props.dob }
        emergencyContact = { this.props.emergencyContact }
      />
    );

    if (this.state.inEditMode === true ) {
      displayElement = (
        <EditChildForm
          id = { this.props.id }
          name = { this.props.name }
          dob = { this.props.dob }
          emergencyContact = { this.props.emergencyContact }
          onUpdateChild = { this.updateClickedChild }
          // id = { this.state.child._id }
          // name = { this.state.child.name.first + ' ' + this.state.child.name.last }
          // dob = { this.state.child.dob }
          // emergencyContact = { this.state.child.emergencyContact }
          // onUpdateChild = { this.updateChild }
        /> 
      )
    } 

    return(
      <div className='col-10 offset-1 col-sm-12 offset-sm-0 childCardOuter'>
        <div className='childCardInner row'>
          <div className='col-2'>
            <img className='avatar' alt='avatar' src={ iconsArray[this.props.icon] } />
          </div>
          <div className='nameDisplayFull col-7'>

            { displayElement }
            
          </div>
          <div className='col-1 h2 text-white'>
            <FontAwesomeIcon icon={ faEdit } onClick={ this.editClickedChild } />
          </div>
          {/*<div className='col-1 h2 text-danger'>
                      <FontAwesomeIcon icon={ faTimesCircle } onClick={this.removeClickedChild} />
                    </div>*/}
          <a href= { 'tel:' + this.props.emergencyContact } className='col-1 emergencyCallButton'>
            <FontAwesomeIcon icon={ faPhone } />
            {/* <p>Emergency</p> */}
          </a>
        </div>
      </div>
    )
  }
}

export default ChildFullView