import {SORT} from '../const.js';

const generateSorting = (sorting) => {
  const defaultActive = sorting[0];
  const sortList = [];
  for (const sort of sorting) {
    sortList.push(
    `<div class="trip-sort__item  trip-sort__item--${sort.toLowerCase()}">
      <input id="sort-${sort.toLowerCase()}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort.toLowerCase()}" ${(sort === defaultActive) ? 'checked' : ''}>
      <label class="trip-sort__btn" for="sort-${sort.toLowerCase()}">${sort.toLowerCase()}</label>
    </div>`);
  }

  return sortList.join('');
}

export const sorting = () => {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${generateSorting(SORT)}
    </form>`;
};
