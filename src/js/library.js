import './header-library';
import './spinner';
import './gallery';
import './modal-movie-render';
import './contributors-modal';
import './trailer';
import './logout';
import './contributors-modal';

import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';

addSpinner();
window.addEventListener('load', function (e) {
  removeSpinner();
});
