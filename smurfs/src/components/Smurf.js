import React from 'react';

const Smurf = props => {  
  return (
    <div>
      <p>Name</p>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  )
}

export default Smurf;