import {createElement} from '../utils.js';

const pointsList = () => {
  return `<ul class="trip-events__list"></ul>`;
}

export default class PointsList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return pointsList();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
      return this._element;
    }

    removeElement() {
      this._element = null;
  }
};