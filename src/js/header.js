export { handlerClickMenu };

import refs from './header-refs';

const {
  headerHamburgerIcon,
  headerCloseIcon,
  fixedHeader,
  mobileMenu,
  openMenuBtn,
} = refs;

openMenuBtn.addEventListener('click', handlerClickMenu);

function handlerClickMenu() {
  mobileMenu.classList.toggle('is-open');

  if (mobileMenu.classList.contains('is-open')) {
    headerHamburgerIcon.style.display = 'none';
    headerCloseIcon.style.display = 'block';
    fixedHeader.classList.remove('header');
    fixedHeader.classList.add('fixed-header');
    document.body.classList.add('not-scrollable');
  } else {
    mobileMenu.classList.remove('is-open');
    headerHamburgerIcon.style.display = 'block';
    headerCloseIcon.style.display = 'none';
    fixedHeader.classList.add('header');
    fixedHeader.classList.remove('fixed-header');
    document.body.classList.remove('not-scrollable');
  }
}
