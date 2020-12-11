import {FILTERS} from '../const.js';
import AbstractComponent from './abstract.js';

const generateFilter = (filters) => {
  const filtersList = [];
  for (const filter of filters) {
    filtersList.push(
      `<div class="trip-filters__filter">
        <input id="filter-${filter.title.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
          value="${filter.title.toLowerCase()}" ${(filter.active) ? 'checked' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.title.toLowerCase()}">${filter.title}</label>
      </div>`);
  }

  return filtersList.join('');
};

const filters = () => {
  return `<h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${generateFilter(FILTERS)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
};

export default class Filters extends AbstractComponent {
  getTemplate() {
    return filters();
  }
};