import { refs } from "./DOM-elements";
const {trailerBackdrop:backdrop, trailerFrame:trailer, trailerModal:modal, contributors} = refs;
// function openModal(){
function openModal(position){
    // console.log(position);
    backdrop.style = `top:${position}px;`;

    //костыль ибо приходиться скролить страницу до места открытия модалки
    //без строки ниже почему-то поднимает вверх страницы.
    window.scrollTo(0, position);

    // type это тип модального окна, для фрейма, для контрибуторов и т.д.
backdrop.classList.remove('is-hidden');
backdrop.addEventListener('click', closeModal);
}

function closeModal(){

    backdrop.classList.add('is-hidden');
    backdrop.removeEventListener('click', closeModal);

//костыль, думаю как исправить, этого кода тут не будет.
trailer.classList.add('is-hidden');
trailer.src = '';
contributors.classList.add('is-hidden');
//------
}
export{openModal};