import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export class Landing extends React.Component {
  render() {
    if (this.props.user) {
      return (
        <Redirect to="/library" />
      );
    }
    return (
      <div>
        Home-page coming soon! Click Library or Recommendations to view mockups.
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.app.authentication.user
});

export default connect(mapStateToProps)(Landing);