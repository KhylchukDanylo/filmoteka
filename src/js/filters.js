import { fetchMoviesByFilters } from './api-service';
import { allGenres } from './data/jenres.js';
import { refs } from './DOM-elements';
import { addPagination, paginationList, CURRENT_PAGE,
  TOTAL_PAGES,
  CURRENT_STATE,} from './pagination';
import { createMovieList } from './popular-movies';
import { listEl } from './search-movies';
import notFoundImg from '../images/library/gallery-nothing.jpg';
import { addSpinner, removeSpinner } from './spinner';
import {renderMoviesCard} from './templates/movieCard';
import { genresMaker } from './templates/genres-maker';
export const FILTERS_PARAMS = 'filtersParams';
const {
  filterForm,
  genresForm,
  yearsForm,
  sortFormOptions,
  openFilterByGenresBtn,
  openFilterByYearsBtn,
  container,
  clearFiltersButton,
  rangeValues,
  notFoundPage,
  lowerValueInput,
  higerValueInput,
  checkingForBeingAdultInput,
} = refs;
let screenWidth = container.offsetWidth;
const initialFilterParams = {
  with_genres: '',
  'primary_release_date.lte': '2022',
  'primary_release_date.gte': '1900',
  include_adult: false,
  sort_by: 'popularity.desc',
};
let generalFilterParams = {
  ...initialFilterParams,
};
let lastFetchedParams = {
  ...initialFilterParams,
};

let listOfGenres = {};
allGenres.map(
  genre => (listOfGenres = { ...listOfGenres, [genre.id]: `${genre.name}` })
);

try {
  const response = JSON.parse(localStorage.getItem(FILTERS_PARAMS));
  if (response === null) {
    throw new Error();
  }
  generalFilterParams = { ...response };
  lastFetchedParams = { ...response };

  if (response['include_adult']) {
    checkingForBeingAdultInput.setAttribute('checked', true);
  }

  const selectedSortQuery = response["sort_by"];
  sortFormOptions.forEach(option => {
    option.removeAttribute('selected');
    if (option.value === selectedSortQuery) {
      option.setAttribute('selected', true);
    }
  });
  
  updateGenresButtonAppearance();
  updateYearsButtonAppearance();
  renderYearsInterval(generalFilterParams["primary_release_date.gte"], generalFilterParams["primary_release_date.lte"]);
  
} catch (err) {
  console.log("You haven't selected any filters yet");
}

filterForm.addEventListener('change', onFormChange);
filterForm.addEventListener('reset', onFormReset);
filterForm.addEventListener('submit', onFormSubmit);
filterForm.addEventListener('click', openFiltersOptions);
filterForm.addEventListener('input', onInputChange);
clearFiltersButton.addEventListener('click', onClearFiltersButtonClick);

async function onFormSubmit(evt) {
  evt.preventDefault();

  updateGenresButtonAppearance();
  updateYearsButtonAppearance();

  if (isInitialGeneralFilterParams(generalFilterParams)) {
    deleteNotFoundPage();
    createMovieList(1);
    lastFetchedParams = { ...generalFilterParams };
    return;
  }
  setCurrentFiltersSettingsToLocalStorage();
  fetchAndRenderMoviesByFilter();
  lastFetchedParams = { ...generalFilterParams };
  filterForm.addEventListener('click', openFiltersOptions);
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
    if (isInitialGeneralFilterParams(generalFilterParams)) {
      createMovieList(1);
      lastFetchedParams = { ...generalFilterParams };
      return;
    }
    setCurrentFiltersSettingsToLocalStorage();
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
    setCurrentFiltersSettingsToLocalStorage();
    fetchAndRenderMoviesByFilter();
    lastFetchedParams = { ...generalFilterParams };
  }
}

function onFormReset(evt) {
  const isGenresForm = evt.target.classList.contains('genres__form');
  const isYearsForm = evt.target.classList.contains('years__form');

  if (isGenresForm) {
    generalFilterParams.with_genres = '';
    openFilterByGenresBtn.style.boxShadow =
      'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  }
  if (isYearsForm) {
    generalFilterParams['primary_release_date.lte'] = '2022';
    generalFilterParams['primary_release_date.gte'] = '1900';
    openFilterByYearsBtn.style.boxShadow =
      'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  }
  openFilterByGenresBtn.style.boxShadow =
    'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  openFilterByYearsBtn.style.boxShadow =
    'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
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

  const movies = [];
  results.forEach(movie => {
    const movieData = {
      id: movie.id,
      poster: movie.poster_path,
      title: movie.original_title,
      genres: movie.genre_ids,
      year: movie?.release_date?.slice(0, 4) || 'N/A',
      rating: movie.vote_average.toFixed(1),
    };

    movies.push(movieData);
  });

  paginationList.currentPage = data.page;
  paginationList.totalPages = data.total_pages;//--------------------------------------------------------------------------
  localStorage.setItem(
        CURRENT_PAGE,
        JSON.stringify(paginationList.currentPage)
      );
      localStorage.setItem(
        TOTAL_PAGES,
        JSON.stringify(paginationList.totalPages)
      );

  genresMaker(movies);
  renderMoviesCard(movies);
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
    filterForm.removeEventListener('click', openFiltersOptions);
    return;
  }

  if (isYearsBtn) {
    showFiltersByYears();
    filterForm.removeEventListener('click', openFiltersOptions);
    return;
  }
}

function showFiltersByGenres() {
  genresForm.classList.remove('is-hidden');
  try {
    const response = JSON.parse(localStorage.getItem(FILTERS_PARAMS));
    const selectedGenres = getArrayOfGenresFromString(response.with_genres);
    selectedGenres.map(genre => {
      const input = document.querySelector(`.genres__wrap input[value="${genre}"]`);
      if (input) {
        input.setAttribute('checked', true);
      }
    })
  } catch (err) {
    const allInputs = document.querySelectorAll('.genres__wrap input');
    allInputs.forEach(input => {
      input.removeAttribute('checked');
    });
  }
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

try {
  const response = JSON.parse(localStorage.getItem(FILTERS_PARAMS));
  const bottomYear = response["primary_release_date.gte"];
  const topYear = response["primary_release_date.lte"];
  lowerValueInput.value = bottomYear;
  higerValueInput.value = topYear;
    
  } catch (err) {
    console.log('smth went wrong:)');
  }

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
    clickOutOfFiltersByGenres(); 
    filterForm.addEventListener('click', openFiltersOptions);
  }
}

function closeYearsFilterOptions(evt) {
  if (!evt.target.closest('.years__form')) {
    evt.preventDefault();
    clickOutOfFiltersByYears(); 
    filterForm.addEventListener('click', openFiltersOptions);
  }
}

function clickOutOfFiltersByGenres() {
  updateGenresButtonAppearance();
  if (areEqual(generalFilterParams, lastFetchedParams)) {
    return;
  }
  if (isInitialGeneralFilterParams(generalFilterParams)) {
    deleteNotFoundPage();
    createMovieList(1);
    lastFetchedParams = { ...generalFilterParams };
    return;
  }
  setCurrentFiltersSettingsToLocalStorage();
  fetchAndRenderMoviesByFilter();
  lastFetchedParams = { ...generalFilterParams };
}

function clickOutOfFiltersByYears() {
  updateYearsButtonAppearance();
  if (areEqual(generalFilterParams, lastFetchedParams)) {
    return;
  }
  if (isInitialGeneralFilterParams(generalFilterParams)) {
    createMovieList(1);
    lastFetchedParams = { ...generalFilterParams };
    return;
  }
  setCurrentFiltersSettingsToLocalStorage();
  fetchAndRenderMoviesByFilter();
  lastFetchedParams = { ...generalFilterParams };
}

function updateGenresButtonAppearance() {
  genresForm.classList.add('is-hidden');
  const selectedGenresArr = generalFilterParams.with_genres.split(',');
  changeGenresButtonAppearance(selectedGenresArr);
  document.removeEventListener('click', closeGenresFilterOptions);
}

function updateYearsButtonAppearance() {
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

  if (openFilterByYearsBtn.textContent === 'Years') {
    openFilterByYearsBtn.style.boxShadow =
      'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  }
  document.removeEventListener('click', closeYearsFilterOptions);
}

export function fetchAndRenderMoviesByFilter() {
  try {
  const filtersParams = JSON.parse(localStorage.getItem(FILTERS_PARAMS));
  if (filtersParams === null) {
    throw new Error();
  }
  paginationList.queryParams = { ...filtersParams };
} catch (err) {
  paginationList.queryParams = { ...generalFilterParams };
  }
  try {
  const currentPage = JSON.parse(localStorage.getItem(CURRENT_PAGE));
  const totalPages = JSON.parse(localStorage.getItem(TOTAL_PAGES));

  paginationList.currentPage = currentPage;
  paginationList.totalPages = totalPages;
  } catch (err) {
    console.log('pagination error');
  }

  addSpinner();
  const queryString = transformParamsIntoQuery(paginationList.queryParams);
  fetchMoviesByFilters(queryString, paginationList.currentPage)
    .then(resp => {
      if (resp.data['total_results'] === 0) {
        renderNotFoundPage();
      } else {
        deleteNotFoundPage();
        renderFiltersResult(resp);
      }
      removeSpinner();
    })
    .catch(err => console.log(err));
}

function setCurrentFiltersSettingsToLocalStorage() {
  paginationList.currentState = 'filter';
  paginationList.currentPage = 1;
  localStorage.setItem(CURRENT_PAGE, JSON.stringify(paginationList.currentPage));
  localStorage.setItem(FILTERS_PARAMS, JSON.stringify(generalFilterParams));
      localStorage.setItem(
        CURRENT_STATE,
        JSON.stringify(paginationList.currentState),
      );
}

function renderNotFoundPage() {
  const photo = `<img class='not-found-img' src="${notFoundImg}" alt="404">`;
  notFoundPage.innerHTML = photo;
  listEl.innerHTML = '';
  paginationList.innerHTML = '';
}

export function deleteNotFoundPage() {
  notFoundPage.innerHTML = '';
}

export function onClearFiltersButtonClick() {
  if (paginationList.currentState !== 'filter') {
    return;
  }
  const listOfForms = filterForm.querySelectorAll('form');
  listOfForms.forEach(form => form.reset());
  openFilterByGenresBtn.textContent = 'Genres';
  openFilterByYearsBtn.textContent = 'Years';
  checkingForBeingAdultInput.removeAttribute('checked');
  generalFilterParams = { ...initialFilterParams };
  lastFetchedParams = { ...initialFilterParams };
  deleteNotFoundPage();
  createMovieList(1);
}

function isInitialGeneralFilterParams(obj) {
  const initialGeneralFilterParams = {
    ...initialFilterParams,
  };
  return areEqual(obj, initialGeneralFilterParams);
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

  renderYearsInterval(minValue, maxValue);
  // if (Number(minValue) === Number(maxValue)) {
  //   rangeValues.innerHTML = minValue;
  // } else {
  //   rangeValues.innerHTML = `From ${minValue} to ${maxValue}`;
  // }
}

function renderYearsInterval(min, max) {
    if (+min === +max) {
    rangeValues.innerHTML = min;
  } else {
    rangeValues.innerHTML = `From ${min} to ${max}`;
  }
}

function getArrayOfGenresFromString(string) {
  return string.split(',');
}

export function resetFiltersButtonAppereance() {
  openFilterByGenresBtn.textContent = "Genres";
  openFilterByGenresBtn.style.boxShadow =
    'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  
  openFilterByYearsBtn.textContent = "Years";
  openFilterByYearsBtn.style.boxShadow =
    'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
}

function changeGenresButtonAppearance(selectedGenresArr) {
  let selectedGenres = 'Genres';
  if (selectedGenresArr.length === 1 && selectedGenresArr[0] !== '') {
    selectedGenres = listOfGenres[selectedGenresArr[0]];
  }
  if (selectedGenresArr.length > 1) {
    selectedGenres =
      listOfGenres[selectedGenresArr[0]] + `, +${selectedGenresArr.length - 1}`;
  }

  openFilterByGenresBtn.textContent = selectedGenres;
  openFilterByGenresBtn.style.boxShadow = 'inset 0 0 8px 1px rgba(0,128,0,0.6)';

  if (openFilterByGenresBtn.textContent === 'Genres') {
    openFilterByGenresBtn.style.boxShadow =
      'inset 0 0 8px 1px rgba(255, 0, 27, 0.6)';
  }
}