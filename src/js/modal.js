import { createModalWindowMarkup } from './mark-up';
import { fetchBookInfo } from './api-request';

async function openModal() {
  const modalOpenBtn = document.querySelector('.modal-btn-add');
  const modalRemoveBtn = document.querySelector('.modal-btn-remove');
  const allMainBooks = document.querySelectorAll('.books-intem-link');
  const backdrop = document.querySelector('.backdrop');
  const closeModalBtn = document.querySelector('.close-btn-icon');
  const modalInfoContainer = document.querySelector('.modal-info-container');
  const modalText = document.querySelector('.modal-tip');

  let bookId;
  let booksArr = [];
  const STORAGE_KEY = 'books';

  function isObjectInLocalStorage(objectId) {
    const STORAGE_KEY = 'books';
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
      const booksArr = JSON.parse(data);
      return booksArr.some(book => book._id === objectId);
    }

    return false;
  }

  function checkAndToggleButtons(bookId) {
    const modalOpenBtn = document.querySelector('.modal-btn-add');
    const modalRemoveBtn = document.querySelector('.modal-btn-remove');

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

  modalOpenBtn.addEventListener('click', () => {
    modalOpenBtn.classList.add('visually-hidden');
    modalRemoveBtn.classList.remove('visually-hidden');
    modalText.classList.remove('visually-hidden');

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
    modalRemoveBtn.classList.add('visually-hidden');
    modalOpenBtn.classList.remove('visually-hidden');
    modalText.classList.add('visually-hidden');

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

  closeModalBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
    modalInfoContainer.innerHTML = '';
  });

  allMainBooks.forEach(bookEl => {
    bookEl.addEventListener('click', e => {
      e.preventDefault();

      backdrop.classList.remove('is-hidden');

      bookId = e.currentTarget.dataset.id;

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

export { openModal };
