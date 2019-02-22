import { createSelector } from 'reselect';
import { PEOPLE_URL } from '../helpers/constants';

export const peopleSelector = state => state.people.list;
export const personSelector = (state, id) => {
  const url = PEOPLE_URL + id + '/';
  const { list } = state.people;
  return list.find(person => person.url === url);
};
