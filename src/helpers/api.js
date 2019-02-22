import axios from "axios";
import { PLANETS_URL, PEOPLE_URL } from './constants';

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



async function getAllHelper(url) {
  const { data } = await axios.get(url);
  if(data.next) {
    return [...data.results, ...await getAllHelper(data.next)];
  }

  return data.results;
}
