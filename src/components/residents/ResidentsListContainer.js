import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResidents } from '../../actions/residentsActions';
import { residentsSelectorByPlanet } from "../../selectors/residentsSelectors";
import ResidentsListComponent from './ResidentsListComponent';

class ResidentsList extends Component {

  componentDidMount() {
    const { getResidents } = this.props;
    getResidents();
  };

  render() {
    const { residents } = this.props;
    return <ResidentsListComponent residents={residents} />
  }
}

const mapStateToProps = (state, { planetUrl }) => ({
  residents: residentsSelectorByPlanet(state, planetUrl)
});

const mapDispatchToProps = (dispatch, { residents, planetUrl }) => ({
  getResidents: () => dispatch(getResidents({residents, planetUrl}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResidentsList)
