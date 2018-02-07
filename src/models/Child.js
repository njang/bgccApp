import { Component } from 'react';
import axios from 'axios'

class ChildModel extends Component {
	static create(child) {
	  let request = axios.post("https://becky-gates-37982.herokuapp.com/api/v1/children", child);
	  return request;
	}

  static all(){
		let request = axios.get("https://becky-gates-37982.herokuapp.com/api/v1/children")
    return request
  }
}

export default ChildModel;
