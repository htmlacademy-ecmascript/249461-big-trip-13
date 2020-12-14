import {SORT} from '../const.js';
import AbstractComponent from './abstract.js';

const generateSorting = (sorting) => {
  const sortList = [];
  for (const sort of sorting.values()) {
    sortList.push(`<div class="trip-sort__item  trip-sort__item--${sort.title.toLowerCase()}">
      <input id="sort-${sort.title.toLowerCase()}" class="trip-sort__input visually-hidden" type="radio" name="trip-sort" value="sort-${sort.title.toLowerCase()}" ${(sort.active) ? 'checked' : ''}>
      <label class="trip-sort__btn" for="sort-${sort.title.toLowerCase()}">${sort.title}</label>
    </div>`);
  }

  return sortList.join('');
};

const sorting = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${generateSorting(SORT)}
    </form>`;
};

export default class Sorting extends AbstractComponent {
  getTemplate() {
    return sorting();
  }
};
