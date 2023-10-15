export { createTopMarkup, createCategoryMarkup, createModalWindowMarkup, createShoppingListMarkup };




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
     </div>`
   }


function createCategoryMarkup(book) {
  console.log(book)
  return `
  <div class="image-container">
       <img class="book-image" src="${book.book_image}" alt="${book.title}">
       <div class="info-book">
         <h1 class="title">${book.title}</h1>
         <p class="author">${book.author}</p>
       </div>
       </div>`;
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
  `

}

function createModalWindowMarkup(book) {
  return `
    <div class="image-container">
      <img class="book-image" src="${book.books[0].book_image}" alt="${book.books[0].title}">
      <div class="info-book">
        <h1 class="title">${book.books[0].title}</h1>
        <p class="author">${book.books[0].author}</p>
        <p class="description">${book.books[0].description}</p>
      </div>
    </div>
  `

}


