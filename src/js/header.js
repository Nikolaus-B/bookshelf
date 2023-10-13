export { handlerClickMenu };

import refs from './header-refs';

const {
  headerLabel,
  headerInput,
  headerButton,
  headerHamburgerIcon,
  headerCloseIcon,
  headerUserIcon,
  openMenuBtn,
  mobileMenu,
} = refs;

openMenuBtn.addEventListener('click', handlerClickMenu);

function handlerClickMenu() {
  mobileMenu.classList.toggle('is-open');

  if (mobileMenu.classList.contains('is-open')) {
    headerHamburgerIcon.style.display = 'none';
    headerCloseIcon.style.display = 'block';
  } else {
    headerHamburgerIcon.style.display = 'block';
    headerCloseIcon.style.display = 'none';
  }
}
