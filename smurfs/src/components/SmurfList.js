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
        {
          this.props.smurfs.length > 1 ?this.props.smurfs.map(smurf => <Smurf smurf={smurf} />)
          :
          <p>Send help! There are no more Smurfs.</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(smurfList);