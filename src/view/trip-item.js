import dayjs from "dayjs";

export const pointsList = () => {
  return `<ul class="trip-events__list"></ul>`;
}

export const pointItem = (point) => {
  const {eventType, destination, price, isFavorite, startDate, finishDate} = point;
  const offers = () => {
    const offers = point.offers;
  
    if (!offers) {
      return '';
    }
  
    const offersList = new Set();
  
    for (const offer of offers.values()) {
      offersList.add(`<li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </li>`);
    };
    
    const newOffersList = Array.from(offersList);
    return newOffersList.join('');
  };

  const generateDuration = () => {
    const duration = finishDate - startDate;
    let newDuration;

    if ((dayjs(finishDate).format('D') - dayjs(startDate).format('D')) > 0) {
      newDuration = dayjs(duration).format('D') + 'D ' + dayjs(duration).format('HH') + 'H '  + dayjs(duration).format('mm') + 'M';
    } else if ((dayjs(finishDate).format('D') - dayjs(startDate).format('D')) || (dayjs(finishDate).format('H') - dayjs(startDate).format('H')) > 0) {
      newDuration = dayjs(duration).format('HH') + 'H '  + dayjs(duration).format('mm') + 'M';
    } else {
      newDuration = dayjs(duration).format('mm') + 'M';
    }

    return newDuration;
  }

  return `
  <li class="trip-events__item">
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
        <p class="event__duration">${generateDuration()}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers()}
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

