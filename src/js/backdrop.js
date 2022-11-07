import { refs } from "./DOM-elements";
const {movieBackdrop:backdrop, contributors} = refs;

function openModal(){
backdrop.classList.remove('is-hidden');
backdrop.addEventListener('click', closeModal);
}

function closeModal(){
    backdrop.classList.add('is-hidden');
    backdrop.removeEventListener('click', closeModal);

//костыль, думаю как исправить, этого кода тут не будет.
contributors.classList.add('is-hidden');
//------
}
export{openModal};