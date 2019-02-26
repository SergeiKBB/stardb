import { handleActions } from 'redux-actions';
import {
  getPlanetsBegin, getPlanetsSuccessful, getPlanetsError
} from '../actions/planetsActions';
import {
  getResidentsBegin, getResidentsSuccessful, getResidentsError
} from '../actions/residentsActions';

const initialState = {
  list: [],
  residents: {
    list: {}
  },
  load: false,
  error: null
};

export default handleActions(
  {
    [getPlanetsBegin]: state => ({...state, load: true}),
    [getPlanetsSuccessful]: (state, { payload: { count, results: list } }) => ({...state, list, count, load: false}),
    [getPlanetsError]: (state, { payload }) => ({...state, error: payload}),
    [getResidentsSuccessful]: (state, { payload }) => getResidentsFunc(state, payload)
  },
  initialState
);

function getResidentsFunc(state, { residents, planetUrl }) {
  return {
    ...state,
    residents: {
      ...state.residents,
      list: {
        ...state.residents.list,
        [planetUrl]: residents
      }
    }
  }
}
