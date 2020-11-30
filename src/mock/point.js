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
  const isOffer = Boolean(getRandomInteger(0,1));
  const newOffersList = new Map();
  
  if (!isOffer) {
    return newOffersList;
  }

  const generateOffersKeys = () => {
    const offersKeys = [];
    for (const value of offers.keys()){
      offersKeys.push(value);
    };
    return offersKeys;
  };

  const offersKeys = generateOffersKeys();
  
  const offersCount = getRandomInteger(1, offers.size);
  const newOffers = new Set();
  while (newOffers.size < offersCount) {
    const randomIndex = getRandomInteger(0, offersKeys.length - 1);
    newOffers.add(offersKeys[randomIndex]);
  };

  for (let newOffer of newOffers) {
    newOffersList.set(newOffer, offers.get(newOffer));
  };
      
  return newOffersList;
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