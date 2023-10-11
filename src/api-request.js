import axios from 'axios';

const baseURL = "https://books-backend.p.goit.global"

async function apiRequest(url, errorMessage, params = {}) {
  try {
    const response = await axios.get(url, params)

     return await response.data;
  } catch (error) {
     return new Error(errorMessage);

  }
}

async function fetchCategoryList() {
  return apiRequest(
    `${baseURL}/books/category-list`,
    'This page is empty, add some books and proceed to order.'
  )
}

async function fetchTopBooks() {
  return apiRequest(
    `${baseURL}/books/top-books`,
    'This page is empty, add some books and proceed to order.'
  )
}

async function fetchCategoryBooks(categoryName) {
  return apiRequest(
    `${baseURL}/books/category`,
    'This page is empty, add some books and proceed to order.',
    {
      params:
        { category: categoryName }
    }
  )
}

async function fetchBookInfo(bookId) {
  return apiRequest(
    `${baseURL}/books/${bookId}`,
    'This page is empty, add some books and proceed to order.'
  )
}

export { fetchCategoryList, fetchTopBooks, fetchCategoryBooks, fetchBookInfo };