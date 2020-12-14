import AbstractComponent from './abstract.js';

const createNoPoints = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`
};

export default class NoPoint extends AbstractComponent {
  getTemplate() {
    return createNoPoints();
  }
};
