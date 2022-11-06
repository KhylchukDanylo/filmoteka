const main = document.querySelector('main');
// main.classList.add('is-hidden');

import { refs } from "./DOM-elements";
import { openModal } from "./backdrop";
import { contributorsMarkup } from "./contributors-markup";
const {trailerModal:modal, trailerBackdrop:backdrop, teamModalButton, contributors} = refs;



let topPosition = 0;

teamModalButton.addEventListener('click', renderCotributorsModal);

function renderCotributorsModal(){
    topPosition = window.pageYOffset;
    openModal(topPosition);
    contributors.innerHTML = contributorsMarkup;
    contributors.classList.remove('is-hidden');
}
