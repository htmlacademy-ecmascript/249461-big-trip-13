import dayjs from "dayjs";
import {MAX_VIEW_CITIES} from '../const';

const generateTripRoute = (points) => {
  
  const cities = new Set();
  for (let i = 0; i < points.length; i++) {
    cities.add(points[i].destination);
  };
  const travelCities = Array.from(cities);
  const startCity = travelCities[0];
  const finishCity = travelCities[travelCities.length - 1];

  if (startCity === finishCity) {
    return `<h1 class="trip-info__title">${startCity}</h1>`;
  } else if (startCity !== finishCity && travelCities.length < MAX_VIEW_CITIES) {
    return `<h1 class="trip-info__title">${startCity} &mdash; ${finishCity}</h1>`;
  } else {
    return `<h1 class="trip-info__title">${startCity} &mdash; ${(travelCities.length === MAX_VIEW_CITIES) ? travelCities[1] : '...'} &mdash; ${finishCity}</h1>`;
  }
}

const generateTripDates = (points) => {
  const startDate = dayjs(points[0].startDate);
  let finishDate = dayjs(points[points.length - 1].finishDate);

  if (startDate.isSame(finishDate, 'D')) {
    return `<p class="trip-info__dates">${startDate.format('MMM D')}</p>`;
  };

  if (finishDate.diff(startDate, 'month') > 0) {
    finishDate = finishDate.format('MMM D');
  } else {
    finishDate = finishDate.format('D');
  };

  return `<p class="trip-info__dates">${startDate.format('MMM D')}&nbsp;&mdash;&nbsp;${finishDate}</p>`;
};

export const tripInfo = (points) => {
  return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        ${generateTripRoute(points)}

        ${generateTripDates(points)}
      </div>
    </section>`;
};