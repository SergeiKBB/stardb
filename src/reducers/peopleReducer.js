import { handleActions } from 'redux-actions';
import {
  getPeopleBegin, getPeopleSuccessful, getPeopleError,
  getPersonBegin, getPersonSuccessful, getPersonError
} from '../actions/peolpeActions';

const initialState = {
  list: [],
  load: false,
  error: null,
  residents: {
    list: [],
    load: false,
    error: null
  }
};

export default handleActions({
  [getPeopleBegin]: state => ({...state, load: true}),
  [getPeopleSuccessful]: (state, { payload }) => ({...state, list: payload, load: false}),
  [getPeopleError]: (state, { payload }) => ({...state, error: payload}),
  [getPersonBegin]: state => ({...state, residents: { ...state.residents, load: true }}),
  [getPersonSuccessful]: (state, { payload }) => ({...state, residents: { ...state.residents, load: false }}),
  [getPersonBegin]: state => ({...state, residents: { ...state.residents, load: true }}),
  },
  initialState
);
