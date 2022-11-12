import defaultImg from '../images/437973.webp';
import { fetchMovieById } from './api-service';
import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';
import { closeModal } from './modal-movie-render';
import { genresMaker } from './templates/genres-maker';

const movieList = document.querySelector('.movie');
const containerNothing = document.querySelector('.wrap-gallery');
const watchedList = localStorage.getItem('wached-movies');
const parsedWatchedList = JSON.parse(watchedList) || [];
const queueList = localStorage.getItem('queue-movies');
const parsedQueueList = JSON.parse(queueList) || [];

export { showWatchedList, showQueueList, parsedWatchedList, parsedQueueList };

window.addEventListener('click', e => {
  if (e.target.id === 'btn-watched') {
    closeModal();
    clear();
    showWatchedList(parsedWatchedList);
  }
  if (e.target.id === 'btn-queue') {
    closeModal();
    clear();
    showQueueList(parsedQueueList);
  }
});

let moviesList = [];

function showWatchedList(list) {
  if (parsedWatchedList.length > 0) {
    containerNothing.style.display = 'none';
  } else {
    containerNothing.style.display = 'block';
  }
  moviesList = [];
  clear();
  list.forEach(id => {
    createMovieList(id);
  });
}

function showQueueList(list) {
  if (parsedQueueList.length > 0) {
    containerNothing.style.display = 'none';
  } else {
    containerNothing.style.display = 'block';
  }
  moviesList = [];
  clear();
  list.forEach(id => {
    createMovieList(id);
  });
}

function clear() {
  movieList.innerHTML = '';
}

showWatchedList(parsedWatchedList);

async function createMovieList(id) {
  try {
    const response = await fetchMovieById(id);

    let moviesData = {
      id: response.data.id,
      poster: response.data.poster_path,
      title: response.data.original_title,
      genres: response.data.genres.map(genre => genre.name),
      year: response.data?.release_date?.slice(0, 4) || 'N/A',
      rating: response.data.vote_average.toFixed(1),
    };
    moviesList.push(moviesData);

    switch (true) {
      case moviesData.genres.length > 0 && moviesData.genres.length <= 2:
        moviesData.genres = moviesData.genres.join(', ');
        break;
      case moviesData.genres.length > 2:
        moviesData.genres[2] = 'Other';
        moviesData.genres = moviesData.genres.slice(0, 3).join(', ');
        break;
      default:
        moviesData.genres = 'N/A';
        break;
    }


    renderMoviesCard(moviesList);
  } catch (error) {
    console.log(error);
  }
}

function renderMoviesCard(moviesList) {
  const markup = moviesList
    .map(({ id, poster, title, genres, year, rating }) => {
      return `<li class="movie__item" id="${id}">
        <a href="#" class="movie__link" >
        <div class="movie__wrapper" >
        <picture>
            <source
              media="(min-width:1200px)"

              srcset="${
                poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultImg
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

  movieList.innerHTML = markup;
}

function getClassByVote(vote) {
  if (vote >= 7) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
