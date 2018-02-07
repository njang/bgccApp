import React, {Component} from 'react'

class EditChidForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      child: event.target.value
    })
  }
  
  onSubmit(event){
    event.preventDefault()
    let child = this.state.child
    this.props.onUpdateChild(child)
    this.setState({
      child: ""
    })
  }
  render(){
    return (
      <div className='editChildForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a todo here ...'
            type='text'
            value={(this.state && this.state.child) || ''} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default EditChidForm