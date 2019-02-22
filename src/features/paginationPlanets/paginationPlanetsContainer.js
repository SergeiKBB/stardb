import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaginationPlanetsComponent from './paginationPlanetsComponent';
import { getPlanets } from '../../actions/planetsActions';
import { planetsSelector, countSelector } from '../../selectors/planetsSelectors';

class PaginationPlanets extends Component {
  componentDidMount() {
    const { getPlanets, planets } = this.props;

    if(!planets.length) {
      getPlanets();
    }
  }

  render() {
    const { planets, count, changePage } = this.props;
    return <PaginationPlanetsComponent planets={planets} count={count} changePage={changePage} />
  }
}

const mapStateToProps = (state) => ({
  planets: planetsSelector(state),
  count: countSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (page) => dispatch(getPlanets(page)),
  changePage: (page) => dispatch(getPlanets(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationPlanets);
