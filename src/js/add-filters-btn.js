import { refs } from './DOM-elements';
import { CURRENT_STATE } from './pagination';
const filterDiv = refs.formFilter;
const { addFilterButton } = refs;

const filterState = JSON.parse(localStorage.getItem(CURRENT_STATE)) === "filter";
if (filterState) {
  filterDiv.classList.remove('spawn-filter');
  addFilterButton.textContent = 'Close filter';
} 

addFilterButton.addEventListener('click', onClickBtnAddFilters);

function onClickBtnAddFilters() {
  if (filterDiv.classList.contains('spawn-filter')) {
    filterDiv.classList.remove('spawn-filter');
    addFilterButton.textContent = 'Close filter';
    return;
  } else {
    filterDiv.classList.add('spawn-filter');
    addFilterButton.textContent = 'Open filter';
    return;
  }
}
