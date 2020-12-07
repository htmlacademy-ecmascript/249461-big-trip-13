import {MENU} from '../const.js';
import {createElement} from '../utils.js';

const generateSorting = (menu) => {
  const menuList = [];
  for (const item of menu.values()) {
    menuList.push(
      `<a class="${(item.active) ? 'trip-tabs__btn  trip-tabs__btn--active' : 'trip-tabs__btn'}" href="#">${item.title}</a>`
      );
  }

  return menuList.join('');
}

const createMenu = () => {
  return `<h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      ${generateSorting(MENU)}
    </nav>`;
};

export default class SiteMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMenu();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
};
