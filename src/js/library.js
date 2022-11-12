import './header-library';
import './gallery';
import './contributors-modal';

import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';

addSpinner();
window.addEventListener('load', function (e) {
  removeSpinner();
});
