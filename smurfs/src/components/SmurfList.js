import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';

class smurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    this.props.fetchingSmurfs && (<p>Loading</p>)

    return (
      <div>
        {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(smurfList);