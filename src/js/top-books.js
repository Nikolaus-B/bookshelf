import {
  fetchCategoryBooks,
  fetchCategoryList,
  fetchTopBooks,
  fetchBookInfo,
} from './api-request';
import { createCategoryMarkup, createModalWindowMarkup } from './mark-up';
import { openModal } from './modal';

const topBooksContainer = document.querySelector('.best-sellers');

renderTopBooks();

export default async function renderTopBooks() {
  const data = await fetchTopBooks();
  createGalleryItem(data);
}

function createGalleryItem(data) {
  const markup = `
    <div class="top-books-container">
    <h1 class="title-book">Best Sellers
    <span class="title-book-span">Books</span>
    </h1>
    <ul class="books-container"> ${data
      .map(elements => {
        return `
      <li class="books-list">
      <h3 class="books-list-title">${elements.list_name}</h3>
        <div class="books-card-container" data-list-id="${elements.list_name}">
          ${elements.books
            .map(book => {
              return createTopMarkup(book);
            })
            .join('')}
        </div>
        <button class="books-btn" type="button" data-id="${
          elements.list_name
        }">see more</button>
      </li>
      `;
      })
      .join('')}</ul>
      </div>`;

  topBooksContainer.innerHTML = markup;

  document.querySelectorAll('.books-btn').forEach(btnItem => {
    btnItem.addEventListener('click', function (event) {
      let cattegoryId = event.target.dataset.id;

      fetchCategoryBooks(cattegoryId).then(response => {
        let content = '';
        for (let index = 0; index < response.length; index++) {
          content += createCategoryMarkup(response[index]);
        }
        topBooksContainer.innerHTML = content;
      });
    });
  });

  // ++++++++++++++++++++++++ Modal +++++++++++++++++++++++++++++++

  const modalInfoContainer = document.querySelector('.modal-info-container');
  const booksArray = document.querySelectorAll('.books-intem-link');
  const modalBtn = document.querySelector('.modal-btn');

  let bookId;
  const STORAGE_KEY = 'books';

  booksArray.forEach(book => {
    book.addEventListener('click', async e => {
      bookId = e.currentTarget.dataset.id;

      openModal();

      const book = await fetchBookInfo(bookId);
      modalInfoContainer.insertAdjacentHTML(
        'afterbegin',
        createModalWindowMarkup(book)
      );
    });
  });

  modalBtn.addEventListener('click', async e => {
    let booksArray = [];

    const book = await fetchBookInfo(bookId);

    if (localStorage.getItem(STORAGE_KEY) !== null) {
      booksArray = JSON.parse(localStorage.getItem(STORAGE_KEY));
      booksArray.push(book);
    } else {
      booksArray.push(book);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(booksArray));
  });
}

function createTopMarkup(book) {
  return `<a href="#" class="books-intem-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>

    <div class="books-card">
      <img
        src="${book.book_image}"
        alt="${book.title}"
        class="books-card-title-img"
        width="180"
        height="256"
        loading="lazy"
      />
      <div class="books-overlay">
        <p class="books-overlay-text">quick view</p>
      </div>
     </div>
      <div class="books-descr">
        <h3 class="books-card-title">${book.title}</h3>
        <p class="books-card-author">${book.author}</p>
      </div>
   </a>`;
}

export { createGalleryItem, renderTopBooks };
