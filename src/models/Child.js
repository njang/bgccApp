import { Component } from 'react';
import axios from 'axios'

const url = "https://becky-gates-37982.herokuapp.com/api/v1/children"

class ChildModel extends Component {
	static create(child) {
	  let request = axios.post(url, child);
	  return request;
	}

	static update(childId, childBody) {
	let request = axios.put(`${url}/${childId}`, { body: childBody })
	return request
	}

	static delete(childId){
	  let request = axios.delete(`${url}/${childId}`)
	  return request
	}

  static getOne(childId){
		let request = axios.get(`${url}/${childId}`)
    return request
  }

  static all(){
		let request = axios.get(url)
    return request
  }
}

export default ChildModel;
