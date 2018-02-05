import { Component } from 'react';
import axios from 'axios'

class ChildModel extends Component {
  static all(){
    let request = axios.get("https://super-crud.herokuapp.com/todos")
    return request
  }
}

export default ChildModel;
