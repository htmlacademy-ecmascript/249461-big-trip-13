import dayjs from "dayjs";
import {TRIP_ITEMS, CITIES, OFFERS, DESCRIPTION_SENTENCES} from '../const.js';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItem = (items) => {
  return items[getRandomInteger(0, items.length - 1)];
}

const generateDescription = (sentences) => {
  const descriptionSentencesCount = getRandomInteger(1, 5);
  const newDescription = new Set();

  while (newDescription.size <= descriptionSentencesCount) {
    newDescription.add(sentences[getRandomInteger(0, sentences.length - 1)]);
  }

  const description = Array.from(newDescription);
  return description.join(' ');
};

const generateOffers = (offers) => {
  const offersArray = Array.from(offers.values());
  const offersNumbers = getRandomInteger(0, offers.size);

  if (offersNumbers === 0) {
    return [];
  }

  const offersNew = new Set();
  while(offersNew.size < offersNumbers) {
    const index = getRandomInteger(0, offersArray.length - 1);
    offersNew.add(offersArray[index]);
  }
  return Array.from(offersNew);
};

const generatePhotosList = () => {
  const isPhotos = Boolean(getRandomInteger(0, 1));

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
  const startDate = dayjs().add(dayGap, 'day');
  const finishDate = dayjs(startDate).add(dayGap, 'day');

  const randomStartDate = getRandomInteger(startDate, finishDate);
  
  return {
    startDate: randomStartDate,
    finishDate: getRandomInteger(randomStartDate, finishDate)
  }
}

export const generatePoint = () => {
  const dates = generateDate();

  return {
    eventType: getRandomItem(TRIP_ITEMS),
    destination: getRandomItem(CITIES),
    offers: generateOffers(OFFERS),
    description: generateDescription(DESCRIPTION_SENTENCES),
    photos: generatePhotosList(),
    startDate: dates.startDate,
    finishDate: dates.finishDate,
    price: getRandomInteger(20, 1200),
    isFavorite: Boolean(getRandomInteger(0,1))
  };
};