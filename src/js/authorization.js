import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import {
  getDatabase,
  set,
  ref,
  update,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOWZya9Zmv8k9lrKjpClyCyaGNsk8RFHI',
  authDomain: 'bookshelf-authorization.firebaseapp.com',
  projectId: 'bookshelf-authorization',
  storageBucket: 'bookshelf-authorization.appspot.com',
  messagingSenderId: '12343423583',
  appId: '1:12343423583:web:8e59404b1f5a7da23921ea',
  databaseURL:
    'https://bookshelf-authorization-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const signedUserName = document.querySelector('.signed-name');
const signName = document.querySelector('.name');
const signEmail = document.querySelector('.email');
const signPassword = document.querySelector('.password');
const form = document.querySelector('.authorization-form');
const signUpBtn = document.querySelector('.authorization-button.sign-up');
const signInBtn = document.querySelector('.authorization-button.sign-in');
const signOutBtn = document.querySelector('.sign-out');

signUpBtn.addEventListener('click', onSignUpBtnClick);
signInBtn.addEventListener('click', onSignInBtnClick);
// signOutBtn.addEventListener('click', onSignOutBtnClick);

function onSignUpBtnClick(e) {
  e.preventDefault();
  const userName = signName.value;
  const userEmail = signEmail.value;
  const userPassword = signPassword.value;
  signedUserName.textContent = userName;

  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user;
      // ... user.uid
      set(ref(database, 'users/' + user.uid), {
        username: userName,
        email: userEmail,
        password: userPassword,
      })
        .then(() => {
          // Data saved successfully!
          alert('welcome');
        })
        .catch(error => {
          // The write failed...
          alert(error);
        });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });

  form.reset();
}

function onSignInBtnClick(e) {
  e.preventDefault();

  const userName = signName.value;
  const userEmail = signEmail.value;
  const userPassword = signPassword.value;

  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
      let loginDate = new Date();

      update(ref(database, 'users/' + user.uid), {
        last_login: loginDate,
      })
        .then(() => {
          // Data saved successfully!
          alert('welcome');
        })
        .catch(error => {
          // The write failed...
          alert(error);
        });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  form.reset();
}

function onSignOutBtnClick(e) {
  e.preventDefault();
  signOut(auth)
    .then(() => {})
    .catch(err => console.log(err));
}

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const signUpText = document.querySelector('#sign-up');
const signInText = document.querySelector('#sign-in');

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
