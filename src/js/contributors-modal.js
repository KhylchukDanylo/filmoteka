const main = document.querySelector('main');
// main.classList.add('is-hidden');

import { refs } from "./DOM-elements";
import {renderCotributorsModal} from './contributors-markup';
const { teamModalButton, contributorsModal, contributorsBackdrop} = refs;

teamModalButton.addEventListener('click', showModal);

function showModal(){
    contributorsBackdrop.classList.remove('hide-it');
    contributorsModal.classList.remove('hide-modal');
    renderCotributorsModal();
    contributorsBackdrop.addEventListener('click', closeContributorsModal);
    document.body.classList.add('stop-scrolling');
}

function closeContributorsModal(event){
if(event.target === event.currentTarget){
    contributorsBackdrop.classList.add('hide-it');
    contributorsModal.classList.add('hide-modal');
    contributorsBackdrop.removeEventListener('click', closeContributorsModal);
    document.body.classList.remove('stop-scrolling');
}
}