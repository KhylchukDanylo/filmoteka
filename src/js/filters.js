import { fetchMoviesGenres, fetchMoviesByFilters } from './api-service';
import { refs } from './DOM-elements';
import defaultImg from '../images/437973.webp';
import { addPagination, paginationList } from './pagination';
import { createMovieList } from './popular-movies';
import { allGenres } from './data/jenres.js';
const {
  filterForm,
  genresForm,
  yearsForm,
  openFilterByGenresBtn,
  openFilterByYearsBtn,
  movieList,
  container,
  clearFiltersButton,
  lowerValueInput,
  higerValueInput,
  rangeValues,
} = refs;
let screenWidth = container.offsetWidth;
const generalFilterParams = {
  with_genres: '',
  'primary_release_date.lte': '2022',
  'primary_release_date.gte': '1900',
  // primary_release_year: '',
  include_adult: false,
  sort_by: 'popularity.desc',
};
// localStorage.setItem('generalFilterParams', JSON.stringify(generalFilterParams));
let lastFetchedParams = {
  with_genres: '',
  'primary_release_date.lte': '2022',
  'primary_release_date.gte': '1900',
  // primary_release_year: '',
  include_adult: false,
  sort_by: 'popularity.desc',
};

filterForm.addEventListener('change', onFormChange);
filterForm.addEventListener('reset', onFormReset);
filterForm.addEventListener('submit', onFormSubmit);
filterForm.addEventListener('click', openFiltersOptions);
filterForm.addEventListener('input', onInputChange);
clearFiltersButton.addEventListener('click', onClearFiltersButtonClick);

async function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(generalFilterParams);
  console.log(lastFetchedParams);

  hideFiltersByGenres();
  hideFiltersByYears();

  if (isInitialGeneralFilterParams(generalFilterParams)) {
    createMovieList(1);
    lastFetchedParams = { ...generalFilterParams };
    return;
  }
  fetchAndRenderMoviesByFilter();
  lastFetchedParams = { ...generalFilterParams };

  //     paginationList.currentState = 'filter';
  //     paginationList.queryParams = {...generalFilterParams};

  // const queryString = transformParamsIntoQuery(generalFilterParams);
  // fetchMoviesByFilters(queryString, 1).then(renderFiltersResult).catch(err => console.log(err));
}

function onFormChange(evt) {
  const isGenresForm = evt.target
    .closest('form')
    .classList.contains('genres__form');
  const isYearsForm = evt.target
    .closest('form')
    .classList.contains('years__form');
  const isAdultForm = evt.target
    .closest('form')
    .classList.contains('adult__form');
  const isSortForm = evt.target
    .closest('form')
    .classList.contains('sort__form');

  if (isGenresForm) {
    updateGenresParams(evt.target.closest('form'));
  }
  if (isYearsForm) {
    updateYearsParams(evt.target.closest('form'));
  }
  if (isAdultForm) {
    updateAdultParams(evt.target);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (isInitialGeneralFilterParams(generalFilterParams)) {
      createMovieList(1);
      lastFetchedParams = { ...generalFilterParams };
      return;
    }
    fetchAndRenderMoviesByFilter();
    lastFetchedParams = { ...generalFilterParams };
  }
  if (isSortForm) {
    updateSortParams(evt.target);

    if (isInitialGeneralFilterParams(generalFilterParams)) {
      createMovieList(1);
      lastFetchedParams = { ...generalFilterParams };
      return;
    }
    fetchAndRenderMoviesByFilter();
    lastFetchedParams = { ...generalFilterParams };
  }
}

function onFormReset(evt) {
  const isGenresForm = evt.target.classList.contains('genres__form');
  const isYearsForm = evt.target.classList.contains('years__form');

  if (isGenresForm) {
    generalFilterParams.with_genres = '';
    // console.log(generalFilterParams);
  }
  if (isYearsForm) {
    generalFilterParams['primary_release_date.lte'] = '2022';
    generalFilterParams['primary_release_date.gte'] = '1900';
    // console.log(generalFilterParams);
  }
  openFilterByGenresBtn.style.boxShadow =
    'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  openFilterByYearsBtn.style.boxShadow =
    'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  // openFilterByGenresBtn.style.borderColor = 'rgba(255, 0, 27, 0.5)';
  // openFilterByYearsBtn.style.borderColor = 'rgba(255, 0, 27, 0.5)';
}

function updateGenresParams(form) {
  const listOfGenres = getSelectedGenres(form);
  generalFilterParams.with_genres = listOfGenres;
}

function updateYearsParams(form) {
  let minValue = form.elements[0].value;
  let maxValue = form.elements[1].value;
  if (minValue > maxValue) {
    const additionalVar = maxValue;
    maxValue = minValue;
    minValue = additionalVar;
  }

  generalFilterParams['primary_release_date.gte'] = minValue;
  generalFilterParams['primary_release_date.lte'] = maxValue;
}

function updateAdultParams(input) {
  generalFilterParams['include_adult'] = input.checked;
}

function updateSortParams(select) {
  generalFilterParams['sort_by'] = select.selectedOptions[0].value;
}

function getSelectedGenres(formEl) {
  const selectedGenres = [];
  formEl.elements.with_genres.forEach(genre => {
    if (genre.checked) {
      selectedGenres.push(genre.value);
    }
  });
  return selectedGenres.join(',');
}

export function transformParamsIntoQuery(params) {
  let result = '';
  for (const key in params) {
    result += `&${key}=${params[key]}`;
  }
  return result;
}

export async function renderFiltersResult(list) {
  const {
    data,
    data: { results },
  } = list;

  console.log(results);
  const movies = [];
  results.forEach(movie => {
    const movieData = {
      id: movie.id,
      poster: movie.poster_path,
      title: movie.original_title,
      genres: movie.genre_ids,
      year: movie?.release_date?.slice(0, 4) || 'N/A',
    };

    movies.push(movieData);
  });

  paginationList.currentPage = data.page;
  paginationList.totalPages = data.total_pages;

    movies.forEach(movie => {
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

  movieList.innerHTML = movies
    .map(({ id, poster, title, genres, year }) => {
      return `<li class="movie__card">
  <a href="#" class="movie__link" id="${id}">
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
<p class="gallery__text" data-id="${id}">${genres} | ${year}</p>
</div>
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

function openFiltersOptions(evt) {
  if (evt.target.dataset.filter !== 'open') {
    return;
  }

  const isGenresBtn = evt.target.closest('.genres');
  const isYearsBtn = evt.target.closest('.years');

  if (isGenresBtn) {
    showFiltersByGenres();
    return;
  }

  if (isYearsBtn) {
    showFiltersByYears();
    return;
  }
}

function showFiltersByGenres() {
  genresForm.classList.remove('is-hidden');
  document.addEventListener(
    'click',
    () => {
      document.addEventListener('click', closeGenresFilterOptions);
    },
    { once: true }
  );
}

function showFiltersByYears() {
  yearsForm.classList.remove('is-hidden');
  document.addEventListener(
    'click',
    () => {
      document.addEventListener('click', closeYearsFilterOptions);
    },
    { once: true }
  );
}

function closeGenresFilterOptions(evt) {
  if (!evt.target.closest('.genres__form')) {
    evt.preventDefault();
    clickOutOfFiltersByGenres(); //hideFiltersByGenres()
  }
}

function closeYearsFilterOptions(evt) {
  if (!evt.target.closest('.years__form')) {
    evt.preventDefault();
    clickOutOfFiltersByYears(); //hideFiltersByYears()
  }
}

// --------------------------------Form list of genres----------------------
let listOfGenres = {};
fetchMoviesGenres().then(({ data: { genres } }) => {
  genres.map(
    genre => (listOfGenres = { ...listOfGenres, [genre.id]: `${genre.name}` })
  );
});

function hideFiltersByGenres() {
  genresForm.classList.add('is-hidden');
  const selectedGenresArr = generalFilterParams.with_genres.split(',');

  let selectedGenres = 'Genres';
  if (selectedGenresArr.length === 1 && selectedGenresArr[0] !== '') {
    selectedGenres = listOfGenres[selectedGenresArr[0]];
  }
  if (selectedGenresArr.length > 1) {
    selectedGenres =
      listOfGenres[selectedGenresArr[0]] + `, +${selectedGenresArr.length - 1}`;
  }

  openFilterByGenresBtn.textContent = selectedGenres;
  // openFilterByGenresBtn.style.borderColor = 'rgba(0,128,0,0.7)';
  console.log('color!!!!!');
  openFilterByGenresBtn.style.boxShadow = 'inset 0 0 8px 1px rgba(0,128,0,0.6)';

  if (openFilterByGenresBtn.textContent === 'Genres') {
    openFilterByGenresBtn.style.boxShadow =
      'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
    // openFilterByGenresBtn.style.borderColor = 'rgba(255, 0, 27, 0.5)';
  }
  document.removeEventListener('click', closeGenresFilterOptions);
}

function hideFiltersByYears() {
  yearsForm.classList.add('is-hidden');

  let selectedYear = `${generalFilterParams['primary_release_date.gte']} - ${generalFilterParams['primary_release_date.lte']}`;
  if (
    generalFilterParams['primary_release_date.gte'] ===
    generalFilterParams['primary_release_date.lte']
  ) {
    selectedYear = generalFilterParams['primary_release_date.gte'];
  }
  if (
    generalFilterParams['primary_release_date.gte'] === '1900' &&
    generalFilterParams['primary_release_date.lte'] === '2022'
  ) {
    selectedYear = 'Years';
  }
  openFilterByYearsBtn.textContent = selectedYear;
  openFilterByYearsBtn.style.boxShadow = 'inset 0 0 8px 1px rgba(0,128,0,0.6)';
  // openFilterByYearsBtn.style.borderColor = 'rgba(0,128,0,0.7)';

  if (openFilterByYearsBtn.textContent === 'Years') {
    openFilterByYearsBtn.style.boxShadow =
      'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
    // openFilterByYearsBtn.style.borderColor = 'rgba(255, 0, 27, 0.5)';
  }
  document.removeEventListener('click', closeYearsFilterOptions);
}

function clickOutOfFiltersByGenres() {
  hideFiltersByGenres();
  console.log(areEqual(generalFilterParams, lastFetchedParams));
  if (areEqual(generalFilterParams, lastFetchedParams)) {
    return;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (isInitialGeneralFilterParams(generalFilterParams)) {
    createMovieList(1);
    lastFetchedParams = { ...generalFilterParams };
    return;
  }
  console.log('do fetch');
  fetchAndRenderMoviesByFilter();
  lastFetchedParams = { ...generalFilterParams };
}

function clickOutOfFiltersByYears() {
  hideFiltersByYears();
  if (areEqual(generalFilterParams, lastFetchedParams)) {
    return;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////----------------------
  console.log('who knows', isInitialGeneralFilterParams(generalFilterParams));
  console.log(generalFilterParams);
  if (isInitialGeneralFilterParams(generalFilterParams)) {
    createMovieList(1);
    lastFetchedParams = { ...generalFilterParams };
    return;
  }
  console.log('do fetch');
  fetchAndRenderMoviesByFilter();
  lastFetchedParams = { ...generalFilterParams };
}

function fetchAndRenderMoviesByFilter() {
  paginationList.currentState = 'filter';
  paginationList.queryParams = { ...generalFilterParams };

  const queryString = transformParamsIntoQuery(generalFilterParams);
  fetchMoviesByFilters(queryString, 1)
    .then(renderFiltersResult)
    .catch(err => console.log(err));
}

// Check for equality of two objects with the same list of keys
function areEqual(obj, otherObj) {
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (obj[key] !== otherObj[key]) {
      return false;
    }
  }
  return true;
}

function onClearFiltersButtonClick() {
  const listOfForms = this.closest('.filters__form').querySelectorAll('form');
  listOfForms.forEach(form => form.reset());
  openFilterByGenresBtn.textContent = 'Genres';
  openFilterByYearsBtn.textContent = 'Years';
  createMovieList(1);
}

function isInitialGeneralFilterParams(obj) {
  const initialGeneralFilterParams = {
    with_genres: '',
    'primary_release_date.lte': '2022',
    'primary_release_date.gte': '1900',
    include_adult: false,
    sort_by: 'popularity.desc',
  };
  return areEqual(obj, initialGeneralFilterParams);
}

function onInputChange(evt) {
  let minValue = generalFilterParams['primary_release_date.gte'];
  let maxValue = generalFilterParams['primary_release_date.lte'];

  if (evt.target.classList.contains('lower-value')) {
    minValue = evt.target.value;
  }
  if (evt.target.classList.contains('higher-value')) {
    maxValue = evt.target.value;
  }

  if (minValue > maxValue) {
    const additionalVar = maxValue;
    maxValue = minValue;
    minValue = additionalVar;
  }

  if (Number(minValue) === Number(maxValue)) {
    rangeValues.innerHTML = minValue;
  } else {
    rangeValues.innerHTML = `From ${minValue} to ${maxValue}`;
  }
}
