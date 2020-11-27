import dayjs from "dayjs";
import {TRIP_ITEMS, CITIES, OFFERS} from '../const.js';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateTripItem = (items) => {
  const randomIndex = getRandomInteger(0, items.length - 1);

  return items[randomIndex];
}

const generateDescription = () => {
  const descSentences = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'
  ];

  const countDescriptionSentences = getRandomInteger(1, 5);

  let newDescription = new Set();
  while (newDescription.size <= countDescriptionSentences) {
    newDescription.add(descSentences[getRandomInteger(0, descSentences.length - 1)]);
  }

  const description = Array.from(newDescription);
  return description.join(' ');
};

const generateDestination = (cities) => {
  const randomIndex = getRandomInteger(0, cities.length - 1);

  return cities[randomIndex];
};

const generateOffers = (offers) => {
  const isOffer = Boolean(getRandomInteger(0,1));
  
  if (!isOffer) {
    return null;
  }

  const generateOffersKeys = () => {
    const offersKeys = new Set();
    for (const value of offers.keys()){
      offersKeys.add(value);
    };
    return Array.from(offersKeys);
  };

  const offersKeys = generateOffersKeys();
  
  const countOffers = getRandomInteger(1, offers.size);
  const newOffers = new Set();
  while (newOffers.size < countOffers) {
    const randomIndex = getRandomInteger(0, offersKeys.length - 1);
    newOffers.add(offersKeys[randomIndex]);
  };

  let newOffersList = new Map();
  for (let newOffer of newOffers) {
    const value = offers.get(newOffer);
    newOffersList.set(newOffer, offers.get(newOffer));
  };
      
  return newOffersList;
};

const generatePhotosList = () => {
  const isPhotos = Boolean(getRandomInteger(0,1));

  if (!isPhotos) {
    return null;
  }

  const photosCount = getRandomInteger(1, 5);

  const photos = [];
  for (let i = 0; i < photosCount; i++) {
    photos[i] = `http://picsum.photos/248/152?r=${Math.random()}`;
  }

  return photos;
};

const generateDate = () => {
  const dayGap = 7;

  // начальная дата через DayGap от сегодняшней
  const startDate = dayjs().add(dayGap, 'day');
  // Конечная дата через DayGap после старта
  const finishDate = dayjs(startDate).add(dayGap, 'day');

  const randomStartDate = getRandomInteger(startDate, finishDate);
  const randomFinishDate = getRandomInteger(randomStartDate, finishDate);

  const pointDates = [randomStartDate, randomFinishDate];

  return pointDates;
}

export const generatePoint = () => {
  const dates = generateDate();

  return {
    eventType: generateTripItem(TRIP_ITEMS),
    destination: generateDestination(CITIES),
    offers: generateOffers(OFFERS),
    description: generateDescription(0, 1),
    photos: generatePhotosList(),
    startDate: dates[0],
    finishDate: dates[1],
    price: getRandomInteger(20, 1200),
    isFavorite: Boolean(getRandomInteger(0,1))
  };
};