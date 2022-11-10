const throttle = require('lodash.throttle');
import { refs } from './DOM-elements';
import {
  CURRENT_PAGE,
  TOTAL_PAGES,
  CURRENT_STATE,
  MOVIE_TO_SEARCH,
} from './pagination';
const { logoFromLibrarysHeader, logoFromLibrarysFixedHeader } = refs;
import {
  showWatchedList,
  showQueueList,
  parsedWatchedList,
  parsedQueueList,
} from './gallery';

let header = document.querySelector('.header-library');
let fixedHeader = document.querySelector('.fixed-header');
let headerHeight = header.clientHeight;

logoFromLibrarysHeader.addEventListener('click', onLogoClick);
logoFromLibrarysFixedHeader.addEventListener('click', onLogoClick);

const watchedBtn = Array.from(document.querySelectorAll('#watched'));
const queueBtn = Array.from(document.querySelectorAll('#queue'));

window.addEventListener('scroll', throttle(showFixedHeader, 200));
header.addEventListener('click', onBtnClick);

function showFixedHeader() {
  if (window.pageYOffset > headerHeight) {
    fixedHeader.classList.remove('is-hidden');
  } else {
    fixedHeader.classList.add('is-hidden');
  }
}

function onBtnClick(e) {
  if (e.target.id === 'watched') {
    showWatchedList(parsedWatchedList);
    watchedBtn.forEach(element => {
      element.classList.add('btn-active');
    });
    queueBtn.forEach(element => {
      element.classList.remove('btn-active');
    });
  } else if (e.target.id === 'queue') {
    showQueueList(parsedQueueList);
    watchedBtn.forEach(element => {
      element.classList.remove('btn-active');
    });
    queueBtn.forEach(element => {
      element.classList.add('btn-active');
    });
  }
}

function onLogoClick() {
  console.log('logolibrary');
  localStorage.removeItem(CURRENT_PAGE);
  localStorage.removeItem(TOTAL_PAGES);
  localStorage.removeItem(CURRENT_STATE);
  localStorage.removeItem(MOVIE_TO_SEARCH);
}
