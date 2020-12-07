import TripInfo from './view/trip-info.js';
import TripCost from './view/trip-cost.js';
import SiteMenuView from './view/menu.js';
import SiteFilters from './view/filter.js';
import SiteSorting from './view/sort.js';
import PointsList from './view/trip-items-list.js';
import NoPoints from './view/no-point.js';
import PoinItem from './view/trip-item.js';
import CreateForm from './view/create-form.js';
import {generatePoint} from './mock/point.js';
import {render, RenderPosition} from './utils.js';

const POINT_COUNT = 15;
const points = new Array(POINT_COUNT).fill().map(generatePoint);
const pointsSortByDate = points.sort(function(a,b) {return a.startDate - b.startDate});

const pageBody = document.querySelector('.page-body');

const renderHeaderControls = (mainContainer) => {
  const tripControls = mainContainer.querySelector('.trip-controls');
  render(tripControls, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
  render(tripControls, new SiteFilters().getElement(), RenderPosition.BEFOREEND);
}

const renderPoint = (pointListElement, point) => {
  const pointItem = new PoinItem(point);
  const pointEditItem = new CreateForm(point);

  const replaceToEditForm = () => {
    pointListElement.replaceChild(pointEditItem.getElement(), pointItem.getElement());
  };

  const replaceToPointItem = () => {
    pointListElement.replaceChild(pointItem.getElement(), pointEditItem.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceToPointItem();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  pointItem.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceToEditForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditItem.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceToPointItem();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(pointListElement, pointItem.getElement(), RenderPosition.BEFOREEND);
};

const renderPointsLit = (mainContainer, tripPoints) => {
  const tripEvents = mainContainer.querySelector('.trip-events');
  if (points.length === 0) {
    render(tripEvents, new NoPoints().getElement(), RenderPosition.BEFOREEND);
  } else {
    const tripMain = mainContainer.querySelector('.trip-main');
    render(tripMain, new TripInfo(tripPoints).getElement(), RenderPosition.AFTERBEGIN);

    const tripInfoSection = mainContainer.querySelector('.trip-info');
    render(tripInfoSection, new TripCost(tripPoints).getElement(), RenderPosition.BEFOREEND);

    render(tripEvents, new SiteSorting().getElement(), RenderPosition.BEFOREEND);

    const pointsList = new PointsList();
    render(tripEvents, pointsList.getElement(), RenderPosition.BEFOREEND);

    for (const point of tripPoints) {
      renderPoint(pointsList.getElement(), point);
    }
  }
}

renderHeaderControls(pageBody);
renderPointsLit(pageBody, pointsSortByDate);
