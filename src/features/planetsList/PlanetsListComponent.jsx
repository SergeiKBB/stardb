import React, { Component } from 'react';
import Planet from '../../components/planet/PlanetComponent';
import styles from './planetsList.module.scss';

export default class PlanetsListComponent extends Component {
  render() {
    const { planets, planetsLoad } = this.props;
    const render =
      <div className={`${styles.planets_list}`}>
        {planets.map(planet => <Planet {...planet} key={planet.url} />)}
      </div>;

    return planetsLoad ? null : render;
  }
};

