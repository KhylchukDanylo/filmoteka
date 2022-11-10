import {fetchTrailer} from './api-service.js';
import {refs} from './DOM-elements';
import { Notify } from 'notiflix';
const {trailerFrame, movieModal, movieBackdrop:backdrop, trailerBackdrop} = refs;
// import { addSpinner, removeSpinner } from './spinner.js';
import { movieId } from './modal-movie-render.js';

window.addEventListener('click', clickHandling);

function clickHandling(event){
  if(!event.target.closest('.show-trailer')){
   return;
  }
  showTrailer(movieId);

}

function showTrailer(movieId){
  backdrop.classList.add('hide-modal');
    fetchTrailer(movieId).then(trailersInfo =>  trailersHandling(trailersInfo))
    .catch(error =>{
        console.log(error);
        Notify.failure('trailer not found');
    });    
}

const trailersHandling = trailersInfo =>{
  const trailerKey = trailersInfo.data.results[0].key;
  trailerFrame.src = `https://www.youtube.com/embed/${trailerKey}`;
  showTrailerModal();
}

function showTrailerModal(){
  trailerBackdrop.classList.remove('hide-it');
  trailerBackdrop.addEventListener('click', closeTrailer);
  document.body.classList.add('stop-scrolling');
}

function closeTrailer(event){
  if(event.target === event.currentTarget){
    trailerFrame.src = '';
    trailerBackdrop.classList.add('hide-it');
    backdrop.classList.remove('hide-modal');;
    trailerBackdrop.removeEventListener('click', closeTrailer);
    document.body.classList.remove('stop-scrolling');
  }
}