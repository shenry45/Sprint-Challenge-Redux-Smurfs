import React from 'react';
import styled from 'styled-components';

const Smurf = props => {  
  return (
    <SmurfDiv>
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </SmurfDiv>
  )
}

const SmurfDiv = styled.div`
  cursor: pointer;
  background: lightgrey;
  padding: 15px;

  &:hover {
    border: 1px solid black;
  }
`;

export default Smurf;