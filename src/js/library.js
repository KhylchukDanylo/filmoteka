const throttle = require('lodash.throttle');

let header = document.querySelector('.header-library');
let fixedHeader = document.querySelector('.fixed-header');
let headerHeight = header.clientHeight;

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
    watchedBtn.forEach(element => {
      element.classList.add('btn-active');
    });
    queueBtn.forEach(element => {
      element.classList.remove('btn-active');
    });
  } else if (e.target.id === 'queue') {
    watchedBtn.forEach(element => {
      element.classList.remove('btn-active');
    });
    queueBtn.forEach(element => {
      element.classList.add('btn-active');
    });
  }
}