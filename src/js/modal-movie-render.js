import { fetchMovieById } from './api-service';
import svgIcon from '../images/icons.svg';
import { refs } from './DOM-elements';
const { trailerFrame } = refs;
import { showTrailer } from './trailer';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const listEl = document.querySelector('.movie');
const movieModal = document.querySelector('.movie__modal');
const backdrop = document.querySelector('.backdrop');

listEl.addEventListener('click', onImgClick);

//сделал переменную через let ибо для открытия трейлера тоже нужен id
let movieId;

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  movieId = parseInt(evt.target.parentElement.parentElement.id);
  // console.log(movieId);

  openModal(movieId);
}

async function openModal(id) {
  const resp = await fetchMovieById(id);


  const {
    poster_path,
    original_title,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = resp.data;

  backdrop.classList.remove('is-hidden');
  movieModal.classList.remove('is-hidden');
  document.body.classList.add('stop-scrolling');

  movieModal.innerHTML = `<div class="movie__inner">
  <img
    src="${IMG_URL}${poster_path}"
    alt="${original_title}"
    class="movie__poster"
  />
  <div class="movie__info">
    <h2 class="movie__title">${title}</h2>
    <div class="movie__info-list">
      <ul class="movie__characters">
        <li>
          <p>Vote / Votes</p>
        </li>
        <li>
          <p>Popularity</p>
        </li>
        <li>
          <p>Original Title</p>
        </li>
        <li>
          <p>Genre</p>
        </li>
      </ul>
      <ul class="movie__data">
        <li>
          <p>
            <span class="movie__data-rating">${vote_average.toFixed(
              1
            )}</span>  <span class="movie__data-slash">/</span> <span class="movie__data-count">${vote_count}</span>
          </p>
        </li>
        <li>
          <p>${popularity.toFixed(1)}</p>
        </li>
        <li>
          <p>${original_title}</p>
        </li>
        <li>
          <p>${genres.map(genre => genre.name).join(', ')}</p>
        </li>
      </ul>
    </div>
    <p class="movie__about">About</p>
    <p class="movie__description">${overview}</p>
    <div class="button-wrap">
      <button type="button" class="movie__btn-watched" id="btn-watched">
          add to Watched
      </button>
          <button type="button" class="movie__btn-queue" id="btn-queue">
      add to queue
      </button>
    </div>
    <button type="button" class="movie__btn-close">
      X
    </button>
    <a class="show-trailer" type="button" >
       <svg class="youtube__icon" width="100" height="75">
           <use href="${svgIcon}#youtube"></use>
       </svg>
    </a>
  </div>
</div>`;

  const btnClose = document.querySelector('.movie__btn-close');
  btnClose.addEventListener('click', () => closeModal());
}

function closeModal() {
  movieModal.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');

  document.body.classList.remove('stop-scrolling');
}

window.addEventListener('click', e => {
  const hiddenMovieModal = movieModal.classList.contains('is-hidden');
  // console.log(e.target);
  if (e.target === backdrop && !hiddenMovieModal) {
    closeModal();
  }
  //костыль, позже подумаю как сделать красиво
  else if (e.target === backdrop && hiddenMovieModal) {
    movieModal.classList.remove('is-hidden');
    trailerFrame.classList.add('is-hidden');
    trailerFrame.src = '';
  }
  if(e.target.closest('.show-trailer')){
    movieModal.classList.add('is-hidden');
    trailerFrame.classList.remove('is-hidden');
    // console.log(movieId);
    showTrailer(movieId);
  }

  if (e.target.id === 'btn-watched') {
    const btn = document.querySelector('#btn-watched');
    btn.classList.toggle('selected');
    if (btn.classList.contains('selected'))
      btn.textContent = 'remove from watched';
    else {
      btn.textContent = 'add to watched';
    }
  }

  if (e.target.id === 'btn-queue') {
    const btn = document.querySelector('#btn-queue');
    btn.classList.toggle('selected');
    if (btn.classList.contains('selected'))
      btn.textContent = 'remove from queue';
    else {
      btn.textContent = 'add to queue';
    }
  }
});



window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !movieModal.classList.contains('is-hidden')) {
    closeModal();
  }
  //костыль, позже подумаю как сделать красиво
  else if (e.key === 'Escape' && movieModal.classList.contains('is-hidden')) {
    movieModal.classList.remove('is-hidden');
    trailerFrame.classList.add('is-hidden');
    trailerFrame.src = '';
  }
});
