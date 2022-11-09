const main = document.querySelector('main');
// main.classList.add('is-hidden');

import { refs } from "./DOM-elements";
// import { openModal } from "./backdrop";
import {renderCotributorsModal} from './contributors-markup';
const { teamModalButton, contributorsModal, contributorsBackdrop} = refs;

teamModalButton.addEventListener('click', showModal);

function showModal(){
    contributorsBackdrop.classList.remove('hide-it');
    contributorsModal.classList.remove('hide-it');
    renderCotributorsModal();
    contributorsBackdrop.addEventListener('click', closeContributorsModal);
}

function closeContributorsModal(event){
if(event.target === event.currentTarget){
    contributorsBackdrop.classList.add('hide-it');
    contributorsModal.classList.add('hide-it');
    contributorsBackdrop.removeEventListener('click', closeContributorsModal);
}
}