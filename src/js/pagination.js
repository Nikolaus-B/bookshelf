export {
  appendPageNumber,
  getPaginationNumbers,
  handleActivePageNumber,
  setCurrentPage,
  handlePageButtonsStatus,
};

const paginationNumbers = document.getElementById('pagination-numbers');
const paginatedList = document.getElementById('paginated-list');
const listItems = paginatedList.querySelectorAll('li');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const dataContainer = document.getElementById('data-container');

const paginationLimit = 3;
let currentPage = 1;
const pageCount = Math.ceil(listItems.length / paginationLimit);

const appendPageNumber = index => {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex === currentPage) {
      button.classList.add('active');
      button.classList.add('current-page');
    } else {
      button.classList.remove('active');
      button.classList.remove('current-page');
    }
    prevButton.classList.add('hidden');
    if (currentPage > 1) {
      prevButton.classList.remove('hidden');
    }
    if (listItems.length < currentPage * paginationLimit) {
      nextButton.classList.add('hidden');
    } else {
      nextButton.classList.remove('hidden');
    }
  });
};

const setCurrentPage = pageNum => {
  currentPage = pageNum;
  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  listItems.forEach((item, index) => {
    item.classList.add('hidden');
    if (index >= prevRange && index < currRange) {
      item.classList.remove('hidden');
    }
  });
};

const disableButton = button => {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
};

const enableButton = button => {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

window.addEventListener('load', () => {
  getPaginationNumbers();
  setCurrentPage(1);
  prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });
  nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });
  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
