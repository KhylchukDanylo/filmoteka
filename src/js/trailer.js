import {fetchTrailer} from './api-service.js';
import {refs} from './DOM-elements';
import { Notify } from 'notiflix';
const {trailerFrame, movieModal, movieBackdrop:backdrop, contributorsBackdrop} = refs;
import { addSpinner, removeSpinner } from './spinner.js';
import { movieId } from './modal-movie-render.js';

window.addEventListener('click', clickHandling);

function clickHandling(event){
  // console.log(event.target);
  if(!event.target.closest('.show-trailer')){
   return;
  }
  showTrailer(movieId);
}

function showTrailer(movieId){
  backdrop.classList.add('is-hidden');
  movieModal.classList.add('is-hidden');
  // addSpinner();
    fetchTrailer(movieId).then(trailersInfo =>  trailersHandling(trailersInfo))
    .catch(error =>{
        console.log(error);
        Notify.failure('trailer not found');
    });    
}

const trailersHandling = trailersInfo =>{
  // removeSpinner();
  const trailerKey = trailersInfo.data.results[0].key;
  trailerFrame.src = `https://www.youtube.com/embed/${trailerKey}`;
  showTrailerModal();
}

function showTrailerModal(){
  contributorsBackdrop.classList.remove('hide-it');
  // movieModal.classList.add('is-hidden');
  trailerFrame.classList.remove('hide-it');
  // backdrop.classList.add('is-hidden');
  contributorsBackdrop.addEventListener('click', closeTrailer);
}

function closeTrailer(event){
  if(event.target === event.currentTarget){
    // console.log('hi');
    trailerFrame.src = '';
    contributorsBackdrop.classList.add('hide-it');
    movieModal.classList.remove('is-hidden');
    backdrop.classList.remove('is-hidden');
    trailerFrame.classList.add('hide-it');
    contributorsBackdrop.removeEventListener('click', closeTrailer);
  }
}


// export {showTrailer};