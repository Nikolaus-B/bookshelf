const scrollUpBtn = document.querySelector('.scroll-up-btn');
const scrollContainer = document.querySelector('.scroll-btn-wrapper')

scrollUpBtn.addEventListener ('click', onClick)

window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

function onClick() {
  document.documentElement.scrollTop = 0; 
}

function scrollFunction() {
    if (window.scrollY > 700) {
        scrollUpBtn.style.display = "block";
        scrollContainer.style.display = "flex";
    } else {
      scrollUpBtn.style.display = "none";
      scrollContainer.style.display = "none";
    }
  }

      export {scrollFunction};