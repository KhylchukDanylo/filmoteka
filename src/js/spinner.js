export function addSpinner() {
  const spinner = document.querySelector('.loader');
  const footer = document.querySelector('.footer');
  const html = document.querySelector('html');
  const header = document.querySelector('.header');
  const main = document.querySelector('main');
  spinner.classList.add('loader--visible');
  spinner.classList.remove('loader--hidden');
  document.body.classList.add('bgcolor');
  footer.classList.add('stickyf');
  html.classList.add('stickyh');
  // header.classList.add('stickyhed');
  main.classList.add('stickym');
}

export function removeSpinner() {
  const spinner = document.querySelector('.loader');
  const footer = document.querySelector('.footer');
  const html = document.querySelector('html');
  const header = document.querySelector('.header');
  const main = document.querySelector('main');
  spinner.classList.add('loader--hidden');
  spinner.classList.remove('loader--visible');
  document.body.classList.remove('bgcolor');
  footer.classList.remove('stickyf');
  html.classList.remove('stickyh');
  // header.classList.remove('stickyhed');
  main.classList.remove('stickym');
}
