import { combineReducers } from 'redux';
import planets from './reducers/planetsReducer';
import people from './reducers/peopleReducer';

export default combineReducers({
  planets,
  people
});
