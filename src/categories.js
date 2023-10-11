import { fetchCategoryList, fetchCategoryBooks } from './api-request';
const categoriesList = document.querySelector('.categories-list');

categoriesList.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  const currentCategory = evt.target.textContent;
  fetchCategoryBooks(currentCategory);
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
          createMarkup(list_name)
        );
      })
      .join('');
    return markup;
  } catch (error) {
    console.log(error);
  }
}
function createMarkup(el) {
  return `<li class="categories-item"><a href="">${el}</a></li>`;
}

export default { renderCategories };
