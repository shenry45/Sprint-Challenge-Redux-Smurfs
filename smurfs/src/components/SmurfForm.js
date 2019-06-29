import React from 'react';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <form>
        <label>Name</label>
        <input
          name='name'
          value={this.state.name}
          onChange={this.handlerChange}
        ></input>
        <label>Age</label>
        <input
          name='age'
          value={this.state.age}
          onChange={this.handlerChange}
        ></input>
        <label>Height (cm)</label>
        <input
          name='height'
          value={this.state.height}
          onChange={this.handlerChange}></input>
        <button
          type='submit'
          //onClick={}
        >Add Smurf</button>
      </form>
    )
  }
}

export default SmurfForm;