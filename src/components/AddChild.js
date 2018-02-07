import React, {Component} from 'react'

class AddChildForm extends Component {
  constructor(){
    super()
    this.state = {
      todo: ''
    }
    // Don't let this part scare you; it does something simple. 
    // When we go into a new function, that normally changes our context therefore changing what 'this' points to.
    // The next to lines use the function .bind so that 'this' in onInputChange and onFormSubmit still points to 'this' here in CreateTodoForm. More on bind below: 
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({
      todo: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let todo = this.state.todo
    this.props.addChild(todo)
    this.setState({
      todo: ""
    })
  }
  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Add child to classroom</h2>
        <form onSubmit={ this.onFormSubmit }>
          <input
            onChange={ this.onInputChange }
            placeholder="Add child's name"
            type='text'
            value={this.state.todo} 
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddChildForm