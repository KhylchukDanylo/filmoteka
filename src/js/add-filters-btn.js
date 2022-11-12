import { refs } from './DOM-elements';
import { CURRENT_STATE } from './pagination';
const filterDiv = refs.formFilter;
const {addFilterBtn} = refs;

const filterState = JSON.parse(localStorage.getItem(CURRENT_STATE)) === "filter";
if (filterState) {
  filterDiv.classList.remove('spawn-filter');
  addFilterBtn.textContent = 'Close filter';
} 

addFilterBtn.addEventListener('click', onClickBtnAddFilters);

function onClickBtnAddFilters() {
  if (filterDiv.classList.contains('spawn-filter')) {
    filterDiv.classList.remove('spawn-filter');
    addFilterBtn.textContent = 'Close filter';
    return;
  } else {
    filterDiv.classList.add('spawn-filter');
    addFilterBtn.textContent = 'Open filter';
    return;
  }
}
