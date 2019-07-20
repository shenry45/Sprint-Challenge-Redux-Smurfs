import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions/index';
import Smurf from './Smurf';

class smurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  handlerDeleteSmurf = e => {
    e.preventDefault();

    if (this.props.smurfs.length > 1) {
      const randSmurfID = this.props.smurfs[Math.ceil(Math.random(this.props.smurfs.length - 1))].id;
  
      this.props.deleteSmurf(randSmurfID);
    } else {
      console.log('The power has gone to your head. Your killing power has been revoked!');
    }

  }

  render() {
    this.props.fetchingSmurfs && (<p>Loading</p>)

    return (
      <div>
        {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        <button onClick={this.handlerDeleteSmurf}>Delete Random Smurf</button>
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

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(smurfList);