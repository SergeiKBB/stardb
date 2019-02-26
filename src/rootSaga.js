import { fork } from 'redux-saga/effects';
import { watchGetPlanets } from './sagas/planetsSaga';
import { watchGetPeople } from './sagas/peopleSaga';
import { watchGetResidents } from './sagas/residentsSaga';

export default function* rootSaga() {
  yield fork(watchGetPlanets)
  yield fork(watchGetPeople)
  yield fork(watchGetResidents)
};
