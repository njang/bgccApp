import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import ChildModel from '../models/Child'
import ChildSimpleView from '../components/ChildSimpleView'

class ChildrenContainer extends Component {
  constructor(){
    super()
    this.state = {
      children: [],
      childID: '',
      childName: '',
      childIcon: '',
      singleView: false
    }
  }

  componentDidMount(){
    this.fetchData()
  }
  
  fetchData(){
    ChildModel.all().then( (res) => {
      this.setState ({
        children: res.data,
        child: '',
        childId: res.data._id,
        childName: res.data.name,
        childIcon: res.data.icon
      })
    })
  }

  render(){
    let children = this.state.children.map( (child) => {
      return (
        <ChildSimpleView
          key = { child._id }
          childId = { child._id }
          childName = { child.name.first }
          childIcon = { child.icon }
        />
      )
    })  
    
    return (
      <div className='childrenList'>
        <div className="children row">
          { children }
          {/* Display Add child button after all the children cards are displayed */}
          <div className='col-sm-12 col-md-6 col-lg-4 childCardOuter'>
            <Link to = { '/children/add' }>
              <div className='childCardInner'>
                <FontAwesomeIcon className='avatar' icon={ faPlusCircle } />
                <span className='nameDisplay' >Add child</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ChildrenContainer;
