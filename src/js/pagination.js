import { leftArrowIcon, rightArrowIcon } from './svg-icons';

const leftArrow = `<button type="button" class="pagination-button pagination-button__arrow arrow-to-start-button-js">${leftArrowIcon}</button>`;
const rightArrow = `<button type="button" class="pagination-button pagination-button__arrow arrow-to-end-button-js">${rightArrowIcon}</button>`;
const dots = '<div class="pagination-dots">...</div>'
const currentBtn = currentPage => `<button type="button" class="pagination-button pagination-button__page--current">${currentPage}</button>`;
const pageBtn = page => `<button type="button" class="pagination-button pagination-button__page">${page}</button>`;

export function createPaginationMarkupBasedOnScreenSize({screenWidth, currentPage, totalPages}) {
  if (screenWidth < 480) {
    return createPaginationMarkupForMobile(currentPage, totalPages);
  } 
    return createPaginationMarkup(currentPage, totalPages); 
}

function createPaginationMarkup(currentPage, totalPages) {
  if (currentPage === totalPages) {
      return createMarkupForSpecialCases(currentPage);
  }

  if (currentPage === totalPages - 1) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${rightArrow}`;
  }

  if (currentPage === totalPages - 2) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${pageBtn(currentPage + 2)} ${rightArrow}`;
    }
  
  if (currentPage === totalPages - 3) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${pageBtn(currentPage + 2)} ${pageBtn(currentPage + 3)} ${rightArrow}`;
  }

    if (currentPage < totalPages - 3) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${pageBtn(currentPage + 2)} ${dots} ${pageBtn(totalPages)} ${rightArrow}`;
  }

  function createMarkupForSpecialCases(currentPage) {
    switch (currentPage) {
      case 1:
        return `${currentBtn(1)}`;
      case 2:
        return `${leftArrow} ${pageBtn(1)} ${currentBtn(2)}`;
      case 3:
        return `${leftArrow} ${pageBtn(1)} ${pageBtn(2)} ${currentBtn(3)}`;
      case 4:
        return `${leftArrow} ${pageBtn(1)} ${pageBtn(2)} ${pageBtn(3)} ${currentBtn(4)}`;
      default:
        return `${leftArrow} ${pageBtn(1)} ${dots} ${pageBtn(currentPage - 2)} ${pageBtn(currentPage - 1)} ${currentBtn(currentPage)}`;
    }
  }
}

function createPaginationMarkupForMobile(currentPage, totalPages) {
  if (currentPage === totalPages) {
      return createMarkupForSpecialCases(currentPage);
  }

  if (currentPage === totalPages - 1) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${rightArrow}`;
  }

  if (currentPage === totalPages - 2) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${pageBtn(currentPage + 2)} ${rightArrow}`;
    }
  
  if (currentPage === totalPages - 3) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${pageBtn(currentPage + 2)} ${rightArrow}`;
  }

    if (currentPage < totalPages - 3) {
    return `${createMarkupForSpecialCases(currentPage)} ${pageBtn(currentPage + 1)} ${pageBtn(currentPage + 2)} ${rightArrow}`;
  }

  function createMarkupForSpecialCases(currentPage) {
    switch (currentPage) {
      case 1:
        return `${currentBtn(1)}`;
      case 2:
        return `${leftArrow} ${pageBtn(1)} ${currentBtn(2)}`;
      case 3:
        return `${leftArrow} ${pageBtn(1)} ${pageBtn(2)} ${currentBtn(3)}`;
      default:
        return `${leftArrow} ${pageBtn(currentPage - 2)} ${pageBtn(currentPage - 1)} ${currentBtn(currentPage)}`;
    }
  }
}
