import{l as w,a as s,b as n,c as a,d as c}from"./dark-theme-626332ef.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgBrVHBDcIwDHQQf7IB2QC6CWxQJugqjMIIbECZoGUCYIJwRkY1IW4Q9KRTIvd8PjdEf8LlijHGNY5NUj4459pUO6MpEhgTS3gm0gk82HzR2Ij2HUjhwWupmzWstT5Gda9fQr7nNKPuODswCDsrZfoKN8rtN8CL5meDAPa6MB8xaGmYdiQDqcFFphDeeKvqOznZ/K4bcisEsrGiwgp78IQ/vZQ0GguwBiszAWL3IjjTJ9iwEs10eABLk1zammnIfAAAAABJRU5ErkJggg==",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZbvDYIwEMUfxu/qBNYJdARG0Q0cwREYwRHcwBFwA7oBMEFtwzVWAvQfREn4JeRCoa8v1/ZaYGFOCCEKYafw0Vxh4cck5gvNH8O08CRJDvrlP9eAzERKK/qJSJQGaaVd3/sywCkyxLOlWMHDwJgMGuhFVxVEYtPxzoDUulJFPBltTD6l+gZPhgxwLd5qVwMzipoUTaqP+DbLTC1fA2NgnX9rBhC3E6IMVC2RSRgyUCPeAKPIEWBgjAzovjUmMOBSWKxrYA1/A5l8VGF5GW0PNNvyjgkMbMxGeZSqgS+tNvVvVxEaZRfsEM6eIkeAAU7xiHDCDiKFLKNbqu+ioxy79GfRB5rse9NXbbqkWLckGU/F5wqfIRQSy0U4uYtpFyNnEisdBi3p3xsW5sAbPLFFG+eM+E0AAAAASUVORK5CYII=";document.addEventListener("DOMContentLoaded",w.onDOMContentLoaded);const b=document.querySelector(".book-list"),e="books";function d(){const o=`
  <li class="empty-list">
      <p class="empty-list-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
         class="empty-list-img"
         src="./img/img-book-Mob1x.png"
         srcset="
         ./img/img-book-Mob1x.png 1x,
         ./img/img-book-Mob2x.png 2x
         "
        alt="books"
        width="265"
        height="198"
         />
      </li>`;b.innerHTML=o}function k(){const i=(JSON.parse(localStorage.getItem(e))||[]).map(({_id:l,book_image:A,title:t,description:r,author:m,amazon_product_url:h,list_name:p,buy_links:x})=>`
      <li class="book_li book js-card" data-book-id="${l}">
        <div class="book_li-img">
              <img class="book_li-i" src="${A||"../img/def-placeholder.png"}" alt="${t}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn js-card__delete" aria-label="Remove from shopping list">
                  <img
                    class="book_li-icon js-card__delete"
                    src="${g}"
                    srcset="
                      ${g} 1x,
                      ${I} 2x
                    "
                    alt="basket"
                    width="16"
                    height="16"
                  />
                </button>
                <h2 class="book_li-title">${t.trim()}</h2>
                <h3 class="book_li-category">${p.trim()}</h3>
              </div>
              <p class="book_li-description">
                ${r.trim()}
              </p>
              <div class="book_li-footer">
                <p class="book_li-author">${m.trim()}</p>
                <ul class="book-links">
                  <li>
                    <a class="book_link" href="${h}" aria-label="Open the book in the online store" target="_blank"
                   rel="noopener noreferrer">
                      <img
                        class="book_link-amazon"
                        src="${s}"
                        srcset="${s} 1x,
                        ${n} 2x"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                      <img
                        class="book_link-amazon hovered"
                        src="${s}"
                        srcset="${s} 1x,
                        ${n} 2x"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                    </a>
                  </li>
                  <li>
                   <a class="book_link" href="${x[1].url}" aria-label="Open the book in the online store" target="_blank"
                   rel="noopener noreferrer">

                      <img
                        class="book_link-book"
                        src="${a}"
                        srcset="${a} 1x,
                        ${c} 2x"
                        alt="book"
                        width="16"
                        height="16"
                      />
                      <img
                        class="book_link-book hovered"
                        src="${a}"
                        srcset="${a} 1x,
                        ${c} 2x"
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
    `).join("");i.length>0?b.innerHTML=i:d()}function f(o){if(o.target.classList.contains("js-card__delete")){const l=o.target.closest(".js-card").dataset.bookId,t=(JSON.parse(localStorage.getItem(e))||[]).filter(r=>r._id!==l);localStorage.setItem(e,JSON.stringify(t)),k()}}window.addEventListener("click",o=>f(o));window.onload=()=>{localStorage.getItem(e)!==null||localStorage.getItem(e)!=[]?k():d()};
