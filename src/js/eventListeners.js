import { paginationList, setTargetPage, addPagination } from './pagination';
import { createMovieList } from './popular-movies';
import { createMovieListBySearch } from './search-movies';
import { transformParamsIntoQuery, renderFiltersResult } from './filters';
import { fetchMoviesByFilters } from './api-service';
import { refs } from './DOM-elements';
const { container } = refs;

paginationList.addEventListener('click', onPaginationBtnClick);
window.addEventListener('resize', onWindowSizeChange);

export function onPaginationBtnClick(evt) {
  if (evt.target.closest('button') === null) {
    return;
  }
  if (evt.target.textContent === `${evt.currentTarget.currentPage}`) {
    return;
  }

  const targetPage = setTargetPage(evt.target, evt.currentTarget.currentPage);
  renderTargetPage(targetPage); 
}

export function renderTargetPage(targetPage) {
  if (paginationList.currentState === 'popular') {
      createMovieList(targetPage);
      scrollToTop();
        return;
    }
    if (paginationList.currentState === 'search') {
      createMovieListBySearch(paginationList.movieToSearch, targetPage);
      scrollToTop();
        return;
    }
    if (paginationList.currentState === 'filter') {
    const queryString = transformParamsIntoQuery(paginationList.queryParams);
    fetchMoviesByFilters(queryString, targetPage).then(renderFiltersResult).catch(err => console.log(err));
    scrollToTop();
    return;
  }
}

function onWindowSizeChange() {
  const screenWidth = container.offsetWidth;
  addPagination({
    screenWidth,
    currentPage: paginationList.currentPage,
    totalPages: paginationList.totalPages,
  });
}

export function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}