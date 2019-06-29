import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';

class smurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => <Smurf smurf={smurf} />)}
        <p>Here are the Smurfs</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(smurfList);