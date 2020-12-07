export const MAX_VIEW_CITIES = 3;
export const TRIP_ITEMS = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
export const CITIES = ['Amsterdam', 'Chamonix', 'Geneva'];

export const MENU = [
  {
    title: 'Table',
    active: true
  },{
    title: 'Stats',
    active: false
  }
];

export const FILTERS = [
  {
    title: 'Everything',
    active: true
  },{
    title: 'Future',
    active: false
  },{
    title: 'Past',
    active: false
  }
];

export const SORT = [
  {
    title: 'Day',
    active: true
  },
  {
    title: 'Event',
    active: false
  },
  {
    title: 'Time',
    active: false
  },
  {
    title: 'Price',
    active: false
  },
  {
    title: 'Offers',
    active: false
  }
];

export const OFFERS = new Map([
  ['luggage', {
    title: 'Add luggage',
    price: 30
  }],
  ['comfort', {
    title: 'Switch to comfort class',
    price: 100
  }],
  ['meal', {
    title: 'Add meal',
    price: 15
  }],
  ['seats', {
    title: 'Choose seats',
    price: 5
  }],
  ['train', {
    title: 'Travel by train',
    price: 40
  }]
]);

export const DESCRIPTION_SENTENCES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];
