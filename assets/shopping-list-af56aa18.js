import{l as w}from"./dark-theme-78ea4a61.js";const A="/bookshelf/assets/amazon-mob-1x-c9738eb7.svg",c="/bookshelf/assets/amazon-mob-t1x-0929c38f.svg",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgBrVHBDcIwDHQQf7IB2QC6CWxQJugqjMIIbECZoGUCYIJwRkY1IW4Q9KRTIvd8PjdEf8LlijHGNY5NUj4459pUO6MpEhgTS3gm0gk82HzR2Ij2HUjhwWupmzWstT5Gda9fQr7nNKPuODswCDsrZfoKN8rtN8CL5meDAPa6MB8xaGmYdiQDqcFFphDeeKvqOznZ/K4bcisEsrGiwgp78IQ/vZQ0GguwBiszAWL3IjjTJ9iwEs10eABLk1zammnIfAAAAABJRU5ErkJggg==",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZbvDYIwEMUfxu/qBNYJdARG0Q0cwREYwRHcwBFwA7oBMEFtwzVWAvQfREn4JeRCoa8v1/ZaYGFOCCEKYafw0Vxh4cck5gvNH8O08CRJDvrlP9eAzERKK/qJSJQGaaVd3/sywCkyxLOlWMHDwJgMGuhFVxVEYtPxzoDUulJFPBltTD6l+gZPhgxwLd5qVwMzipoUTaqP+DbLTC1fA2NgnX9rBhC3E6IMVC2RSRgyUCPeAKPIEWBgjAzovjUmMOBSWKxrYA1/A5l8VGF5GW0PNNvyjgkMbMxGeZSqgS+tNvVvVxEaZRfsEM6eIkeAAU7xiHDCDiKFLKNbqu+ioxy79GfRB5rse9NXbbqkWLckGU/F5wqfIRQSy0U4uYtpFyNnEisdBi3p3xsW5sAbPLFFG+eM+E0AAAAASUVORK5CYII=",r="/bookshelf/assets/book-mob1x-0d32fb0b.svg",b="/bookshelf/assets/book-mob-t1x-7202a688.svg",g="/bookshelf/assets/img-book-Mob1x-1fe4bd25.png",v="/bookshelf/assets/img-book-Mob2x-261d5249.png";document.addEventListener("DOMContentLoaded",w.onDOMContentLoaded);const d=document.querySelector(".book-list"),s="books";function k(){const o=`
  <div class="empty-list">
      <p class="empty-list-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
         class="empty-list-img"
         src="${g}"
         srcset="
         ${g} 1x,
         ${v} 2x
         "
        alt="books"
        width="265"
        height="198"
         />
      </div>`;d.innerHTML=o}function m(){const e=(JSON.parse(localStorage.getItem(s))||[]).map(({_id:a,book_image:i,title:t,description:l,author:h,amazon_product_url:x,list_name:p,buy_links:f})=>`
      <li class="book_li book js-card" data-book-id="${a}">
        <div class="book_li-img">
              <img class="book_li-i" src="${i||"../img/def-placeholder.png"}" alt="${t}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn js-card__delete">
                  <img
                    class="book_li-icon js-card__delete"
                    src="${n}"
                    srcset="
                      ${n} 1x,
                      ${M} 2x
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
                ${l.trim()}
              </p>
              <div class="book_li-footer">
                <p class="book_li-author">${h.trim()}</p>
                <ul class="book-links">
                  <li>
                    <a class="book_link" href="${x}">
                      <img
                        class="book_link-amazon"
                        src="${A}"
                        srcset="
                          ${A} 1x,
                        "
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                      <img
                        class="book_link-amazon hovered"
                        src="${c}"
                        srcset="
                          ${c} 1x,
                        "
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                    </a>
                  </li>
                  <li>
                   <a class="book_link" href="${f[1].url}" target="_blank"
              rel="noopener noreferrer">

                      <img
                        class="book_link-book"
                        src="${r}"
                        srcset="
                          ${r} 1x,
                        "
                        alt="book"
                        width="16"
                        height="16"
                      />
                      <img
                        class="book_link-book hovered"
                        src="${b}"
                        srcset="
                          ${b} 1x,
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
    `).join("");e.length===0?k():d.innerHTML=e}function I(o){if(o.target.classList.contains("js-card__delete")){const a=o.target.closest(".js-card").dataset.bookId,t=(JSON.parse(localStorage.getItem(s))||[]).filter(l=>l._id!==a);localStorage.setItem(s,JSON.stringify(t)),m()}}window.addEventListener("click",o=>I(o));window.onload=()=>{localStorage.getItem(s)!==null||localStorage.getItem(s)!=[]?m():k()};
