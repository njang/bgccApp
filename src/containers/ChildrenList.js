import React, { Component } from 'react';
import ChildModel from '../models/Child'
import Children from '../components/Children'

class ChildrenList extends Component {
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
        children: res.data.children,
        child: ''
      })
    })
  }
  render(){
    return (
      <div className="childrenList">
        <Children
          children={this.state.children} />
      </div>
    )
  }
}

export default ChildrenList;
