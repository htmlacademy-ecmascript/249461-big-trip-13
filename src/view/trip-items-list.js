import AbstractComponent from './abstract.js';

const pointsList = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class PointsList extends AbstractComponent {
  getTemplate() {
    return pointsList();
  }
};
