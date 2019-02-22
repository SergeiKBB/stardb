import React from 'react';
import styles from './planet.module.scss';
import Residents from '../residents/residentsListComponent';
import { Link } from 'react-router-dom';


export default function (props) {
  const {
    name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
    diameter, population, residents } = props;
  // const renderDropDown = (
  //   <div className={`btn-group dropright`}>
  //     <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //       Residents
  //     </button>
  //     <div className={`dropdown-menu ${styles.dropdown}`}>
  //       {residents.map(person => {
  //         const personId = person && urlParser(person.url);
  //         return person ? <Link to={`/people/${personId}`} className={`list-group-item ${styles.group_item}`} key={person.url}>{person.name}</Link> : null
  //       })}
  //     </div>
  //   </div>
  // );

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
          residents.length ? <Residents residents={residents} /> : 'Residents: none'
        }</li>
      </ul>
    </div>
  )
};

