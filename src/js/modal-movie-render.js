import { fetchMovieById } from './api-service';
import svgIcon from '../images/icons.svg';
import { refs } from './DOM-elements';
import defaultImg from '../images/437973.webp';
const { trailerFrame, movieModal, movieBackdrop: backdrop } = refs;
// import { showTrailer } from './trailer';
import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const listEl = document.querySelector('.movie');
// const movieModal = document.querySelector('.movie__modal'); перенёс в DOM-elements.js
// const backdrop = document.querySelector('.backdrop');

listEl.addEventListener('click', onImgClick);

//сделал переменную через let ибо для открытия трейлера тоже нужен id
let movieId;

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  movieId = parseInt(evt.target.parentElement.parentElement.id);

  openModal(movieId);
}

async function openModal(id) {
  trailerFrame.classList.add('hide-it');
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

  backdrop.classList.remove('is-hidden');
  movieModal.classList.remove('is-hidden');
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
      <button type="button" class="movie__btn-watched" id="btn-watched">
          add to Watched
      </button>
          <button type="button" class="movie__btn-queue" id="btn-queue">
      add to queue
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

function closeModal() {
  movieModal.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');

  document.body.classList.remove('stop-scrolling');
}

window.addEventListener('click', e => {
  // console.log(e.target);
  if (e.target === backdrop) {
    closeModal();
  }

  if (e.target.id === 'btn-watched') {
    const btn = document.querySelector('#btn-watched');
    btn.classList.toggle('selected');
    if (btn.classList.contains('selected')) {
      btn.textContent = 'remove from watched';
      btn.style.padding = '0';
    } else {
      btn.textContent = 'add to watched';
      btn.style.padding = '6px 27px';
    }
  }

  if (e.target.id === 'btn-queue') {
    const btn = document.querySelector('#btn-queue');
    btn.classList.toggle('selected');
    if (btn.classList.contains('selected')) {
      btn.textContent = 'remove from queue';
      btn.style.padding = '0';
    } else {
      btn.textContent = 'add to queue';
    }
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

export { movieId };
export { backdrop };
//save original render
// `<div class="movie__inner">
//   <img
//     src="${IMG_URL}${poster_path}"
//     alt="${original_title}"
//     class="movie__poster"
//   />
//   <div class="movie__info">
//     <h2 class="movie__title">${title}</h2>
//     <div class="movie__info-list">
//       <ul class="movie__characters">
//         <li>
//           <p>Vote / Votes</p>
//         </li>
//         <li>
//           <p>Popularity</p>
//         </li>
//         <li>
//           <p>Original Title</p>
//         </li>
//         <li>
//           <p>Genre</p>
//         </li>
//       </ul>
//       <ul class="movie__data">
//         <li>
//           <p>
//             <span class="movie__data-rating">${vote_average.toFixed(
//               1
//             )}</span>  <span class="movie__data-slash">/</span> <span class="movie__data-count">${vote_count}</span>
//           </p>
//         </li>
//         <li>
//           <p>${popularity.toFixed(1)}</p>
//         </li>
//         <li>
//           <p>${original_title}</p>
//         </li>
//         <li>
//           <p>${genres.map(genre => genre.name).join(', ')}</p>
//         </li>
//       </ul>
//     </div>
//     <p class="movie__about">About</p>
//     <p class="movie__description">${overview}</p>
//     <div class="button-wrap">
//       <button type="button" class="movie__btn-watched">
//           add to Watched
//       </button>
//           <button type="button" class="movie__btn-queue">
//       add to queue
//       </button>
//     </div>
//     <button type="button" class="movie__btn-close">
//       X
//     </button>
//   </div>
// </div>`;

//original img

//  <img
//    src="${IMG_URL}${poster_path}"
//    alt="${original_title}"
//    class="movie__poster"
//  />;
