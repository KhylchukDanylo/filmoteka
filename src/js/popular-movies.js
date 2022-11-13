import { fetchPopularMovies, fetchMoviesGenres } from './api-service';
import { createMovieListBySearch } from './search-movies';
import defaultImg from '../images/437973.webp';
import {genresMaker} from './templates/genres-maker';
import {
  paginationList,
  addPagination,
  CURRENT_PAGE,
  TOTAL_PAGES,
  CURRENT_STATE,
  MOVIE_TO_SEARCH,
} from './pagination';
import { refs } from './DOM-elements';
import { getClassByVote } from './search-movies';
import { allGenres } from './data/jenres.js';
import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';
import {lastCard} from './templates/lastCard';
import {renderMoviesCard} from './templates/movieCard';
import { FILTERS_PARAMS, resetFiltersButtonAppereance } from './filters';
const { logoFromHeader, container} = refs;
const listEl = document.querySelector('.movie');
let screenWidth = container.offsetWidth;
export let popularMovies = [];

logoFromHeader.addEventListener('click', onLogoClick);

try {
  const currentPage = JSON.parse(localStorage.getItem(CURRENT_PAGE));
  if (currentPage === null) {
    throw new Error();
  }
  const totalPages = JSON.parse(localStorage.getItem(TOTAL_PAGES));
  const currentState = JSON.parse(localStorage.getItem(CURRENT_STATE));
  if (currentState !== "filter") {
    resetFiltersButtonAppereance();
  }

  paginationList.currentPage = currentPage;
  paginationList.totalPages = totalPages;
  paginationList.currentState = currentState;
} catch (err) {
  paginationList.currentPage = 1;
  resetFiltersButtonAppereance();
}

try {
  const movie = JSON.parse(localStorage.getItem(MOVIE_TO_SEARCH));
  if (movie === null) {
    throw new Error();
  }
  paginationList.movieToSearch = movie;
} catch (err) {
  console.log('There are no movies to search in local Storage yet');
}

try {
  const filtersParams = JSON.parse(localStorage.getItem(FILTERS_PARAMS));
  if (filtersParams === null) {
    throw new Error();
  }
  const currentState = JSON.parse(localStorage.getItem(CURRENT_STATE));
  paginationList.currentState = currentState;
  paginationList.queryParams = { ...filtersParams };
} catch (err) {
  console.log("no filters params");
}

if (!paginationList.currentState || paginationList.currentState === 'popular') {
  createMovieList(paginationList.currentPage);
}
if (paginationList.currentState === 'search') {
  createMovieListBySearch(
    paginationList.movieToSearch,
    paginationList.currentPage
  );
}
import {fetchAndRenderMoviesByFilter} from './filters'
if (paginationList.currentState === 'filter') {
  fetchAndRenderMoviesByFilter();
}
// // ================ fetch popular movies for start pages ==================//

export async function createMovieList(page) {
  addSpinner();
  await fetchPopularMovies(page)
    .then(({ data, data: { results } }) => {
      popularMovies = [];
      results.forEach(movie => {
        const movieData = {
          id: movie.id,
          poster: movie.poster_path,
          title: movie.original_title,
          genres: movie.genre_ids,
          year: movie.release_date.slice(0, 4),
          rating: movie.vote_average.toFixed(1),
        };

        popularMovies.push(movieData);
      });

      paginationList.currentPage = data.page;
      paginationList.totalPages = data.total_pages;
      paginationList.currentState = 'popular';
      localStorage.setItem(
        CURRENT_PAGE,
        JSON.stringify(paginationList.currentPage)
      );
      localStorage.setItem(
        TOTAL_PAGES,
        JSON.stringify(paginationList.totalPages)
      );
      localStorage.setItem(
        CURRENT_STATE,
        JSON.stringify(paginationList.currentState)
      );
      localStorage.removeItem(FILTERS_PARAMS);

    })
    .catch(error => console.log(error));

    genresMaker(popularMovies);

  renderMoviesCard(popularMovies);

  

  removeSpinner();
  addPagination({
    screenWidth,
    currentPage: paginationList.currentPage,
    totalPages: paginationList.totalPages,
  });

}

function onLogoClick() {
  localStorage.removeItem(CURRENT_PAGE);
  localStorage.removeItem(TOTAL_PAGES);
  localStorage.removeItem(CURRENT_STATE);
  localStorage.removeItem(MOVIE_TO_SEARCH);
  resetFiltersButtonAppereance();
}

export function addLastCard() {
  listEl.insertAdjacentHTML('beforeend', lastCard);
}
