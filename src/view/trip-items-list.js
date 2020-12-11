import AbstractComponent from './abstract.js';

const pointsList = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class TripItemsList extends AbstractComponent {
  getTemplate() {
    return pointsList();
  }
};
