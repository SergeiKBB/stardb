import axios from "axios";
import { PLANETS_URL, PEOPLE_URL } from './constants';
import { getIdParser } from "./parsers";

export function fetchPlanets(page = 1) {
  return axios.get(`${PLANETS_URL}?page=${page}`);
}

export function fetchPeople(page = 1) {
  return axios.get(`${PEOPLE_URL}?page=${page}`);
}

export function fetchPerson(id) {
  return id && axios.get(`${PEOPLE_URL}${id}`);
}

export function fetchPlanet(id) {
  return id && axios.get(`${PLANETS_URL}${id}`);
}

export function fetchResidents(residents) {
  const residentsPromises = residents.map(residentUrl => {
    const id = getIdParser(residentUrl);
    return fetchPerson(id);
  });
  return Promise.all(residentsPromises);
}

async function getAllHelper(url) {
  const { data } = await axios.get(url);
  if(data.next) {
    return [...data.results, ...await getAllHelper(data.next)];
  }

  return data.results;
}
