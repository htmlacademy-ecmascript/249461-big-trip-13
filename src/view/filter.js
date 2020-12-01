import {FILTERS} from '../const.js';

const generateFilter = (filters) => {
  const defaultActiveFilter = filters[0];
  const filtersList = [];
  for (const filter of filters) {
    filtersList.push(
      `<div class="trip-filters__filter">
        <input id="filter-${filter.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
          value="${filter.toLowerCase()}" ${(filter === defaultActiveFilter) ? 'checked' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.toLowerCase()}">${filter}</label>
      </div>`);
  }

  return filtersList.join('');
}

export const filters = () => {
  return `
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${generateFilter(FILTERS)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
};
