import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../actions/peolpeActions';
import Person from './PersonComponent';
import { personSelector } from '../../selectors/peopleSelectors';

class PersonContainer extends Component {

  componentDidMount() {
    const { onGetPeople } = this.props;
    onGetPeople();
  }

  render() {
    const { person } = this.props;
    console.log(person);
    return <Person person={person} />
  }
}

const mapStateToProps = (state, { match }) => ({
  person: personSelector(state, match.params.id)
});

const mapDispatchToProps = dispatch => ({
  onGetPeople: () => dispatch(getPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
