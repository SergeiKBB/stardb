import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResidentComponent from './residentComponent';
import { urlParser } from '../../../helpers/parsers';
import { getPeople } from '../../../actions/peolpeActions';


class Resident extends Component {
  render() {
    this.props.e();
    return <ResidentComponent />
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, { resident }) => ({
  getResident: () => dispatch()

});


export default connect(mapStateToProps, mapDispatchToProps)(Resident);

