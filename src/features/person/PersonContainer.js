import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../../actions/peolpeActions';
import Person from './PersonComponent';
import { personSelector } from '../../selectors/peopleSelectors';

class PersonContainer extends Component {

  componentDidMount() {
    const { onGetPerson, personId, person } = this.props;
    if(!person) {
      onGetPerson(personId);
    }
  }

  render() {
    const { person } = this.props;
    return person ? <Person person={person} /> : null
  }
}

const mapStateToProps = (state, { match: { params: { id }} }) => ({
  personId: id,
  person: personSelector(state, id)
});

const mapDispatchToProps = dispatch => ({
  onGetPerson: (id) => dispatch(getPerson(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
