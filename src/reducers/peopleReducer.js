import { handleActions } from 'redux-actions';
import {
  getPeopleBegin, getPeopleSuccessful, getPeopleError,
  getPersonBegin, getPersonSuccessful, getPersonError
} from '../actions/peolpeActions';

const initialState = {
  list: {},
  load: false,
  error: null
};

export default handleActions({
  [getPersonBegin]: state => ({...state, load: true }),
  [getPersonSuccessful]: (state, { payload }) => ({...state, load: false, list: { ...state.list, [payload.url]: { ...payload }}}),
  },
  initialState
);
