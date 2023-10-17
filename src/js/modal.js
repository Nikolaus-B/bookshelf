import { createModalWindowMarkup } from './mark-up';
import { fetchBookInfo } from './api-request';

// --------------------------------------------------------------

const body = document.querySelector('body');
const backdrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.close-btn-icon');
const modalInfoContainer = document.querySelector('.modal-info-container');
const modalOpenBtn = document.querySelector('.modal-btn-add');
const modalRemoveBtn = document.querySelector('.modal-btn-remove');
const modalText = document.querySelector('.modal-tip');

// --------------------------------------------------------------

backdrop.addEventListener('click', onBackdropClick);
closeModalBtn.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onEscKeyPress);

// --------------------------------------------------------------

async function openModal() {
  const allMainBooks = document.querySelectorAll('.books-intem-link');
  const modalInfoContainer = document.querySelector('.modal-info-container');

  let bookId;
  let booksArr = [];
  const STORAGE_KEY = 'books';

  function isObjectInLocalStorage(bookId) {
    const STORAGE_KEY = 'books';
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
      const booksArr = JSON.parse(data);
      return booksArr.some(book => book._id === bookId);
    }

    return false;
  }

  function checkAndToggleButtons(bookId) {
    if (isObjectInLocalStorage(bookId)) {
      modalOpenBtn.classList.add('visually-hidden');
      modalRemoveBtn.classList.remove('visually-hidden');
      modalText.classList.remove('visually-hidden');
    } else {
      modalOpenBtn.classList.remove('visually-hidden');
      modalRemoveBtn.classList.add('visually-hidden');
      modalText.classList.add('visually-hidden');
    }
  }

  modalOpenBtn.addEventListener('click', e => {
    fetchBookInfo(bookId).then(book => {
      const data = localStorage.getItem(STORAGE_KEY);

      if (data !== null) {
        booksArr = JSON.parse(data);
        booksArr.push(book);
      } else {
        booksArr.push(book);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(booksArr));

      checkAndToggleButtons(bookId);
    });
  });

  modalRemoveBtn.addEventListener('click', () => {
    fetchBookInfo(bookId).then(book => {
      const data = localStorage.getItem(STORAGE_KEY);

      booksArr = JSON.parse(data) || [];

      const indexOfObject = booksArr.findIndex(obj => obj._id === bookId);

      if (indexOfObject !== -1) {
        booksArr.splice(indexOfObject, 1);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(booksArr));

      checkAndToggleButtons(bookId);
    });
  });

  allMainBooks.forEach(book => {
    book.addEventListener('click', e => {
      backdrop.classList.remove('is-hidden');

      bookId = e.currentTarget.dataset.id;

      body.style.overflow = 'hidden';

      fetchBookInfo(bookId).then(book => {
        modalInfoContainer.insertAdjacentHTML(
          'afterbegin',
          createModalWindowMarkup(book)
        );
      });

      checkAndToggleButtons(bookId);
    });
  });
}

function onCloseModal() {
  backdrop.classList.add('is-hidden');
  body.style.overflow = 'auto';
  modalInfoContainer.innerHTML = '';
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress() {
  onCloseModal();
}

// --------------------------------------------------------------

export { openModal };
