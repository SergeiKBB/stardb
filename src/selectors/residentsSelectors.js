import { createSelector } from 'reselect';

export const residentsSelector = state => state.residents.list;
export const residentsSelectorByPlanet = (state, planetUrl) => state.residents.list[planetUrl];
