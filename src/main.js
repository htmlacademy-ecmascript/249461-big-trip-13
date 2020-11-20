import {tripInfo} from './view/trip-info.js';
import {tripCost} from './view/trip-cost.js';
import {menu} from './view/menu.js';
import {filters} from './view/filter.js';
import {sorting} from './view/sort.js';
import {pointsList} from './view/trip-item.js';
import {pointItem} from './view/trip-item.js';
import {editForm} from './view/edit-form.js';
import {createForm} from './view/create-form.js';

const POINT_COUNT = 3;

const pageBody = document.querySelector('.page-body');
const tripMain = pageBody.querySelector('.trip-main');

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

// Маршрут и стоимость
render(tripMain, tripInfo(), 'afterbegin');
const tripInfoSection = pageBody.querySelector('.trip-info');
render(tripInfoSection, tripCost(), 'beforeend');

// Меню и фильтр
const tripControls = pageBody.querySelector('.trip-controls');
render(tripControls, menu(), 'beforeend');
render(tripControls, filters(), 'beforeend');

// Сортировка и основной контент
const tripEvents = pageBody.querySelector('.trip-events');
render(tripEvents, sorting(), 'beforeend');
render(tripEvents, pointsList(), 'beforeend');

const pointEventsList = tripEvents.querySelector('.trip-events__list');
for (let i = 0; i < POINT_COUNT; i++) {
    render(pointEventsList, pointItem(), 'beforeend');
}

render(pointEventsList, editForm(), 'afterbegin');
render(pointEventsList, createForm(), 'afterbegin');