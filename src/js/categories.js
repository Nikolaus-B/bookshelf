import { fetchCategoryList, fetchCategoryBooks } from './api-request';
import catchError from './catch-error';
import { renderTopBooks } from './top-books';
import { createCategoryMarkup } from './mark-up';
import { renderCategoryBooks } from './top-books';

const categoriesList = document.querySelector('.categories-list');
const categoriesContainer = document.querySelector('.categories-container');
const topBooksContainer = document.querySelector('.best-sellers');
const preloader = document.querySelector('.preloader');

renderCategories();

categoriesList.addEventListener('click', onClick);

let currentSelectedCategoryBtn = null;
let allCattegoriesBtn = document.querySelector('.all-categories-btn');

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.className.includes('all-categories-btn')) {
    allCattegoriesBtn = evt.target;

    renderTopBooks();
    return;
  }

  if (evt.target.nodeName != 'A') {
    return;
  }

  topBooksContainer.innerHTML = '';

  const currentCategoryId = evt.target.textContent;

  displayCategoryBooks(currentCategoryId);
  toggleCategoryBtn(currentCategoryId);
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
  return `<li class="categories-item"><a href="" data-categoryId = "${el}">${el}</a></li>`;
}

function displayCategoryBooks(category) {
  const categoryTitle = document.getElementById('category-title');
  if (categoryTitle) {
    categoryTitle.textContent = category;
  }

  fetchCategoryBooks(category).then(response =>
    renderCategoryBooks(category, response)
  );
  preloader.classList.add('visible');
}

function toggleCategoryBtn(categoryId) {
  if (currentSelectedCategoryBtn != null) {
    currentSelectedCategoryBtn.classList.remove('active-category');
  }

  if (allCattegoriesBtn != null) {
    allCattegoriesBtn.classList.remove('active-category');
  }

  if (categoryId === 'all') {
    allCattegoriesBtn.classList.add('active-category');
  } else {
    currentSelectedCategoryBtn = categoriesList.querySelector(
      `a[data-categoryId = "${categoryId}"]`
    );
    currentSelectedCategoryBtn.classList.add('active-category');
  }
}

export { renderCategories, toggleCategoryBtn };
