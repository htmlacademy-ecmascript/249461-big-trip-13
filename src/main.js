import TripInfo from './view/trip-info.js';
import TripCost from './view/trip-cost.js';
import Menu from './view/menu.js';
import Filters from './view/filter.js';
import Sorting from './view/sort.js';
import TripItemsList from './view/trip-items-list.js';
import NoPoints from './view/no-point.js';
import TripItem from './view/trip-item.js';
import CreateForm from './view/create-form.js';
import {generatePoint} from './mock/point.js';
import {render, RenderPosition, replace} from './utils.js';

const POINT_COUNT = 15;
const points = new Array(POINT_COUNT).fill().map(generatePoint);
const pointsSortByDate = points.sort(function(a,b) {return a.startDate - b.startDate});

const pageBody = document.querySelector('.page-body');

const renderHeaderControls = (mainContainer) => {
  const tripControls = mainContainer.querySelector('.trip-controls');
  render(tripControls, new Menu, RenderPosition.BEFOREEND);
  render(tripControls, new Filters, RenderPosition.BEFOREEND);
}

const renderPoint = (pointListElement, point) => {
  const pointItem = new TripItem(point);
  const pointEditItem = new CreateForm(point);

  const replaceToEditForm = () => {
    replace(pointEditItem, pointItem);
  };

  const replaceToPointItem = () => {
    replace(pointItem, pointEditItem);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceToPointItem();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  pointItem.setEditPointHandler(() => {
    replaceToEditForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditItem.setFormSubmitHandler(() => {
    replaceToPointItem();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(pointListElement, pointItem, RenderPosition.BEFOREEND);
};

const renderPointsLit = (mainContainer, tripPoints) => {
  const tripEvents = mainContainer.querySelector('.trip-events');
  if (points.length === 0) {
    render(tripEvents, new NoPoints, RenderPosition.BEFOREEND);
  } else {
    const tripMain = mainContainer.querySelector('.trip-main');
    render(tripMain, new TripInfo(tripPoints), RenderPosition.AFTERBEGIN);

    const tripInfoSection = mainContainer.querySelector('.trip-info');
    render(tripInfoSection, new TripCost(tripPoints), RenderPosition.BEFOREEND);

    render(tripEvents, new Sorting, RenderPosition.BEFOREEND);

    const tripItemsList = new TripItemsList();
    render(tripEvents, tripItemsList, RenderPosition.BEFOREEND);

    for (const point of tripPoints) {
      renderPoint(tripItemsList, point);
    }
  }
}


renderHeaderControls(pageBody);
renderPointsLit(pageBody, pointsSortByDate);
