import React from 'react';
import Resident from './resident/residentContainer';

const Residents = props => {
  const { residents } = props;
  return residents.map(resident => <Resident resident={resident} />)
};

export default Residents;
