import React from 'react';
import styled from 'styled-components';

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
      <Form>
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
      </Form>
    )
  }
}

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;

  button {
    margin: 10px 0;
  }
`;

export default SmurfForm;