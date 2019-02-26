import React from 'react';
import styles from './planet.module.scss';
import Residents from '../residents/ResidentsListContainer';

export default function (props) {
  const {
    name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
    diameter, population, residents, url } = props;
  return (
    <div className={`${styles.planet}`}>
      <h2 className='text-center'>{name}</h2>
      <ul className='list-group'>
        <li className='list-group-item'>
          <span>Rotation period:</span>
          <span className={`${styles.value}`}>{rotationPeriod}</span>
        </li>
        <li className='list-group-item'>
          <span>Orbital period:</span>
          <span className={`${styles.value}`}>{orbitalPeriod}</span>
        </li>
        <li className='list-group-item'>
          <span>Diameter:</span>
          <span className={`${styles.value}`}>{diameter}</span>
        </li>
        <li className='list-group-item'>
          <span>Population:</span>
          <span className={`${styles.value}`}>{population}</span>
        </li>
        <li className='list-group-item'>{
          residents.length ? <Residents residents={residents} planetUrl={url}/> : <div className='btn'>Residents: none</div>
        }</li>
      </ul>
    </div>
  )
};

