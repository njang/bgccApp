import React, {Component} from 'react'
import './Child.css';
import {Link} from 'react-router-dom';

const icons = require.context('../icons', true, /\.png$/)
const keys = icons.keys()
const iconsArray = keys.map(key => icons(key))

class ChildSimpleView extends Component {
  render(){
    return(
      <div className='col-sm-12 col-md-6 col-lg-4 childCardOuter' data-child-index={this.props.child._id}>
        <Link to={ '/children/' + this.props.child._id } >
          <div className='childCardInner'>
            <img className='avatar' alt='avatar' src={ iconsArray[this.props.child.icon] } />
            <span className='nameDisplay' >{ this.props.child.name.first }</span>  
          </div>
        </Link>
      </div>
    )
  }
}

export default ChildSimpleView