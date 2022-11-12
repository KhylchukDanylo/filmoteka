import { fetchMoviesBySearch} from './api-service';
import { refs } from './DOM-elements';
import {genresMaker} from './templates/genres-maker';
import {
  paginationList,
  addPagination,
  CURRENT_PAGE,
  TOTAL_PAGES,
  CURRENT_STATE,
  MOVIE_TO_SEARCH,
} from './pagination';
import { allGenres } from './data/jenres.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteNotFoundPage, onClearFiltersButtonClick } from './filters';
import {renderMoviesCard} from './templates/movieCard';
import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';
const { lastCardLink, container } = refs;


export const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('#search-box');
export const listEl = document.querySelector('.movie');
let screenWidth = container.offsetWidth;
export let moviesList = [];
formEl.addEventListener('submit', searchMovies);

function searchMovies(evt) {
  evt.preventDefault();
  addSpinner();
  if (paginationList.currentState === 'filter') {
    onClearFiltersButtonClick();
  }
  deleteNotFoundPage();
  createListBySearch(1);
}

export async function createListBySearch(page) {
  const searchToMovie = inputEl.value.trim();

  if (!searchToMovie) {
    Notify.warning('Enter movie to search');
    console.log('enter movie to search');
    removeSpinner();
    return;
  }

  localStorage.setItem(MOVIE_TO_SEARCH, JSON.stringify(searchToMovie));
  paginationList.movieToSearch = searchToMovie;
  createMovieListBySearch(paginationList.movieToSearch, page);
}

export async function createMovieListBySearch(searchToMovie, page) {
  try {
    await fetchMoviesBySearch(searchToMovie, page).then(response => {
      const {
        data,
        data: { results },
      } = response;

      if (results.length === 0) {
        formEl.reset();
        Notify.failure('Sorry, but nothing was found');

        removeSpinner();
        throw new Error('nothing was found');
      } else {
        moviesList = [];
        results.forEach(movie => {
          let moviesData = {
            id: movie.id,
            poster: movie.poster_path,
            title: movie.original_title,
            genres: movie.genre_ids,
            year: movie?.release_date?.slice(0, 4) || 'N/A',
            rating: movie.vote_average.toFixed(1),
          };
          moviesList.push(moviesData);
        });
        paginationList.currentPage = data.page;
        paginationList.totalPages = data.total_pages;
        paginationList.currentState = 'search';
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
      }
    });

    genresMaker(moviesList);
    renderMoviesCard(moviesList);
    removeSpinner();
    addPagination({
      screenWidth,
      currentPage: paginationList.currentPage,
      totalPages: paginationList.totalPages,
    });
  } catch (error) {
    console.log(error);
  }

}

// the function of determining the color of the border depending on the rating

export function getClassByVote(vote) {
  if (vote >= 7) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}


