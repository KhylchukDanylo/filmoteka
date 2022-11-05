import { fetchMoviesBySearch, fetchMoviesGenres } from './api-service';
import defaultImg from '../images/437973.webp';
import createMovieList from './popular-movies';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.movie');
let moviesList = [];
formEl.addEventListener('submit', searchMovies);

function searchMovies(evt) {
  evt.preventDefault();

  createListBySearch(1);
}

async function createListBySearch(page) {
  const searchToMovie = inputEl.value.trim();

  if (!searchToMovie) {
    console.log('enter movie to search');
    return;
  }

  await fetchMoviesBySearch(searchToMovie, 1)
    .then(response => {
      const {
        data,
        data: { results },
      } = response;

      if (results.length === 0) {
        formEl.reset();
      } else {
        moviesList = [];
        results.forEach(movie => {
          let moviesData = {
            id: movie.id,
            poster: movie.poster_path,
            title: movie.original_title,
            genres: movie.genre_ids,
            year: movie.release_date.slice(0, 4),
          };
          moviesList.push(moviesData);
        });
      }
    })
    .catch(error => console.log(error));

  await fetchMoviesGenres()
    .then(response => {
      const {
        data: { genres },
      } = response;

      moviesList.forEach(movie => {
        movie.genres = movie.genres.map(id => {
          genres.forEach(object => {
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
    })
    .catch(error => console.log(error));

  renderMoviesCard(moviesList);

  function renderMoviesCard(arrayMovies) {
    const markup = arrayMovies
      .map(({ id, poster, title, genres, year }) => {
        return `<li class="movie__card">
            <a href="#" class="movie__link" id="${id}">
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
          <div class="movie__text"><h3 class="movie__name">${title}</h3>
          <p class="gallery__text" data-id="${id}">${genres} | ${year}</p></div>
              
            </a>
          </li>`;
      })
      .join('');

      listEl.innerHTML = markup;
  }
}