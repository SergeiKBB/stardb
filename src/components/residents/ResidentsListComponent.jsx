import React from 'react';
import Resident from './resident/residentComponent';
import styles from './residents.module.scss';

const Residents = props => {
  const { residents } = props;
  const renderDropDown = (
    <div className={`btn-group dropright`}>
      <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Residents
      </button>
      <div className={`dropdown-menu ${styles.dropdown}`}>
        {
          residents && residents.map(resident => <Resident resident={resident}  key={resident.url} />)
        }
      </div>
    </div>
  );
  return residents ? renderDropDown : null
};

export default Residents;
