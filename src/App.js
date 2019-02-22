import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/HeaderComponent';
import PaginationPlanets from './features/paginationPlanets/paginationPlanetsContainer';
import Person from './features/person/PersonContainer';
import styles from './app.module.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={`${styles.app}`}>
          <Header title='Star Wars UI'/>
          <Route exact path='/' component={PaginationPlanets} />
          <Route path='/people/:id' component={Person} />
        </div>
      </Router>
    );
  }
}

export default App;
