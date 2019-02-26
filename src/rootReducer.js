import { combineReducers } from 'redux';
import planets from './reducers/planetsReducer';
import people from './reducers/peopleReducer';
import residents from './reducers/residentsReducer';

export default combineReducers({
  planets,
  people,
  residents
});
