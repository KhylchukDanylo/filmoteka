const throttle = require('lodash.throttle');

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

