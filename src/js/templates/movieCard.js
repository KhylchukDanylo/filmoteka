import { getClassByVote } from '../search-movies';
import defaultImg from '../../images/437973.webp';
import { refs } from '../DOM-elements';
import { addLastCard } from '../popular-movies';
import { setTargetPage, paginationList } from '../pagination';
import { renderTargetPage } from '../eventListeners';

const { movieList, formEl } = refs;
export function renderMoviesCard(moviesList) {
    const markup = moviesList
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

  movieList.innerHTML = markup;

  if (paginationList.currentPage < paginationList.totalPages) { 
    addLastCard();

      const lastCard = document.querySelector('.movie__last-img');
    lastCard.addEventListener('click', onLastCardClick);
  }
    formEl.reset();
};
  
function onLastCardClick(evt) {
  const targetPage = setTargetPage(evt.currentTarget, paginationList.currentPage);
  renderTargetPage(targetPage); 
}