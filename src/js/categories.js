import { fetchCategoryList, fetchCategoryBooks } from './api-request';
import catchError from './catch-error';
import { renderTopBooks } from './top-books';
import { createCategoryMarkup } from './mark-up';


const categoriesList = document.querySelector('.categories-list');
const categoriesContainer = document.querySelector('.categories-container');
const topBooksContainer = document.querySelector('.best-sellers');

renderCategories();

categoriesList.addEventListener('click', onClick);

let currentSelectedCategoryBtn = null;
let allCattegoriesBtn = document.querySelector(".all-categories-btn");

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.className.includes("all-categories-btn")) {
    allCattegoriesBtn = evt.target
    allCattegoriesBtn.classList.add('active-category');

    currentSelectedCategoryBtn.classList.remove('active-category')

    renderTopBooks();
    return;
  }

  if (evt.target.nodeName != "A") {
    return;
  };

  allCattegoriesBtn.classList.remove('active-category');

  topBooksContainer.innerHTML = '';

  if (currentSelectedCategoryBtn != null) {
    currentSelectedCategoryBtn.classList.remove('active-category')
  }
  currentSelectedCategoryBtn = evt.target;
  currentSelectedCategoryBtn.classList.add('active-category');

  const currentCategoryId = evt.target.textContent;
  fetchCategoryBooks(currentCategoryId)
    .then(response => {
      let content = ""
      for (let index = 0; index < response.length; index++) {
        content += createCategoryMarkup(response[index])
      }
      topBooksContainer.innerHTML = content;
});
}

async function renderCategories() {
  try {
    const categories = await fetchCategoryList();
    if (categories.length === 0) {
      throw new Error(response.statusText);
    }
    const markup = await categories
      .map(({ list_name }) => {
        return categoriesList.insertAdjacentHTML(
          'beforeend',
          createListMarkup(list_name)
        );
      })
      .join('');
    return markup;
  } catch (error) {
    console.log(error);
    categoriesContainer.innerHTML = catchError();
  }
}
function createListMarkup(el) {
  return `<li class="categories-item"><a href="">${el}</a></li>`;
}

export { renderCategories };
