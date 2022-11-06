export function addSpinner() {
  const spinner = document.querySelector('.loader');
  spinner.classList.add('loader--visible');
  spinner.classList.remove('loader--hidden');
  document.body.classList.add('bgcolor');
}

export function removeSpinner() {
  const spinner = document.querySelector('.loader');
  spinner.classList.add('loader--hidden');
  spinner.classList.remove('loader--visible');
  document.body.classList.remove('bgcolor');
}
