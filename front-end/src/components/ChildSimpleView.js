import React, {Component} from 'react'
import './ChildView.css';
import {Link} from 'react-router-dom';

const icons = require.context('../icons', true, /\.png$/)
const keys = icons.keys()
const iconsArray = keys.map(key => icons(key))

class ChildSimpleView extends Component {
  render(){
    return(
      <div className='col-sm-12 col-md-6 col-lg-4 childCardOuter'>
        <Link to={ '/children/' + this.props.childId } >
          <div className='childCardInner'>
            <img className='avatar' alt='avatar' src={ iconsArray[this.props.childIcon] } />
            <span className='nameDisplay' >{ this.props.childName }</span>  
          </div>
        </Link>
      </div>
    )
  }
}

export default ChildSimpleView