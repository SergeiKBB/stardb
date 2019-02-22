import { createAction } from 'redux-actions';

export const getPlanets = createAction('GET_PLANETS');
export const getPlanetsBegin = createAction('GET_PLANETS_BEGIN');
export const getPlanetsSuccessful = createAction('GET_PLANETS_SUCCESSFUL');
export const getPlanetsError = createAction('GET_PLANETS_ERROR');

