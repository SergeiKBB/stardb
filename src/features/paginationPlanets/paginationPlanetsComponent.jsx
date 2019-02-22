import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import Planet from '../../components/planet/PlanetComponent';
import styles from './paginationPlanets.module.scss';
import 'rc-pagination/assets/index.css';

class PaginationPlanets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  };

  onChangePage = (page) => {
    const { changePage } = this.props;
    this.setState({
      page
    });
    changePage(page);
  };

  render() {
    const { planets, count } = this.props;
    const { page } = this.state;
    return <div className={styles.pagination}>
      <div className={styles.planets_list}>{
        planets.map(planet => <Planet {...planet} key={planet.url} />)
      }</div>
      <Pagination
        total={count}
        showLessItems
        showTitle={false}
        current={page}
        onChange={this.onChangePage}
      />
    </div>
  }
}

export default PaginationPlanets;
