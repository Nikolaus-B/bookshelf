// // ссылка на элемент списка карточек ул
// const arr = [
//   {
//     title: 'test 1',
//   },
//   {
//     title: 'test 2',
//   },
//   {
//     title: 'test 3',
//   },
//   {
//     title: 'test 4',
//   },
// ];
// // функция которая содаёт одну карточку
// function createCard(book) {
//   return `
//     <li></li>
//     `;
// }

// function createCardList() {
//   let books = localStorage.getItem('books_storage');
//   if (!books) {
//     createEmptyPagee(); // создає пусту страніцу
//     return;
//   }

//   books = JSON.parse(books);
//   const booksListHTML = books.map(book => booksListHTML(book)).join('');
//   listEl.innerHTML = booksListHTML;
// }

// function createEmptyPagee() {}

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

// delete potom
import { booksJson } from './_example-data.js';

const bookList = document.querySelector('.book-list');

function createFullCart() {
  // Отримати дані з localStorage або встановити порожній масив, якщо немає даних
  const bookItems = JSON.parse(localStorage.getItem('book')) || [];

  // Створити HTML-код для кожного товару в кошику
  const markup = booksJson
    .map(
      ({
        id,
        book_image,
        title,
        description,
        author,
        amazon_product_url,
        list_name,
      }) => `
      <li class="book_li book js-card" data-book-id="${id}">
        <div class="book_li-img">
              <img class="book_li-i" src="${
                book_image ? book_image : '../img/def-placeholder.png'
              }" alt="${title}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn">
                  <img
                    class="book_li-icon"
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

  // Вставити створений HTML-код в контейнер кошика
  bookList.innerHTML = markup;
}

// Викликати функцію для створення повного кошика при завантаженні сторінки
window.onload = createFullCart();
