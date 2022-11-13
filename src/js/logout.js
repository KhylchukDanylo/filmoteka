import { Notify } from 'notiflix';
import { refs } from './DOM-elements';
const { logoutButton } = refs;
const trailerNotifyOptions = {
  position: 'center-top',
  timeout: 1500,
  fontFamily: 'Roboto',
};

logoutButton.addEventListener('click', logoutHandling);

function logoutHandling(event) {
  event.preventDefault();
  Notify.info('you have logged out', trailerNotifyOptions);
  Notify.warning('redirect to main page', trailerNotifyOptions);
  window.setTimeout(() => document.location.assign('./index.html'), 3000);
}
