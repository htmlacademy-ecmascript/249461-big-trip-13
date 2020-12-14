import {MENU} from '../const.js';
import AbstractComponent from './abstract.js';

const generateSorting = (menu) => {
  const menuList = [];
  for (const item of menu.values()) {
    menuList.push(
      `<a class="${(item.active) ? 'trip-tabs__btn  trip-tabs__btn--active' : 'trip-tabs__btn'}" href="#">${item.title}</a>`
      );
  }

  return menuList.join('');
};

const createMenu = () => {
  return `<h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      ${generateSorting(MENU)}
    </nav>`;
};

export default class Menu extends AbstractComponent {
  getTemplate() {
    return createMenu();
  }
};
