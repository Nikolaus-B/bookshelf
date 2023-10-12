import { fetchTopBooks } from './api-request';

const topBooksContainer = document.querySelector('.best-sellers');

createMarkup();

export default async function createMarkup() {
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

  topBooksContainer.insertAdjacentHTML('beforeend', markup);
}

function createTopMarkup(book) {
  return `<a href="#" class="books-item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>
      
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
