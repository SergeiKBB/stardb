import { handleActions } from 'redux-actions';
import {
  getPlanetsBegin, getPlanetsSuccessful, getPlanetsError
} from '../actions/planetsActions';

const initialState = {
  list: [],
  load: false,
  error: null
};

export default handleActions(
  {
    [getPlanetsBegin]: state => ({...state, load: true}),
    [getPlanetsSuccessful]: (state, { payload: { count, results: list } }) => ({...state, list, count, load: false}),
    [getPlanetsError]: (state, { payload }) => ({...state, error: payload})
  },
  initialState
);
