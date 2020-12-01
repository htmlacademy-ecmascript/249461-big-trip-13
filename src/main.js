import {tripInfo} from './view/trip-info.js';
import {tripCost} from './view/trip-cost.js';
import {menu} from './view/menu.js';
import {filters} from './view/filter.js';
import {sorting} from './view/sort.js';
import {pointsList} from './view/trip-item.js';
import {pointItem} from './view/trip-item.js';
import {createForm} from './view/create-form.js';

import {generatePoint} from './mock/point.js';

const POINT_COUNT = 15;
const points = new Array(POINT_COUNT).fill().map(generatePoint);
const pointsSortByDate = points.sort(function(a,b) {return a.startDate - b.startDate});

const pageBody = document.querySelector('.page-body');
const tripMain = pageBody.querySelector('.trip-main');

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

// Маршрут и стоимость
render(tripMain, tripInfo(pointsSortByDate), 'afterbegin');
const tripInfoSection = pageBody.querySelector('.trip-info');
render(tripInfoSection, tripCost(pointsSortByDate), 'beforeend');

// Меню и фильтр
const tripControls = pageBody.querySelector('.trip-controls');
render(tripControls, menu(), 'beforeend');
render(tripControls, filters(), 'beforeend');

// Сортировка и основной контент
const tripEvents = pageBody.querySelector('.trip-events');
render(tripEvents, sorting(), 'beforeend');
render(tripEvents, pointsList(), 'beforeend');

const pointEventsList = tripEvents.querySelector('.trip-events__list');
for (let i = 1; i < POINT_COUNT; i++) {
    render(pointEventsList, pointItem(pointsSortByDate[i]), 'beforeend');
}

render(pointEventsList, createForm(pointsSortByDate[1]), 'afterbegin');
