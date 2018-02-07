import { Component } from 'react';
import axios from 'axios'

const url = "https://becky-gates-37982.herokuapp.com/api/v1/children"

class ChildModel extends Component {
	static create(child) {
	  let request = axios.post(url, child);
	  return request;
	}

	static delete(child){
	  let request = axios.delete(`${url}/${child._id}`)
	  return request
	}

  static all(){
		let request = axios.get(url)
    return request
  }
}

export default ChildModel;
