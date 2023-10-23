export const refs = {
  signName: document.querySelector('.name'),
  signEmail: document.querySelector('.email'),
  signPassword: document.querySelector('.password'),
  form: document.querySelector('.authorization-form'),

  signUpBtn: document.querySelector('.authorization-button.sign-up'),
  signInBtn: document.querySelector('.authorization-button.sign-in'),

  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  mobileBtnOpen: document.querySelector('[data-mobile-open]'),
  modal: document.querySelector('[data-modal]'),
  mobileLogOut: document.querySelector('.menu-log-out'),

  headerSpan: document.querySelector('.header-user-name'),
  headerSignUp: document.querySelector('.header-sign-up'),
  headerUserProfile: document.querySelector('.header-user-btn'),
  signOutBtn: document.querySelector('.header-log-out'),
  buttonContainer: document.querySelector('.header-button-container'),
};
