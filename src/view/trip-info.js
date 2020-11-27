import dayjs from "dayjs";

const generateTripRoute = (points) => {
  const MAX_VIEW_CITIES = 3;
  const cities = new Set();
  for (let i = 0; i < points.length; i++) {
    cities.add(points[i].destination);
  };
  const travelCities = Array.from(cities);
  const countCities = travelCities.length;
  const startCity = travelCities[0];
  const middleCity = (countCities === MAX_VIEW_CITIES) ? travelCities[1] : '...';
  const finishCity = travelCities[countCities - 1];

  return `<h1 class="trip-info__title">${startCity} &mdash; ${middleCity} &mdash; ${finishCity}</h1>`
}

const generateTripDates = (points) => {
  const dates = new Set();
  for (let i = 0; i < points.length; i++) {
    dates.add(points[i].startDate);
    dates.add(points[i].finishDate);
  }
  const datesList = Array.from(dates).sort(function(a,b) {return a - b});
  
  const startDate = dayjs(datesList[0]).format('MMM D');
  let finishDate = dayjs(datesList[datesList.length - 1]).format('MMM D');

  if (dayjs(datesList[0]).format('MMM') === dayjs(datesList[datesList.length - 1]).format('MMM')) {
    finishDate = dayjs(datesList[datesList.length - 1]).format('D')
  }

  return `<p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${finishDate}</p>`
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