import AbstractComponent from './abstract.js';

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

export default class TripCost extends AbstractComponent {
  constructor(points) {
    super();
    this._points = points;
  }

  getTemplate() {
    return tripCost(this._points);
  }
};
