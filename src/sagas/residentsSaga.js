import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getResidents, getResidentsBegin, getResidentsSuccessful, getResidentsError
} from '../actions/residentsActions';
import { fetchResidents } from '../helpers/api';

function* getResidentsAsync({ payload: { residents, planetUrl }}) {
  try {
    yield put(getResidentsBegin());
    const result = yield call(fetchResidents, residents);
    const dataResidents = result.map(({ data }) => data);
    yield put(getResidentsSuccessful({ residents: dataResidents, planetUrl }));
  } catch (error) {
    yield put(getResidentsError(error))
  }
}

export function* watchGetResidents() {
  yield takeEvery([getResidents], getResidentsAsync);
}
