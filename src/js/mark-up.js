import amazon1x from '../img/amazon@1x.png';
import amazon2x from '../img/amazon@2x.png';

import book1x from '../img/apple-books@1x.png';
import book2x from '../img/apple-books@2x.png';

export {
  createTopMarkup,
  createCategoryMarkup,
  createModalWindowMarkup,
  createShoppingListMarkup,
};

function createTopMarkup(book) {
  return ` <h2 class="second-title">${book.list_name}</h2>
     <div class="image-container">
       <img class="book-image" src="${book.books[0].book_image}" alt="${book.books[0].title}">
       <div class="info-book">
         <h1 class="title">${book.books[0].title}</h1>
         <p class="author">${book.books[0].author}</p>
       </div>
       <div class="image-container">
       <img class="book-image" src="${book.books[1].book_image}" alt="${book.books[0].title}">
       <div class="info-book">
         <h1 class="title">${book.books[1].title}</h1>
         <p class="author">${book.books[1].author}</p>
       </div>
       <div class="image-container">
       <img class="book-image" src="${book.books[2].book_image}" alt="${book.books[0].title}">
       <div class="info-book">
         <h1 class="title">${book.books[2].title}</h1>
         <p class="author">${book.books[2].author}</p>
       </div>
       <div class="image-container">
       <img class="book-image" src="${book.books[3].book_image}" alt="${book.books[0].title}">
       <div class="info-book">
         <h1 class="title">${book.books[3].title}</h1>
         <p class="author">${book.books[3].author}</p>
       </div>
       <div class="image-container">
       <img class="book-image" src="${book.books[4].book_image}" alt="${book.books[4].title}">
       <div class="info-book">
         <h1 class="title">${book.books[4].title}</h1>
         <p class="author">${book.books[4].author}</p>
       </div>
       <button type="button" class="see-more">See more</button>
     </div>`;
}

function createCategoryMarkup(book) {
  const markup = `
   <a href="#" class="books-intem-link" aria-label="Link to book page" rel="noopener noreferrer" data-id='${book._id}'>
  <div class="books-card">
       <img class="book-image" src="${book.book_image}" alt="${book.title}">
       <div class="books-overlay">
        <p class="books-overlay-text">quick view</p>
        </div>
     </div>
       <div class="info-book">
         <h1 class="title">${book.title}</h1>
         <p class="author">${book.author}</p>
       </div>
  </div>
  </a>`;

  return markup;
}

function createShoppingListMarkup(book) {
  return `
    <div class="image-container">
      <img class="book-image" src="${book.books[0].book_image}" alt="${book.books[0].title}">
      <div class="info-book">
        <h1 class="title">${book.books[0].title}</h1>
        <p class="list-name">${book.list_name}</p>
        <p class="description">${book.books[0].description}</p>
        <p class="author">${book.books[0].author}</p>
      </div>
    </div>
  `;
}

function createModalWindowMarkup(book) {
  return `
      <div class="modal-img-wrap">
        <img class="modal-img" src="${book.book_image}" alt="${book.title}">
      </div>
      <div class="modal-content-wrap">
        <h1 class="content-title">${book.title}</h1>
        <p class="content-subtitle">${book.author}</p>
        <p class="content-desc">${book.description}</p>
        <ul class="content-list">
          <li class="content-list-item">
            <a class="content-item-link" href="${book.buy_links[0].url}" name="" target="_blank" rel="noopener noreferrer nofollow" aria-label="Open the book in the online store">
              <img class="link-img"
                srcset="${amazon1x} 1x, ${amazon2x} 2x"
                src="${amazon1x}" alt="Amazon" width="62">
            </a>
          </li>
          <li class="content-list-item">
            <a class="content-item-link" href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Open the book in the online store">
              <img class="link-img"
                srcset="${book1x} 1x, ${book2x} 2x"
                src="${book1x}" alt="Apple Books" width="32">
              <img class="link-img-shdw-2"
            </a>
          </li>
        </ul>
      </div>
  `;
}
