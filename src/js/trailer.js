import { fetchTrailer } from './api-service.js';
import { refs } from './DOM-elements';
import { openModal } from './backdrop.js';
import { Notify } from 'notiflix';
const { trailerBackdrop, movieList, trailerFrame, trailerModal: modal } = refs;

let topPosition = 0;
// const {trailerBackdrop,  movieList, trailerFrame} = refs;

movieList.addEventListener('click', moviesClickHandling);

function moviesClickHandling(event) {
  // console.log(window.pageYOffset);

  topPosition = window.pageYOffset;
  //немного костылей которые стоит исправить и сделать красиво, но пока что так
  const trailerBtn = event.target.closest('.show-trailer');

  if (!trailerBtn) {
    return;
  }

  const movieId = event.target.closest('a').id;
  // console.log(movieId);
  fetchTrailer(movieId)
    .then(trailersInfo => trailersHandling(trailersInfo))
    .catch(error => {
      console.log(error);
      Notify.failure('trailer not found');
    });
  //предположительный конец костылей
}

const trailersHandling = trailersInfo =>
  renderTrailerModal(trailersInfo.data.results[0].key);

function renderTrailerModal(key) {
  console.log(topPosition);

  openModal(topPosition);
  trailerFrame.classList.remove('is-hidden');
  // console.log(key);
  trailerBackdrop.classList.toggle('is-hidden');
  trailerBackdrop.addEventListener('click', closeTrailerModal);
  trailerFrame.classList.toggle('is-hidden');
  trailerFrame.src = `https://www.youtube.com/embed/${key}`;
}

function closeTrailerModal(event) {
  if (event.target === trailerBackdrop) {
    trailerBackdrop.classList.toggle('is-hidden');
    trailerBackdrop.removeEventListener('click', closeTrailerModal);
    trailerFrame.classList.toggle('is-hidden');
    trailerFrame.src = '';
  }
}
