import AbstractComponent from './view/abstract.js';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend'
};

export const render = (container, child, place) => {
  if (container instanceof AbstractComponent) {
    container = container.getElement();
  }

  if (child instanceof AbstractComponent) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

export const replace = (newChild, oldChild) => {
  if (oldChild instanceof AbstractComponent) {
    oldChild = oldChild.getElement();
  }
   if (newChild instanceof AbstractComponent) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
}

export const renderTemplate = (container, template, place) => {
  if (container instanceof AbstractComponent) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  if (newElement.children.length > 1) {
    return newElement;
  }
  
  return newElement.firstChild;
};
