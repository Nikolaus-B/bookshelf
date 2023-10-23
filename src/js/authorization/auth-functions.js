const signUpText = document.querySelector('#sign-up');
const signInText = document.querySelector('#sign-in');
const signUpBtn = document.querySelector('.authorization-button.sign-up');
const signInBtn = document.querySelector('.authorization-button.sign-in');

signUpText.addEventListener('click', onsignUpTextClick);
signInText.addEventListener('click', onsignInTextClick);

function onsignUpTextClick() {
  signInText.classList.remove('active-auth');
  signUpText.classList.add('active-auth');

  signInBtn.classList.add('visually-hidden');
  signUpBtn.classList.remove('visually-hidden');
}

function onsignInTextClick() {
  signUpText.classList.remove('active-auth');
  signInText.classList.add('active-auth');

  signUpBtn.classList.add('visually-hidden');
  signInBtn.classList.remove('visually-hidden');
}
