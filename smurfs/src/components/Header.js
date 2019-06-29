import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/list">Current Smurfs</Link>
      <Link to="/add">Add Smurf</Link>
    </header>
  )
}

export default Header;