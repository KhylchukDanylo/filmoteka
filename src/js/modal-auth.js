//////////////////////FIREBASE//////////////////////////////////////////////
/*import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, remove } from 'firebase/database';
import { backdrop } from './modal-movie-render';

const firebaseConfig = {
  apiKey: 'AIzaSyB2TbFY0wugbjLukonpxHQ4tn4oKoQ7Qn8',
  authDomain: 'filmoteka-a0a19.firebaseapp.com',
  databaseURL: 'https://filmoteka-a0a19-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-a0a19',
  storageBucket: 'filmoteka-a0a19.appspot.com',
  messagingSenderId: '516717508384',
  appId: '1:516717508384:web:1c84f81a5f5da340f6c945',
  measurementId: 'G-ESLPD4WQPE',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

import { refs } from './DOM-elements';

refs.btnLogin.addEventListener('click', onBtnLogin);
refs.btnRegister.addEventListener('click', onBtnRegister);
refs.input.addEventListener('input', throttle(onValidInput, 300));
refs.btnLogOut.addEventListener('click', onBtnLogOut);
refs.btnLoginGlobal.addEventListener('click', onLoginGlobalBtn);

function onLoginGlobalBtn(e) {
  e.preventDefault();
  refs.formAuth.classList.remove('visually-hidden');
}

function onBtnRegister(e) {
  e.preventDefault();
  email = document.querySelector('.input__auth__email').value;
  password = document.querySelector('.input__auth__password').value;
  fullName = document.querySelector('.input__auth__name').value;

  if (onValidInput(email) === false || validate_password(password) === false) {
    Notify.failure('Email or Password is wrong!');
    return;
  }
  if (validate_field(fullName) === false) {
    Notify.failure('One or More Extra Fields is wrong!');
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const database = getDatabase();
      set(ref(database, 'users/' + user.uid), {
        email,
        fullName,
        lastLogin: Date.now(),
      });
      refs.formAuth.classList.add('visually-hidden');
      refs.btnMyLibrary.classList.remove('disabled');
      Notify.success('User created succesfully!');
    })
    .catch(error => {
      Notify.failure('User with this email is already registered');
    });
}

function onBtnLogin(e) {
  e.preventDefault();
  email = document.querySelector('.input__auth__email').value;
  password = document.querySelector('.input__auth__password').value;

  if (onValidInput(email) === false || validate_password(password) === false) {
    Notify.failure('Email or Password is wrong!');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      refs.formAuth.classList.add('visually-hidden');
      refs.btnMyLibrary.classList.remove('disabled');
      Notify.success('User logged in succesfully!');
    })
    .catch(error => {
      Notify.failure('Error!!!');
    });
}

onAuthStateChanged(auth, user => {
  if (user !== null) {
    const uid = user.uid;
    localStorage.setItem('uid', uid);
    refs.formAuth.classList.add('visually-hidden');
    refs.btnRegister.classList.add('visually-hidden');
    refs.btnLogin.classList.add('visually-hidden');
    refs.btnLogOut.classList.remove('visually-hidden');
    refs.btnLoginGlobal.textContent = 'log out';
    refs.btnMyLibrary.classList.remove('disabled');
    document.querySelector('.input__auth__email').value = '';
    document.querySelector('.input__auth__password').value = '';
    document.querySelector('.input__auth__name').value = '';

    return uid;
  } else {
    localStorage.removeItem('uid');
  }
});

function onBtnLogOut(e) {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      refs.btnLogin.classList.remove('visually-hidden');
      refs.btnRegister.classList.remove('visually-hidden');
      refs.formAuth.classList.remove('visually-hidden');
      refs.btnLogOut.classList.add('visually-hidden');
      refs.btnLoginGlobal.textContent = 'Log in';
      const uid = user.uid;
      uid = null;
    })
    .catch(error => {
      Notify.failure('User is logged out!');
    });
}

function onValidInput(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) === true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field === null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !refs.formAuth.classList.contains('is-hidden')) {
    closeModal();
  }
});

const btnCloseAuth = document.querySelector('.auth__btn-close');
btnCloseAuth.addEventListener('click', () => closeModal());

function closeModal() {
  refs.formAuth.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
  window.location.reload();
}*/

/*function noScroll() {
  if (!refs.formAuth.classList.contains('visually-hidden')) {
    document.body.classList.add('stop-scrolling');
  } else {
    document.body.classList.remove('stop-scrolling');
  }
}*/

/*function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModalAuth();
  }
}*/

///////////////////////////LOCALSTORAGE//////////////////////////////

import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';
import { refs } from './DOM-elements';
const trailerNotifyOptions = {
  position: 'center-top',
  timeout: 1500,
  fontFamily: 'Roboto',
};
refs.btnLogin.addEventListener('click', onBtnLogin);
// refs.btnRegister.addEventListener('click', onBtnSubmit);
refs.formAuth.addEventListener('input', throttle(onFormInput, 300));
refs.formAuth.addEventListener('submit', onFormSubmit);
refs.btnLogOut.addEventListener('click', onBtnLogOut);
refs.btnLoginGlobal.addEventListener('click', onLoginGlobalBtn);

const STORAGE_KEY = 'feedback-form';

const formData = {
  text: '',
  email: '',
  password: '',
};

let currentFormData = formData;

resultForm();

function onLoginGlobalBtn(e) {
  e.preventDefault();
  // refs.formAuth.classList.remove('visually-hidden');
  refs.modalAuthBackdrop.classList.remove('visually-hidden');
  refs.modalAuthBackdrop.addEventListener('click', closeAuthModal);

  if (refs.btnLoginGlobal.textContent === 'Log out') {
    refs.btnLogin.classList.add('visually-hidden');
    refs.btnRegister.classList.add('visually-hidden');
    refs.btnLogOut.classList.remove('visually-hidden');
    refs.inputName.disabled = true;
    refs.inputEmail.disabled = true;
    refs.inputPassword.disabled = true;
  }

  if (refs.btnLoginGlobal.textContent === 'Log in') {
    refs.btnLogin.classList.remove('visually-hidden');
    refs.btnRegister.classList.remove('visually-hidden');
    refs.btnLogOut.classList.add('visually-hidden');
    refs.inputName.disabled = false;
    refs.inputEmail.disabled = false;
    refs.inputPassword.disabled = false;
  }
}

function onBtnLogOut() {
  refs.btnLogin.classList.remove('visually-hidden');
  refs.btnRegister.classList.remove('visually-hidden');
  refs.btnLogOut.classList.add('visually-hidden');
  refs.btnLoginGlobal.textContent = 'Log in';

  closeModal(); //не совсем понял для чего тут закрывать модалку, она тут будет открыта?
}
function onFormInput(e) {
  e.preventDefault();
  currentFormData = { ...currentFormData, [e.target.name]: e.target.value };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(STORAGE_KEY, value);
}

function resultForm() {
  const { text, email, password } = populateEmail();
  refs.inputName.value = text;
  refs.inputEmail.value = email;
  refs.inputPassword.value = password;
}

function onFormSubmit(e) {
  e.preventDefault();
  currentFormData = formData;
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(STORAGE_KEY, value);

  //window.location.reload();
}

function populateEmail() {
  currentFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || formData;
  console.log(currentFormData);
  return currentFormData;
}

function onBtnSubmit() {
  if (
    refs.inputName.value !== '' ||
    refs.inputEmail.value !== '' ||
    refs.inputPassword.value !== ''
  ) {
    Notify.success('Welcome to our site!');
    refs.btnLoginGlobal.textContent = 'Log out';
  } else {
    Notify.failure(
      'Your form has empty fields. Add information and try again.'
    );
  }
  refs.formAuth.reset();
  closeModal();
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const btnCloseAuth = document.querySelector('.auth__btn-close');
btnCloseAuth.addEventListener('click', () => closeModal());

function closeModal() {
  // refs.formAuth.classList.add('visually-hidden');
  refs.modalAuthBackdrop.classList.add('vissualy-hidden');
  // window.location.reload();
}

function onBtnLogin() {
  const currentFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  let newCurrentFormData =
    'refs.inputName.value && refs.inputEmail.value && refs.inputPassword.value';
  if (currentFormData === newCurrentFormData) {
    Notify.success('Welcome to our site!');
    console.log('Login successful');
  } else {
    Notify.failure('ERROR');
    console.log('Wrong user');
  }
  Notify.failure('ERROR');
  console.log('Not a registered user');
  closeModal();
}
/*const trailerNotifyOptions =  {position: 'center-top',timeout: 1500, fontFamily: 'Roboto',};*/

function closeAuthModal(event) {
  if (event.target === event.currentTarget) {
    refs.modalAuthBackdrop.classList.add('visually-hidden');
    refs.modalAuthBackdrop.removeEventListener('click', closeModal);
  }
}
