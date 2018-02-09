import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import ChildModel from '../models/Child'
import Children from '../components/Children'

class ChildrenContainer extends Component {
  constructor(){
    super()
    this.state = {
      children: []
    }
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
          children = { this.state.children } />
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
