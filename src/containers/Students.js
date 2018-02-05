import React, { Component } from 'react';
import Student from '../components/Student'

class Students extends Component {
  render() {
    return (
      <div className="studentsList">
				Student list goes here
				<Student />
      </div>
    )
  }
}

export default Students;
