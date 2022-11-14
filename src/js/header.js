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
const { logoFromFixedHeader, 
  openFilterByGenresBtn:genresButton, 
  openFilterByYearsBtn:yearsButton,
  genresForm,
  yearsForm,
  sortFormOptions,
} = refs;
import { resetFiltersForms } from './filters';

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
}
/*
function resetFiltersStyles(){
  genresButton.style.boxShadow =
  'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  yearsButton.style.boxShadow =
  'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  genresButton.textContent = 'Genres';
  yearsButton.textContent = 'Years';
}

function resetFiltersForms(){
  genresForm.reset();
  yearsForm.reset();
  // sortFormOptions.reset(); нужно подумать как очищать селекты
}
*/