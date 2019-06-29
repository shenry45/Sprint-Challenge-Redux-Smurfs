import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import Header from './Header';
import Home from './Home';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <h1>The Smurfs</h1>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={SmurfList} />
          <Route path="/add" component={SmurfForm} />
          <footer>
            <p>The internet's best Smurf database.</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
