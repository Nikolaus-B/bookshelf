import { createFullCart } from './shopping-list';
import logoModuleFunction from './support';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

document.addEventListener(
  'DOMContentLoaded',
  logoModuleFunction.onDOMContentLoaded
);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const startPageBtn = document.getElementById('start-btn');
const prevPageBtn = document.getElementById('prev-btn');
const nextPageBtn = document.getElementById('next-btn');
const endPageBtn = document.getElementById('end-btn');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const paginationNums = document.getElementById('pagination-nums');
const paginatedList = document.getElementById('paginated-list');
const numsListItems = paginatedList.querySelectorAll('.li');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// GLOBAL VAR

const STORAGE_KEY = 'books';
const totalPerPage = 4;
let currentPage = null;

const locStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
const totalPages = Math.ceil(locStorage.length / totalPerPage);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const addingPageNums = index => {
  const pageNumEl = document.createElement('li');
  pageNumEl.className = 'pagination-list-item';
  pageNumEl.innerHTML = index;
  pageNumEl.setAttribute('page-index', index);
  pageNumEl.setAttribute('aria-label', 'Page' + index);
  // ----------Set Attributes------------------

  paginationNums.appendChild(pageNumEl);
};

const getPaginationNums = () => {
  for (let i = 1; i <= totalPages; i++) {
    addingPageNums(i);
  }
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const setCurrPage = pageNum => {
  currentPage = pageNum;

  setCurrPageNum();

  const prevPageTotal = (pageNum - 1) * totalPerPage;
  const nextPageTotal = pageNum * totalPerPage;

  numsListItems.forEach((item, index) => {
    item.classList.add('is-hidden');
    if (index >= prevPageTotal && index < nextPageTotal) {
      item.classList.remove('is-hidden');
    }
  });
};

window.addEventListener('load', () => {
  getPaginationNums();
  setCurrPage(1);

  prevPageBtn.addEventListener('click', () => {
    setCurrPage(currentPage - 1);
  });

  nextPageBtn.addEventListener('click', () => {
    setCurrPage(currentPage + 1);
  });

  endPageBtn.addEventListener('click', () => {
    setCurrPage(totalPages);
  });

  startPageBtn.addEventListener('click', () => {
    setCurrPage(1);
  });

  document.querySelectorAll('.pagination-list-item').forEach(btn => {
    const pageIndex = Number(btn.getAttribute('page-index'));

    if (pageIndex) {
      btn.addEventListener('click', () => {
        setCurrPage(pageIndex);
      });
    }
  });
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const setCurrPageNum = () => {
  document.querySelectorAll('.pagination-list-item').forEach(btn => {
    btn.classList.remove('is-active');

    const pageIndex = Number(btn.getAttribute('page-index'));
    if (pageIndex === currentPage) {
      btn.classList.add('is-active');
    }
  });
};

// =====================================================================================
// console.log(data);

// export let currentPage = 1;

// let totalPages = Math.ceil(data.length / perPage);

// console.log(totalPages);

// const arrayItemsPerPage = bookItems.filter((el, i, array) => {
//   if (perPage > array.length / i) {
//     return el;
//   }
// });

// function itemsPerPage(currentPage) {
//   const startIndex = (currentPage - 1) * perPage;
//   const endIndex = startIndex + perPage;
//   const itemsOnPage = data.slice(startIndex, endIndex);
// }

// function pag(currentPage) {
//   const paginationList = document.querySelector('.pagination-list');
//   paginationList.innerHTML = '';

//   for (let i = 1; i <= totalPages; i += 1) {
//     const li = document.createElement('li');
//     li.classList.add('pagination-list-item');
//     const pageLink = document.createElement('a');
//     pageLink.href = '#';
//     pageLink.textContent = i;

//     if (i === currentPage) {
//       pageLink.classList.add('is-active');
//       li.style.backgroundColor = 'rgb(17, 17, 17)';
//       li.style.color = 'white';
//     }

//     paginationList.append(li);
//     li.appendChild(pageLink);

//     pageLink.addEventListener('click', e => {
//       e.preventDefault();
//       currentPage = i;
//       console.log(currentPage);
//       createFullCart(currentPage);

//       const currActive = document.querySelector('.is-active');
//       currActive.classList.remove('is-active');
//       pageLink.classList.add('is-active');
//       li.style.backgroundColor = 'rgb(17, 17, 17)';
//       li.style.color = 'white';
//     });
//   }
// }
// pag(currentPage);
// createFullCart(currentPage);

// function adaptivPag() {
//   const screenWidth = window.innerWidth;
//   const currActive = document.querySelector('.hide');
//   console.log(currActive);
//   if (screenWidth < 768) {
//     currActive.classList.add('visually-hidden');
//   } else if (screenWidth >= 768) {
//     currActive.classList.remove('visually-hidden');
//   }
// }

// pagination.on('afterMove', eventData => {
//   currentPage = eventData.page;
//   const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   createFullCart(storageData, currentPage);
//   return currentPage;

//   // це для оновлення списку
//   // Обробка подій пагінації та оновлення списку
//   // Сергей Резницкий20:31
//   // Функція зміни кількості відображення карток на сторінці в залежності від ширини екрану
//   function changePagOptionsByScreenWidth() {
//     const screenWidth = window.innerWidth;

//     if (screenWidth < 768) {
//       visiblePages = 1;
//       itemsPerPage = 4;
//       clearTimeout(resizeTimeout);

//       resizeTimeout = setTimeout(function () {
//         createShoppingList();
//       }, 200);
//     } else if (screenWidth >= 768) {
//       itemsPerPage = 3;
//       visiblePages = 3;
//       clearTimeout(resizeTimeout);

//       resizeTimeout = setTimeout(function () {
//         createShoppingList();
//       }, 200);
//     }
//   }
// });

// // Функція зміни кількості відображення карток на сторінці в залежності від ширини екрану при першої загрузці сторінки
// function firstPageLoaded() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 768) {
//     visiblePages = 1;
//     itemsPerPage = 4;
//     createShoppingList();
//   } else if (screenWidth >= 768) {
//     itemsPerPage = 3;
//     visiblePages = 3;
//     createShoppingList();
//   }
// }
