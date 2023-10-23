import { refs } from './auth-refs';

export function onPageChange() {
  refs.headerUserProfile.addEventListener('click', () => {
    refs.signOutBtn.classList.toggle('visually-hidden');
  });

  refs.signOutBtn.addEventListener('click', () => {
    refs.headerSignUp.classList.remove('visually-hidden');
    refs.headerUserProfile.classList.add('visually-hidden');
    refs.signOutBtn.classList.add('visually-hidden');
    refs.buttonContainer.classList.add('visually-hidden');
    refs.mobileLogOut.classList.add('visually-hidden');
    refs.mobileBtnOpen.classList.remove('visually-hidden');
  });

  refs.mobileLogOut.addEventListener('click', () => {
    refs.mobileLogOut.classList.add('visually-hidden');
    refs.mobileBtnOpen.classList.remove('visually-hidden');
  });
}
