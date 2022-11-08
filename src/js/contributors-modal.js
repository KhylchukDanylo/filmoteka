const main = document.querySelector('main');
// main.classList.add('is-hidden');

import { refs } from "./DOM-elements";
import { openModal } from "./backdrop";
import {renderCotributorsModal} from './contributors-markup';
const {movieBackdrop:backdrop, teamModalButton, contributorsWrapper} = refs;

teamModalButton.addEventListener('click', showModal);

function showModal(){
    openModal();
    contributorsWrapper.classList.remove('is-hidden');
    renderCotributorsModal();
}
