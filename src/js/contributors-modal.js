const main = document.querySelector('main');
// main.classList.add('is-hidden');

import { refs } from "./DOM-elements";
import { openModal } from "./backdrop";
import { contributorsMarkup } from "./contributors-markup";
const {movieBackdrop:backdrop, teamModalButton, contributors} = refs;

teamModalButton.addEventListener('click', renderCotributorsModal);

function renderCotributorsModal(){
    openModal();
    contributors.innerHTML = contributorsMarkup;
    contributors.classList.remove('is-hidden');
}
