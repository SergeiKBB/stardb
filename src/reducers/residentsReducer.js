import { handleActions } from 'redux-actions';
import {
  getResidentsBegin, getResidentsSuccessful, getResidentsError
} from '../actions/residentsActions';

const initialState = {
  list: {}
};

export default handleActions({
  [getResidentsSuccessful]: (state, { payload: { residents, planetUrl } }) => ({ ...state, list: { ...state.list, [planetUrl]: residents }})
},
  initialState
)
