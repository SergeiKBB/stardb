import { createAction } from 'redux-actions';

export const getResidents = createAction('GET_RESIDENTS');
export const getResidentsBegin = createAction('GET_RESIDENTS_BEGIN');
export const getResidentsSuccessful = createAction('GET_RESIDENTS_SUCCESSFUL');
export const getResidentsError = createAction('GET_RESIDENTS_ERROR');
