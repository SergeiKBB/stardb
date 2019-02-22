import {createSelector} from 'reselect';
import {peopleSelector} from './peopleSelectors';

export const planetsSelector = state => state.planets.list;
export const countSelector = state => state.planets.count;

export const planetsPeopleSelector = createSelector(
  peopleSelector,
  planetsSelector,
  (people, planets) => {
    const changedPlanets = planets.map(planet => {
      const residents = [...planet.residents];
      const convertedResidents = residents.map(link => {
        const person = people.find(item => {
          return item.url === link;
        });
        return person
          ? {name: person.name, url: person.url}
          : null;
      });
      return {...planet, residents: convertedResidents };
    });

    return changedPlanets.sort(sortPlanets);
  }
);

function sortPlanets(a, b) {
  if(a.residents.length > b.residents.length) {
    return -1;
  } else  if(a.residents.length < b.residents.length) {
    return 1;
  }
  return 0;
}
