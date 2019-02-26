import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getPlanets, getPlanetsBegin, getPlanetsError, getPlanetsSuccessful
} from '../actions/planetsActions';
import { fetchPlanets } from '../helpers/api';

export function* getPlanetsAsync({ payload: id }) {
  try {
    yield put(getPlanetsBegin());
    const { data } = yield call(fetchPlanets, id);
    yield put(getPlanetsSuccessful(data));
  } catch (error) {
    yield put(getPlanetsError(error))
  }
}

export function* watchGetPlanets() {
  yield takeLatest([getPlanets], getPlanetsAsync);
}
