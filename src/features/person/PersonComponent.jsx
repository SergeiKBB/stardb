import React from 'react';
import styles from './person.module.scss';
import { Link } from 'react-router-dom';

function PersonComponent(props) {
  const { person: { name, birth_year, gender, height, mass, eye_color, hair_color } } = props;

  return (
      <div className={`${styles.person}`}>
        <ul className={`list-group ${styles.list}`}>
          <li className='list-group-item'>
            {`Name: ${name}`}
          </li>
          <li className='list-group-item'>
            {`Birth year: ${birth_year}`}
          </li>
          <li className='list-group-item'>
            {`Gender: ${gender}`}
          </li>
          <li className='list-group-item'>
            {`Height: ${height}`}
          </li>
          <li className='list-group-item'>
            {`Mass: ${mass}`}
          </li>
          <li className='list-group-item'>
            {`Eye color: ${eye_color}`}
          </li>
          <li className='list-group-item'>
            {`Hair color: ${hair_color}`}
          </li>
        </ul>
        <Link to='/' className={`btn btn-secondary ${styles.back}`}>Back</Link>
      </div>
  )
}

export default PersonComponent;
