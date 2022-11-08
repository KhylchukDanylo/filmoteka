import { paginationList, containerEl, setTargetPage, addPagination } from './pagination';
import { createMovieList } from './popular-movies';
import { createMovieListBySearch } from './search-movies';

paginationList.addEventListener('click', onPaginationBtnClick);
window.addEventListener('resize', onWindowSizeChange);

function onPaginationBtnClick(evt) {
  if (evt.target.closest('button') === null) {
    return;
  }
  if (evt.target.textContent === `${evt.currentTarget.currentPage}`) {
    return;
  }

    const targetPage = setTargetPage(evt.target, evt.currentTarget.currentPage);
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
}

function onWindowSizeChange() {
  const screenWidth = containerEl.offsetWidth;
  addPagination({
    screenWidth,
    currentPage: paginationList.currentPage,
    totalPages: paginationList.totalPages,
  });
}

function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}