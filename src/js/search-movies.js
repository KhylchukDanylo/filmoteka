import { fetchMoviesBySearch} from './api-service';
import defaultImg from '../images/437973.webp';
import {
  paginationList,
  addPagination,
  containerEl,
  CURRENT_PAGE,
  TOTAL_PAGES,
  CURRENT_STATE,
  MOVIE_TO_SEARCH,
} from './pagination';
import { allGenres } from './data/jenres.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteNotFoundPage, onClearFiltersButtonClick } from './filters';

import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';

import createMovieList from './popular-movies';

export const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('#search-box');
export const listEl = document.querySelector('.movie');
let screenWidth = containerEl.offsetWidth;
let moviesList = [];
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

    moviesList.forEach(movie => {
      movie.genres = movie.genres.map(id => {
        
        allGenres.forEach(object => {
          if (object.id === id) {
            id = object.name;
          }
        });
        return id;
      });

      switch (true) {
        case movie.genres.length > 0 && movie.genres.length <= 2:
          movie.genres = movie.genres.join(', ');
          break;

        case movie.genres.length > 2:
          movie.genres[2] = 'Other';
          movie.genres = movie.genres.slice(0, 3).join(', ');
          break;

        default:
          movie.genres = 'N/A';
          break;
      }
    });

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

  function renderMoviesCard(arrayMovies) {
    const markup = arrayMovies
      .map(({ id, poster, title, genres, year, rating }) => {
        return `<li class="movie__item" id="${id}">
            <a href="#" class="movie__link" >
            <div class="movie__wrapper" >
            <picture>
                <source
                  media="(min-width:1200px)"
                  
                  srcset="${
                    poster
                      ? `https://image.tmdb.org/t/p/w500${poster}`
                      : defaultImg
                  }"
                  type="image/jpeg"
                />
                <source
                  media="(min-width:768px)"
                  srcset="${
                    poster
                      ? `https://image.tmdb.org/t/p/w342/${poster}`
                      : defaultImg
                  }"
                  type="image/jpeg"
                />
                <source
                  media="(max-width:767px)"
                  
                  srcset="${
                    poster
                      ? `https://image.tmdb.org/t/p/w342/${poster}`
                      : defaultImg
                  }"
                  type="image/jpeg"
                />
          
                <img
                  class="movie-image"
                  src="${
                    poster
                      ? `https://image.tmdb.org/t/p/w500/${poster}`
                      : defaultImg
                  }"
                  loading="lazy"
                  alt="${title}"
                  width="395"
                  height="574"
                />
              </picture>
            
            </div>
              
          <div class="movie__text"><h3 class="movie__name">${title}</h3>
          <p class="movie__genre" data-id="${id}">${genres} | ${year}</p></div>
              ${
                !rating || rating == '0.0'
                  ? `<div class="movie__rating movie__rating--grey">NA</div>`
                  : `<div class="movie__rating movie__rating--${getClassByVote(
                      rating
                    )}">${rating}</div>`
              }
            </a>
          </li>`;
      })
      .join('');

    listEl.innerHTML = markup;
    formEl.reset();
  }
}

// the function of determining the color of the border depending on the rating

function getClassByVote(vote) {
  if (vote >= 7) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

export {getClassByVote} ;
