import { refs } from './DOM-elements';
const {libraryGallery} = refs;
import { fetchMovieById } from './api-service';
import { Notify } from 'notiflix';

const queueMovies = JSON.parse(localStorage.getItem('queue-movies')) || [];
const watchedMovies = JSON.parse(localStorage.getItem('wached-movies')) || [];

function fetchMoviesInfo(){
    console.log(queueMovies);
    console.log(watchedMovies);
    libraryGallery.innerHTML = '';
    
    fetchMovieById(movieId).then(moviesInfo =>  renderLibraryGallery(moviesInfo))
    .catch(error =>{
        console.log(error);
        Notify.failure('movies not found');
    });    
}


fetchMoviesInfo();

function renderLibraryGallery(data){}
/*
`<li class="movie__item" id="${id}">
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
</li>`
*/