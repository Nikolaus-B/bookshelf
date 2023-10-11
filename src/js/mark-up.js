export { generateMainBookMarkup, generateShoppingListMarkup, generateModalWindowMarkup };





function generateMainBookMarkup(books) {
  return books.map(book => `
    <div class="image-container">
      <img class="book-image" src="${book.book_image}" alt="${book.name}">
      <div class="info-book">
        <h1 class="title">${book.name}</h1>
        <p class="author">${book.author}</p>
      </div>
    </div>
  `).join('');
    
     const mainMarkUp = generateMainBookMarkup(books);
}

function generateShoppingListMarkup(books) {
  return books.map(book => `
    <div class="image-container">
      <img class="book-image" src="${book.book_image}" alt="${book.name}">
      <div class="info-book">
        <h1 class="title">${book.name}</h1>
        <p class="list-name">${book.list_name}</p>
        <p class="description">${book.description}</p>
        <p class="author">${book.author}</p>
      </div>
    </div>
  `).join('');
    
    const shoppingListMarkUp = generateShoppingListMarkup(books);
}

function generateModalWindowMarkup(books) {
  return books.map(book => `
    <div class="image-container">
      <img class="book-image" src="${book.book_image}" alt="${book.name}">
      <div class="info-book">
        <h1 class="title">${book.name}</h1>
        <p class="author">${book.author}</p>
        <p class="description">${book.description}</p>
      </div>
    </div>
  `).join('');
    
    const modalWindowMarkup = generateModalWindowMarkup(books);

    
}