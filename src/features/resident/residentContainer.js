import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResidentComponent from './residentComponent';

class Resident extends Component{
  render() {
    return <ResidentComponent />
  }
}

const mapStateToProps = (state, ownProps) => ({
  // resident: residentSelector(state)
})

export default connect()(Resident)
