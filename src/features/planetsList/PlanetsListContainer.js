import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanetsListComponent from './PlanetsListComponent';
import { getPlanets } from '../../actions/planetsActions';
import { getPeople } from '../../actions/peolpeActions';
import { planetsPeopleSelector } from '../../selectors/planetsSelectors';

class PlanetsListContainer extends Component {

  componentDidMount() {
    const { onGetPlanets, onGetPeople, peopleLoad } = this.props;
    onGetPeople();
    if(!peopleLoad) {
      onGetPlanets();
    }
  }

  render() {
    const { planets, planetsLoad } = this.props;
    return <PlanetsListComponent planets={planets} planetsLoad={planetsLoad}/>;
  }
}

const mapStateToProps = state => ({
  planets: planetsPeopleSelector(state),
  planetsLoad: state.planets.load,
  peopleLoad: state.people.load
});

const mapDispatchToProps = dispatch => ({
  onGetPlanets: () => dispatch(getPlanets()),
  onGetPeople: () => dispatch(getPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsListContainer);
