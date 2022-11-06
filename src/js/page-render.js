// import '../css/01-gallery.css';
import {
  fetchPopularMovies,
  fetchMovieById,
  fetchMoviesGenres,
  fetchMoviesBySearch,
} from './api-service';
import { createPaginationMarkupBasedOnScreenSize } from './pagination';

import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.movies-list');

// ================Create array all movies genres==================//
const arrayGenres = []; // <-- arrray all movies genres

fetchMoviesGenres().then(response => {
  // console.log(response);

  for (const elm of response.data.genres) {
    // console.log(elm);
    arrayGenres.push(elm);
  }
});

const containerEl = document.querySelector('.container');
const paginationList = document.querySelector('.pagination-list');
let totalPages = null;
let currentPage = null;
let screenWidth = containerEl.offsetWidth;

window.addEventListener('resize', onWindowSizeChange);

// // ================ fetch popular movies for start pages ==================//
fetchPopularMovies(1).then(response => {
  //<-- fetchPopularMovies(3 <- number of page for pagination)
  console.log(response);
  const filmsArray = response.data.results;
  console.log(filmsArray);
  filmsArray.forEach(element => {
    const newGenresArray = [];
    const resultGenres = element.genre_ids.map(genreId => {
      const resulIdtArray = arrayGenres.map(item => {
        if (item.id === genreId) {
          newGenresArray.push(item.name);
        }
      });
    });
    renderMoviesCard(element, newGenresArray);
  });

  currentPage = response.data.page;
  totalPages = response.data.total_pages;

  const markup = createPaginationMarkupBasedOnScreenSize({
    screenWidth,
    currentPage,
    totalPages,
  });
  renderPagination(markup);

  paginationList.addEventListener('click', onPaginationBtnClick);
});

// ====================== Fetch Movie By Query =================== //
formEl.addEventListener('submit', searchMovies);

function searchMovies(evt) {
  evt.preventDefault();
  addSpinner();
  const searchToMovie = inputEl.value.trim();
  clearMoviesContainer();
  fetchMoviesBySearch(searchToMovie, 1).then(response => {
    //<-- fetchPopularMovies( 1 <- number of page for pagination)
    console.log(response);
    const filmsArray = response.data.results;
    console.log(filmsArray);
    filmsArray.forEach(element => {
      const newGenresArray = [];
      const resultGenres = element.genre_ids.map(genreId => {
        const resulIdtArray = arrayGenres.map(item => {
          if (item.id === genreId) {
            newGenresArray.push(item.name);
          }
        });
      });
      renderMoviesCard(element, newGenresArray);
    });
    removeSpinner();
  });
}

// ==================== Render Movies Card ===================== //
function renderMoviesCard(movie, genres) {
  const { id, poster_path, title, original_title, release_date } = movie;
  listEl.innerHTML += `<li class="movie-item">
  <a href="#" class="movie-link" id="${id}">
    <picture>
      <source
        media="(min-width:1200px)"
        srcset="https://image.tmdb.org/t/p/w500${poster_path}"
        type="image/jpeg"
      />
      <source
        media="(min-width:768px)"
        srcset="https://image.tmdb.org/t/p/w342${poster_path}"
        type="image/jpeg"
      />
      <source
        media="(max-width:767px)"
        srcset="https://image.tmdb.org/t/p/w342${poster_path}"
        type="image/jpeg"
      />

      <img
        class="movie-image"
        src="https://image.tmdb.org/t/p/w500/${poster_path}"
        loading="lazy"
        alt="${title}"
        width="395"
        height="574"
      />
    </picture>

    <h3 class="../css/01-gallery.css">${original_title}</h3>
    <p class="movie-genres">${genres.join(', ')}</p>
    <p class="movie-year">${+parseInt(release_date)}</p>
  </a>
</li>`;
}

// =================== Clear Movies Container =================== //

function clearMoviesContainer() {
  listEl.innerHTML = '';
}

// ============= Callback for eventListener on pagination button ============== //

function onPaginationBtnClick(evt) {
  if (evt.target.closest('button') === null) {
    return;
  }
  if (evt.target.textContent === `${currentPage}`) {
    return;
  }

  currentPage = setTargetPage(evt.target, currentPage);
  const markup = createPaginationMarkupBasedOnScreenSize({
    screenWidth,
    currentPage,
    totalPages,
  });
  renderPagination(markup);

  fetchPopularMovies(currentPage).then(response => {
    clearMoviesContainer();
    const filmsArray = response.data.results;
    filmsArray.forEach(element => {
      const newGenresArray = [];
      const resultGenres = element.genre_ids.map(genreId => {
        const resulIdtArray = arrayGenres.map(item => {
          if (item.id === genreId) {
            newGenresArray.push(item.name);
          }
        });
      });
      renderMoviesCard(element, newGenresArray);
    });
  });
}

//===================== Choose a new currentPage based on the user's selection  ===========================//
function setTargetPage(element, currentPage) {
  if (
    element.closest('button').classList.contains('arrow-to-start-button-js')
  ) {
    return currentPage - 1;
  }
  if (element.closest('button').classList.contains('arrow-to-end-button-js')) {
    return currentPage + 1;
  }
  return Number(element.closest('button').textContent);
}

// ==================== Render pagination buttons ===================== //

function renderPagination(markup) {
  paginationList.innerHTML = markup;
}

// ==================== Change pagination appearance while the screen is getting bigger or smaller ===================== //

function onWindowSizeChange(evt) {
  screenWidth = containerEl.offsetWidth;
  const markup = createPaginationMarkupBasedOnScreenSize({
    screenWidth,
    currentPage,
    totalPages,
  });
  renderPagination(markup);
}
