import {createElement} from '../utils.js';

const generateTotalPrice = (points) => {
  const startPrice = 0;
  const totalPrice = points.reduce((a, b) => a + b.price, startPrice);
  return totalPrice;
};

const tripCost = (points) => {
  return `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${generateTotalPrice(points)}</span>
    </p>`;
};

export default class TripCost {
  constructor(points) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return tripCost(this._points);
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