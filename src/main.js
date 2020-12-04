import TripInfo from './view/trip-info.js';
import TripCost from './view/trip-cost.js';
import SiteMenuView from './view/menu.js';
import SiteFilters from './view/filter.js';
import SiteSorting from './view/sort.js';
import PointsList from './view/trip-items-list.js';
import PoinItem from './view/trip-item.js';
import CreateForm from './view/create-form.js';
import {generatePoint} from './mock/point.js';
import {render, RenderPosition} from './utils.js';

const POINT_COUNT = 15;
const points = new Array(POINT_COUNT).fill().map(generatePoint);
const pointsSortByDate = points.sort(function(a,b) {return a.startDate - b.startDate});

const pageBody = document.querySelector('.page-body');
const tripMain = pageBody.querySelector('.trip-main');

render(tripMain, new TripInfo(pointsSortByDate).getElement(), RenderPosition.AFTERBEGIN);
const tripInfoSection = pageBody.querySelector('.trip-info');
render(tripInfoSection, new TripCost(pointsSortByDate).getElement(), RenderPosition.BEFOREEND);

const tripControls = pageBody.querySelector('.trip-controls');
render(tripControls, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(tripControls, new SiteFilters().getElement(), RenderPosition.BEFOREEND);

const renderPoint = (pointListElement, point) => {
  const pointItem = new PoinItem(point);
  const pointEditItem = new CreateForm(point);

  const replaceToEditForm = () => {
    pointListElement.replaceChild(pointEditItem.getElement(), pointItem.getElement());
  };

  const replaceToPointItem = () => {
    pointListElement.replaceChild(pointItem.getElement(), pointEditItem.getElement());
  };

  pointItem.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceToEditForm();
  });

  pointEditItem.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceToPointItem();
  });

  render(pointListElement, pointItem.getElement(), RenderPosition.BEFOREEND);
};

const tripEvents = pageBody.querySelector('.trip-events');
render(tripEvents, new SiteSorting().getElement(), RenderPosition.BEFOREEND);
render(tripEvents, new PointsList().getElement(), RenderPosition.BEFOREEND);

const pointEventsList = tripEvents.querySelector('.trip-events__list');
for (let i = 0; i < POINT_COUNT; i++) {
  renderPoint(pointEventsList, pointsSortByDate[i]);
}

