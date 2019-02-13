import React, { Component } from 'react';
import Header from './components/header/HeaderComponent';
import Planet from './features/planet/PlanetContainer';

const obj = {
  "name": "Alderaan",
  "rotation_period": "24",
  "orbital_period": "364",
  "diameter": "12500",
  "climate": "temperate",
  "gravity": "1 standard",
  "terrain": "grasslands, mountains",
  "surface_water": "40",
  "population": "2000000000",
  "residents": [
    "https://swapi.co/api/people/5/",
    "https://swapi.co/api/people/68/",
    "https://swapi.co/api/people/81/"
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title='Star Wars UI'/>
        <Planet {...obj}/>
      </div>
    );
  }
}

export default App;
