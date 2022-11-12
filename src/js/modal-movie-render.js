import { fetchMovieById } from './api-service';
import svgIcon from '../images/icons.svg';
import { refs } from './DOM-elements';
import defaultImg from '../images/437973.webp';
const {
  movieModal,
  movieBackdrop: backdrop,
  genresForm,
  yearsForm,
} = refs;
import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const listEl = document.querySelector('.movie');

listEl.addEventListener('click', onImgClick);

let movieId;
let queueText = '';
let watchedText = '';
let watcheddBtnPadding = '';
const queueMovies = JSON.parse(localStorage.getItem('queue-movies')) || [];
const watchedMovies = JSON.parse(localStorage.getItem('wached-movies')) || [];

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  movieId = +evt.target.closest('li').id;

  if (genresForm) { 
  const filterIsOpened =
    !genresForm.classList.contains('is-hidden') ||
    !yearsForm.classList.contains('is-hidden');
  if (filterIsOpened) {
    return;
  }
}

  openModal(movieId);

  queueText = queueMovies.includes(movieId)
    ? 'remove from queue'
    : 'add to queue';
  watchedText = watchedMovies.includes(movieId)
    ? 'remove from watched'
    : 'add to watched';
  watcheddBtnPadding = watchedMovies.includes(movieId) ? '0' : '6px 27px';
}

async function openModal(id) {
  addSpinner();
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

  backdrop.classList.remove('hide-modal');
  // movieModal.classList.remove('is-hidden');
  document.body.classList.add('stop-scrolling');

  movieModal.innerHTML = `<div class="movie__inner">
  <div class="image__thumb"> 
  <picture>
      <source
        media="(min-width:1200px)"
        srcset="${poster_path ? `${IMG_URL}${poster_path}` : defaultImg}"
        type="image/jpeg"
      />
      <source
        media="(min-width:768px)"
        srcset="${
          poster_path
            ? `https://image.tmdb.org/t/p/w342/${poster_path}`
            : defaultImg
        }"
        type="image/jpeg"
      />
      <source
        media="(max-width:767px)"
        srcset="${
          poster_path
            ? `https://image.tmdb.org/t/p/w342/${poster_path}`
            : defaultImg
        }"
        type="image/jpeg"
      />
      <img
        class="movie__poster"
        src="${poster_path ? `${IMG_URL}${poster_path}` : defaultImg}"
        loading="lazy"
        alt="${original_title}"
        width="395"
        height="574"
      />
    </picture>
  </div>

  <div class="movie__info">
    <h2 class="movie__title">${title}</h2>
    <div class="movie__info-list">
      <ul class="movie__characters">
        <li>
          <p>Vote</p>
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
           ${
             vote_average
               ? `<div class="rating">
                <div class="rating__value">
                ${vote_average.toFixed(1)}
                </div>
                <div class="rating__body">
                  <div class="rating__active"></div>
                  <div class="rating__items">
                    <input
                      type="radio"
                      class="rating__item"
                      value="1"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="2"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="3"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="4"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="5"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="6"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="7"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="8"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="9"
                      name="rating"
                    />
                    <input
                      type="radio"
                      class="rating__item"
                      value="10"
                      name="rating"
                    />
                  </div>
                </div>
              </div>`
               : `<div>No votes yet</div>`
           }    
              
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
      <button type="button" class="movie__btn movie__btn-watched" id="btn-watched" style="padding:${watcheddBtnPadding}">
          ${watchedText}
      </button>
          <button type="button" class="movie__btn movie__btn-queue" id="btn-queue">
     ${queueText}
      </button>
    </div>
    <button type="button" class="movie__btn-close">
      <svg width="16" height="16">
           <use href="${svgIcon}#icon-cross"></use>
       </svg>
    </button>
    <a class="show-trailer" type="button" >
       <svg class="youtube__icon" width="100" height="75">
           <use href="${svgIcon}#youtube"></use>
       </svg>
    </a>
  </div>
</div>`;

  //rating functions
  const ratings = document.querySelectorAll('.rating');

  if (ratings.length > 0) {
    initRatings();
  }

  //main function
  function initRatings() {
    let ratingActive, ratingValue;
    //бегаем по всем рейтингам на странице
    for (let i = 0; i < ratings.length; i++) {
      const rating = ratings[i];
      initRating(rating);
    }
    // инициализируем конкретный рейтинг
    function initRating(rating) {
      initRatinfVars(rating);
      setRatingActiveWidth();
    }

    //инициализация переменных
    function initRatinfVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
    }

    //инициализируем ширину аутивных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.1;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
  }
  removeSpinner();
  const btnClose = document.querySelector('.movie__btn-close');
  btnClose.addEventListener('click', () => closeModal());
}

export function closeModal() {
  // movieModal.classList.add('is-hidden');
  backdrop.classList.add('hide-modal');

  document.body.classList.remove('stop-scrolling');
}

window.addEventListener('click', e => {
  //костыль, можно красивее но пока что так
  let movieTitle = '';
  if (e.target.parentNode.parentNode.firstElementChild.nodeName === 'H2') {
    movieTitle = e.target.parentNode.parentNode.firstElementChild.textContent;
    console.log(movieTitle);
  }

  if (e.target === backdrop) {
    closeModal();
  }

  if (e.target.id === 'btn-watched') {
    if (!watchedMovies.includes(movieId)) {
      addToWached(movieId, movieTitle);
    } else {
      removeFromWached(movieId, movieTitle);
    }
  }
  if (e.target.id === 'btn-queue') {
    if (!queueMovies.includes(movieId)) {
      addToQueue(movieId, movieTitle);
    } else {
      removeFromQueue(movieId, movieTitle);
    }
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});


const trailerNotifyOptions =  {position: 'center-top',timeout: 1500, fontFamily: 'Roboto',};
function addToQueue(movieId, movieTitle) {
  const btn = document.querySelector('#btn-queue');
  queueText = 'remove from queue';
  btn.textContent = queueText;
  Notify.success(`"${movieTitle}" added to queue`, trailerNotifyOptions);
  queueMovies.push(movieId);
  localStorage.setItem('queue-movies', JSON.stringify(queueMovies));
}

function removeFromQueue(movieId, movieTitle) {
  Notify.warning(`"${movieTitle}" removed from queue`, trailerNotifyOptions);
  const btn = document.querySelector('#btn-queue');
  queueText = 'add to queue';
  btn.textContent = queueText;
  localStorage.removeItem('queue-movies');
  const movieIndex = queueMovies.findIndex((element, index) =>
    element === movieId ? index : null
  );
  queueMovies.splice(movieIndex, 1);
  localStorage.setItem('queue-movies', JSON.stringify(queueMovies));
}

function addToWached(movieId, movieTitle) {
  Notify.success(`"${movieTitle}" added to wached`, trailerNotifyOptions);
  const btn = document.querySelector('#btn-watched');
  btn.style.padding = '0';
  watchedText = 'remove from watched';
  btn.textContent = watchedText;
  watchedMovies.push(movieId);
  localStorage.setItem('wached-movies', JSON.stringify(watchedMovies));
}

function removeFromWached(movieId, movieTitle) {
  Notify.warning(`"${movieTitle}" removed from wached`, trailerNotifyOptions);
  const btn = document.querySelector('#btn-watched');
  watchedText = 'add to watched';
  btn.style.padding = '6px 27px';
  btn.textContent = watchedText;

  localStorage.removeItem('wached-movies');
  const movieIndex = watchedMovies.findIndex((element, index) =>
    element === movieId ? index : null
  );
  watchedMovies.splice(movieIndex, 1);
  localStorage.setItem('wached-movies', JSON.stringify(watchedMovies));
}

export { movieId, backdrop };
