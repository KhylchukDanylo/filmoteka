// import '../css/01-gallery.css';
import { fetchPopularMovies, fetchMoviesGenres } from './api-service';
import defaultImg from '../images/437973.webp';
import { createPaginationMarkupBasedOnScreenSize } from './pagination';
const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('#search-box');
const buttonEl = document.querySelector('.test');
const listEl = document.querySelector('.movie');
const containerEl = document.querySelector('.container');
const paginationList = document.querySelector('.pagination-list');
let totalPages = null;
let currentPage = null;
let screenWidth = containerEl.offsetWidth;
let popularMovies = [];

// window.addEventListener('resize', onWindowSizeChange);

// // ================ fetch popular movies for start pages ==================//
createMovieList(1);
async function createMovieList(page) {
  await fetchPopularMovies(1)
    .then(({ data, data: { results } }) => {
      popularMovies = [];
      results.forEach(movie => {
        const movieData = {
          id: movie.id,
          poster: movie.poster_path,
          title: movie.original_title,
          genres: movie.genre_ids,
          year: movie.release_date.slice(0, 4),
        };
console.log(1);
        popularMovies.push(movieData);
      });
    })
    .catch(error => console.log(error));

  await fetchMoviesGenres()
    .then(response => {
      const {
        data: { genres },
      } = response;

      popularMovies.forEach(movie => {
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

  listEl.innerHTML = popularMovies
    .map(({ id, poster, title, genres, year }) => {
      return `<li class="movie__card">
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
<p class="gallery__text" data-id="${id}">${genres} | ${year}</p></div>
    
  </a>
</li>`;
    })
    .join('');
}

// MARIA
// currentPage = response.data.page;
// totalPages = response.data.total_pages;

// const markup = createPaginationMarkupBasedOnScreenSize({
//   screenWidth,
//   currentPage,
//   totalPages,
// });
// renderPagination(markup);

// paginationList.addEventListener('click', onPaginationBtnClick);
// });

// ====================== Fetch Movie By Query =================== //
// formEl.addEventListener('submit', searchMovies);

// function searchMovies(evt) {
//   evt.preventDefault();

//   const searchToMovie = inputEl.value.trim();
//   clearMoviesContainer();
//   fetchMoviesBySearch(searchToMovie, 1).then(response => {
//     //<-- fetchPopularMovies( 1 <- number of page for pagination)
//     console.log(response);
//     const filmsArray = response.data.results;
//     console.log(filmsArray);
//     filmsArray.forEach(element => {
//       const newGenresArray = [];
//       const resultGenres = element.genre_ids.map(genreId => {
//         const resulIdtArray = arrayGenres.map(item => {
//           if (item.id === genreId) {
//             newGenresArray.push(item.name);
//           }
//         });
//       });
//       renderMoviesCard(element, newGenresArray);
//     });
//   });
// }

// =================== Clear Movies Container =================== //

// function clearMoviesContainer() {
//   listEl.innerHTML = '';
// }

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
