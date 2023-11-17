import { renderGallery } from './gallery.js';
import { debounce } from './util.js';

const filtersElement = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');


const MAX_RANDOM_INDEX_COUNT = 10;

const Filters = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));


const filterHandlers = {
  [Filters.DEFAULT]: (data) => data,
  [Filters.RANDOM]: (data) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_INDEX_COUNT, data.length);
    while (randomIndexList.length < max) {
      const index = getRandomIndex(0, data.length);
      if (!randomIndexList.includes(index)) {
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },
  [Filters.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length),
};

const repaint = (evt, filter, data) => {
  const filteredData = filterHandlers[filter](data);
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
  renderGallery(filteredData);
  const imageFilterButtonActive = filterForm.querySelector('.img-filters__button--active');
  imageFilterButtonActive.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const debouncedRepaint = debounce(repaint);

const initGalleryFilters = (data) => {
  filtersElement.classList.remove('img-filters--inactive');
  defaultButton.addEventListener('click', (evt) => {
    debouncedRepaint(evt, Filters.DEFAULT, data);
  });
  randomButton.addEventListener('click', (evt) => {
    debouncedRepaint(evt, Filters.RANDOM, data);
  });
  discussedButton.addEventListener('click', (evt) => {
    debouncedRepaint(evt, Filters.DISCUSSED, data);
  });
};

export { initGalleryFilters };
