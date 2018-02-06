import { Component } from 'react';
import axios from 'axios'

class ChildModel extends Component {
  static all(){
    {/* let request = axios.get("http://127.0.0.1:8080/api/v1/children")*/}
	let request = axios.get("https://becky-gates-37982.herokuapp.com/api/v1/children")
    return request
  }
}

export default ChildModel;
