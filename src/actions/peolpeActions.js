import { createAction } from "redux-actions";

export const getPeople = createAction('GET_PEOPLE');
export const getPeopleBegin = createAction('GET_PEOPLE_BEGIN');
export const getPeopleSuccessful = createAction('GET_PEOPLE_SUCCESSFUL');
export const getPeopleError = createAction('GET_PEOPLE_ERROR');

export const getPerson = createAction('GET_PERSON');
export const getPersonBegin = createAction('GET_PERSON_BEGIN');
export const getPersonSuccessful = createAction('GET_PERSON_SUCCESSFUL');
export const getPersonError = createAction('GET_PERSON_ERROR');

