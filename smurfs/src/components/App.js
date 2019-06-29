import React, { Component } from 'react';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Smurfs</h1>
        <SmurfList />
        <hr />
        <SmurfForm />
        <footer>
          <p>The internet's best Smurf database.</p>
        </footer>
      </div>
    );
  }
}

export default App;
