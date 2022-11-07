import { fetchPopularMovies, fetchMoviesGenres } from './api-service';
import defaultImg from '../images/437973.webp';
import { paginationList, addPagination, containerEl } from './pagination';
import { allGenres } from './data/jenres.js';
import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';
const listEl = document.querySelector('.movie');
let screenWidth = containerEl.offsetWidth;
let popularMovies = [];

// // ================ fetch popular movies for start pages ==================//
createMovieList(1);
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
    })
    .catch(error => console.log(error));

  popularMovies.forEach(movie => {
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

  listEl.innerHTML = popularMovies
    .map(({ id, poster, title, genres, year, rating }) => {
      return `<li class="movie__item">
  <a href="#" class="movie__link" id="${id}">
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
          poster ? `https://image.tmdb.org/t/p/w342/${poster}` : defaultImg
        }"
        type="image/jpeg"
      />
      <source
        media="(max-width:767px)"
        
        srcset="${
          poster ? `https://image.tmdb.org/t/p/w342/${poster}` : defaultImg
        }"
        type="image/jpeg"
      />

      <img
        class="movie-image"
        src="${
          poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg
        }"
        loading="lazy"
        alt="${title}"
        width="395"
        height="574"
      />
    </picture>
<div class="movie__text"><h3 class="movie__name">${title}</h3>
<p class="movie__genre" data-id="${id}">${genres} | ${year}</p></div>
    <button type="button" class="show-trailer">trailer</button>
    <div class="movie__rating movie__rating--${getClassByVote(
      rating
    )}">${rating}</div>
  </a>
</li>`;
    })
    .join('');

  removeSpinner();
  addPagination({
    screenWidth,
    currentPage: paginationList.currentPage,
    totalPages: paginationList.totalPages,
  });
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
