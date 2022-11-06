import { fetchPopularMovies, fetchMoviesGenres } from './api-service';
import defaultImg from '../images/437973.webp';
import { paginationList, addPagination, containerEl} from './pagination';
const listEl = document.querySelector('.movie');
let screenWidth = containerEl.offsetWidth;
let popularMovies = [];


// // ================ fetch popular movies for start pages ==================//
createMovieList(1);

export async function createMovieList(page) {
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
        };

        popularMovies.push(movieData);
      });
      
      paginationList.currentPage = data.page;
      paginationList.totalPages = data.total_pages;
      paginationList.currentState = 'popular';
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
  </a>
</li>`;
    })
    .join('');
  
  addPagination({
  screenWidth,
  currentPage: paginationList.currentPage,
  totalPages: paginationList.totalPages,
});
}