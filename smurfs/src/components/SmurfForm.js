import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addSmurf } from '../actions/index';

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

  handlerAddSmurf = e => {
    e.preventDefault();

    this.props.addSmurf(this.state);
  }
  
  render() {
    return (
      <Form onSubmit={this.handlerAddSmurf}>
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
          onClick={this.handlerAddSmurf}
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

export default connect(null, { addSmurf })(SmurfForm);