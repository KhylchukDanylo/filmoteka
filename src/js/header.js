const throttle = require('lodash.throttle');
import { refs } from './DOM-elements';
import { createMovieList, resetFiltersStyles } from './popular-movies';
import { formEl } from './search-movies';
import {
  CURRENT_PAGE,
  TOTAL_PAGES,
  CURRENT_STATE,
  MOVIE_TO_SEARCH,
} from './pagination';
import { scrollToTop } from './eventListeners';
import { resetFiltersForms } from './filters';
const { logoFromFixedHeader } = refs;

let header = document.querySelector('.header');
let fixedHeader = document.querySelector('.fixed-headers');
let headerHeight = header.clientHeight;

window.addEventListener('scroll', throttle(showFixedHeader, 200));

function showFixedHeader() {
  if (window.pageYOffset > headerHeight) {
    fixedHeader.classList.remove('is-hidden');
  } else {
    fixedHeader.classList.add('is-hidden');
  }
}

logoFromFixedHeader.addEventListener('click', onLogoClick);

function onLogoClick(evt) {
  evt.preventDefault();
  localStorage.removeItem(CURRENT_PAGE);
  localStorage.removeItem(TOTAL_PAGES);
  localStorage.removeItem(CURRENT_STATE);
  localStorage.removeItem(MOVIE_TO_SEARCH);
  resetFiltersStyles();
  resetFiltersForms();
  createMovieList(1);
  scrollToTop();
  formEl.reset();
}
