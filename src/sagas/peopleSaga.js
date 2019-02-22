import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getPeople, getPeopleBegin, getPeopleSuccessful, getPeopleError
} from '../actions/peolpeActions';
import { fetchPeople } from '../helpers/api';

export function*  getPeopleAsync() {
  try {
    yield put(getPeopleBegin());
    const people = yield call(fetchPeople);
    yield put(getPeopleSuccessful(people));
  } catch (error) {
    yield put(getPeopleError());
  }
}

export function* watchGetPeople() {
  yield takeLatest([getPeople], getPeopleAsync);
}
