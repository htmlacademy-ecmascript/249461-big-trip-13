import dayjs from "dayjs";
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);
import AbstractComponent from './abstract.js';

const offers = (point) => {
  const offers = point.offers;

  if (offers.length === 0) {
    return '';
  }

  const offersList = [];

  for (const offer of offers) {
    offersList.push(`<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`);
  };
  
  return offersList.join('');
};

const generateDuration = (point) => {
  const startDate = dayjs(point.startDate);
  const finishDate = dayjs(point.finishDate);

  const duration = dayjs.duration(finishDate.diff(startDate));

  if (duration.get('days') > 0) {
    return `${duration.get('days')}D ${duration.get('hours')}H ${duration.get('minutes')}M`;
  } else if (duration.get('hours') > 0) {
    return `${duration.get('hours')}H ${duration.get('minutes')}M`;
  } else {
    return `${duration.get('minutes')}M`;
  }
};

const pointItem = (point) => {
  const {eventType, destination, price, isFavorite, startDate, finishDate} = point;
  
  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dayjs(startDate).format('YYYY-MM-D')}">${dayjs(startDate).format('D MMM')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${eventType} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dayjs(startDate).format('YYYY-MM-DTHH:mm')}">${dayjs(startDate).format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs(finishDate).format('YYYY-MM-DTHH:mm')}">${dayjs(finishDate).format('HH:mm')}</time>
        </p>
        <p class="event__duration">${generateDuration(point)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers(point)}
      </ul>
      <button class="${(isFavorite) ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn'}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path
            d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class PoinItem extends AbstractComponent {
  constructor(points) {
    super();
    this._points = points;
    this._editPointHandler = this._editPointHandler.bind(this);
  }

  getTemplate() {
    return pointItem(this._points);
  }

  _editPointHandler(evt) {
    evt.preventDefault();
    this._callback.editButton();
  }

  setEditPointHandler(callback) {
    this._callback.editButton = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._editPointHandler);
  }
};
