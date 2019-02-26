import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getPeople, getPeopleBegin, getPeopleSuccessful, getPeopleError,
  getPerson, getPersonBegin, getPersonSuccessful, getPersonError
} from '../actions/peolpeActions';
import { fetchPeople, fetchPerson } from '../helpers/api';

export function*  getPeopleAsync() {
  try {
    yield put(getPeopleBegin());
    const people = yield call(fetchPeople);
    yield put(getPeopleSuccessful(people));
  } catch (error) {
    yield put(getPeopleError());
  }
}

export function* getPersonAsync({ payload: id }) {
  try {
    yield put(getPersonBegin());
    const { data: person } = yield call(fetchPerson, id);
    yield put(getPersonSuccessful(person));
  } catch (e) {
    yield put(getPersonError(e))
  }
}

export function* watchGetPeople() {
  yield takeLatest([getPeople], getPeopleAsync);
  yield takeLatest([getPerson], getPersonAsync);
}
