import { refs } from './DOM-elements';
refs.addFilterBtn.addEventListener('click', onClickBtnAddFilters);
function onClickBtnAddFilters(evt) {
  const filterDiv = refs.formFilter;
  if (filterDiv.classList.contains('spawn-filter')) {
    filterDiv.classList.remove('spawn-filter');
    evt.srcElement.textContent = 'Close filter';
    return;
  } else {
    filterDiv.classList.add('spawn-filter');
    evt.srcElement.textContent = 'Open filter';
    return;
  }
}
