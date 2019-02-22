import { fork } from 'redux-saga/effects';
import { watchGetPlanets } from './sagas/planetsSaga';
import { watchGetPeople } from './sagas/peopleSaga';

export default function* rootSaga() {
  yield fork(watchGetPlanets)
  yield fork(watchGetPeople)
};
