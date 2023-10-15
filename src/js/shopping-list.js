import amazonMob1x from '../img/amazon-mob1x.png';
import amazonMob2x from '../img/amazon-mob2x.png';
import amazonMobT1x from '../img/amazon-mob-t1x.png';
import amazonMobT2x from '../img/amazon-mob-t2x.png';
import basketMob1x from '../img/basket-mob1x.png';
import basketMob2x from '../img/basket-mob2x.png';
import bookMob1x from '../img/book-mob1x.png';
import bookMob2x from '../img/book-mob2x.png';

import bookMobT1x from '../img/book-mob-t1x.png';
import bookMobT2x from '../img/book-mob-t2x.png';
import imgBookMob1x from '../img/img-book-Mob1x.png';
import imgBookMob2x from '../img/img-book-Mob2x.png';

import { handlerClickMenu } from './header';
import logoModuleFunction from './support';
document.addEventListener(
  'DOMContentLoaded',
  logoModuleFunction.onDOMContentLoaded
);

// delete potom
import { booksJson } from './_example-data.js';

localStorage.setItem('books', JSON.stringify(booksJson));

const bookList = document.querySelector('.book-list');

const STORAGE_KEY = 'books';

function createEmptyCart() {
  const markup = `
  <div class="empty-list">
      <p class="empty-list-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
         class="empty-list-img"
         src="${imgBookMob1x}"
         srcset="
         ${imgBookMob1x} 1x,
         ${imgBookMob2x} 2x
         "
        alt="books"
        width="265"
        height="198"
         />
      </div>`;
  bookList.innerHTML = markup;
}

function createFullCart() {
  // Отримати дані з localStorage або встановити порожній масив, якщо немає даних
  const bookItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const markup = bookItems
    .map(
      ({
        _id,
        book_image,
        title,
        description,
        author,
        amazon_product_url,
        list_name,
      }) => `
      <li class="book_li book js-card" data-book-id="${_id}">
        <div class="book_li-img">
              <img class="book_li-i" src="${
                book_image ? book_image : '../img/def-placeholder.png'
              }" alt="${title}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn js-card__delete">
                  <img
                    class="book_li-icon "
                    src="${basketMob1x}"
                    srcset="
                      ${basketMob1x} 1x,
                      ${basketMob2x} 2x
                    "
                    alt="basket"
                    width="16"
                    height="16"
                  />
                </button>
                <h2 class="book_li-title">${title.trim()}</h2>
                <h3 class="book_li-category">${list_name.trim()}</h3>
              </div>
              <p class="book_li-description">
                ${description.trim()}
              </p>
              <div class="book_li-footer">
                <p class="book_li-author">${author.trim()}</p>
                <ul class="book-links">
                  <li>
                    <a class="book_link" href="${amazon_product_url}">
                      <img
                        class="book_link-amazon"
                        src="${amazonMob1x}"
                        srcset="
                          ${amazonMob1x} 1x,
                          ${amazonMob2x} 2x
                        "
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                      <img
                        class="book_link-amazon hovered"
                        src="${amazonMobT1x}"
                        srcset="
                          ${amazonMobT1x} 1x,
                          ${amazonMobT2x} 2x
                        "
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                    </a>
                  </li>
                  <li>
                    <a class="book_link" href="">
                      <img
                        class="book_link-book"
                        src="${bookMob1x}"
                        srcset="
                          ${bookMob1x} 1x,
                          ${bookMob2x} 2x
                        "
                        alt="book"
                        width="16"
                        height="16"
                      />
                      <img
                        class="book_link-book hovered"
                        src="${bookMobT1x}"
                        srcset="
                          ${bookMobT1x} 1x,
                          ${bookMobT2x} 2x
                        "
                        alt="book"
                        width="16"
                        height="16"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      </li>
    `
    )
    .join('');

  if (markup.length === 0) {
    createEmptyCart();
  } else {
    bookList.innerHTML = markup;
  }
}

function deleteCard(evt) {
  if (evt.target.classList.contains('js-card__delete')) {
    const card = evt.target.closest('.js-card');
    const bookId = card.dataset.bookId;
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const newStorageData = storageData.filter(object => object._id !== bookId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStorageData));

    createFullCart();
  }
}

window.addEventListener('click', evt => deleteCard(evt));

window.onload = () => {
  if (
    localStorage.getItem(STORAGE_KEY) !== null ||
    localStorage.getItem(STORAGE_KEY) != []
  ) {
    createFullCart();
  } else {
    createEmptyCart();
  }
};
