import dayjs from "dayjs";
import AbstractComponent from './abstract.js';
import {TRIP_ITEMS, CITIES, OFFERS} from '../const.js';

const generateEventsItems = (events, eventType) => {
  const eventsList = [];

  for (const event of events) {
    eventsList.push(`<div class="event__type-item">
        <input id="event-type-${event.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
          value="${event.toLowerCase()}" ${(event === eventType) ? 'checked' : ''}>
        <label class="event__type-label  event__type-label--${event.toLowerCase()}" for="event-type-${event.toLowerCase()}-1">${event}</label>
      </div>`);
  }

  return eventsList.join('');
};

const generateDatalist = (array) => {
  const list = [];

  for (const item of array) {
    list.push(`<option value=${item}></option>`)
  }
  return list.join('');
};

const generateOffers = (offersForm, offers) => {
  const offersList = [];
  
  for (let value of offersForm.entries()) {
    offersList.push(`<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer--${value[0]}-1" type="checkbox"
          name="event-offer-${value[0]}" ${(offers.indexOf(value[1]) !== -1) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer--${value[0]}-1">
          <span class="event__offer-title">${value[1].title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${value[1].price}</span>
        </label>
      </div>`);
  }

  return offersList.join('');
};

const generatePhotosList = (photos) => {
  const photosList = [];
  if (photos) {
    for (const photo of photos) {
      photosList.push(`<img class="event__photo" src="${photo}" alt="Event photo">`);
    };
  };
  return photosList.join('');
};

const createForm = (point) => {
  const {eventType, destination, price, startDate, finishDate, description, offers, photos} = point;
  
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${generateEventsItems(TRIP_ITEMS, eventType)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
          ${eventType}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text"
            name="event-destination" value="${destination}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${generateDatalist(CITIES)}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
            value="${dayjs(startDate).format('D/MM/YY HH:mm')}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
            value="${dayjs(finishDate).format('D/MM/YY HH:mm')}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${generateOffers(OFFERS, offers)}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>

          <div class="event__photos-container ${(!photos) ? 'visually-hidden' : ''}">
            <div class="event__photos-tape">
              ${generatePhotosList(photos)}
            </div>
          </div>
        </section>
      </section>
    </form>
  </li>`;
};

export default class CreateForm extends AbstractComponent {
  constructor(points) {
    super();
    this._points = points;
  }

  getTemplate() {
    return createForm(this._points);
  }
};
