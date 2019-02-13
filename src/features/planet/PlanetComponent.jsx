import React from 'react';
import styles from './planet.scss';

export default function (props) {
  const {
    name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
    diameter, population, residents } = props;

  return (
    <div className={`${styles.planet}`}>
      <h2>{name}</h2>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <span>Rotation period:</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className='list-group-item'>
          <span>Orbital period:</span>
          <span>{orbitalPeriod}</span>
        </li>
        <li className='list-group-item'>
          <span>Diameter:</span>
          <span>{diameter}</span>
        </li>
        <li className='list-group-item'>
          <span>Population:</span>
          <span>{population}</span>
        </li>
        <li className='list-group-item'>
          <span>Residents:</span>
          <ul className='list-group'>
            {residents.map(resident => (<li className='list-group-item list-group-item-action'>{resident}</li>))}
          </ul>
        </li>
      </ul>
    </div>
  )
};
