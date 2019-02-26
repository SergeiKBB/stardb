import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './resident.module.scss';
import {getIdParser} from "../../../helpers/parsers";

class Resident extends Component {
  render() {
    const { resident } = this.props;
    const personId = resident && getIdParser(resident.url);
    return <Link to={`/people/${personId}`} className={`list-group-item ${styles.group_item}`} key={resident.url}>{resident.name}</Link>
  }
}

export default Resident;
