import { fetchPopularMovies, fetchMoviesGenres } from './api-service';
import { createMovieListBySearch } from './search-movies';
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
import { refs } from './DOM-elements';
import { allGenres } from './data/jenres.js';
import { addSpinner } from './spinner';
import { removeSpinner } from './spinner';
const { logoFromHeader } = refs;
const listEl = document.querySelector('.movie');
let screenWidth = containerEl.offsetWidth;
let popularMovies = [];

logoFromHeader.addEventListener('click', onLogoClick);

try {
  const currentPage = JSON.parse(localStorage.getItem(CURRENT_PAGE));
  if (currentPage === null) {
    throw new Error();
  }
  const totalPages = JSON.parse(localStorage.getItem(TOTAL_PAGES));
  const currentState = JSON.parse(localStorage.getItem(CURRENT_STATE));

  paginationList.currentPage = currentPage;
  paginationList.totalPages = totalPages;
  paginationList.currentState = currentState;
} catch (err) {
  paginationList.currentPage = 1;
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

if (!paginationList.currentState || paginationList.currentState === 'popular') {
  createMovieList(paginationList.currentPage);
}
if (paginationList.currentState === 'search') {
  createMovieListBySearch(
    paginationList.movieToSearch,
    paginationList.currentPage
  );
}
// // ================ fetch popular movies for start pages ==================//
// createMovieList(1);

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
      return `<li class="movie__item" id="${id}">
  <a href="#" class="movie__link" >
  <div class="movie__wrapper">
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

function onLogoClick() {
  localStorage.removeItem(CURRENT_PAGE);
  localStorage.removeItem(TOTAL_PAGES);
  localStorage.removeItem(CURRENT_STATE);
  localStorage.removeItem(MOVIE_TO_SEARCH);
}
