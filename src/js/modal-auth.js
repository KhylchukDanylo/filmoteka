/*import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';
import { refs } from './DOM-elements';

//refs.btnLogin.addEventListener('click', onBtnLogin);
refs.btnRegister.addEventListener('click', onBtnSubmit);
refs.formAuth.addEventListener('input', throttle(onFormInput, 300));
refs.formAuth.addEventListener('submit', onFormSubmit);
refs.btnLogOut.addEventListener('click', onBtnLogOut);
refs.btnLoginGlobal.addEventListener('click', onLoginGlobalBtn);

const STORAGE_KEY = 'feedback-form';

const formData = {
  name: '',
  email: '',
  password: '',
};
const { name, email, password } = formData;

let currentFormData = formData;

resultForm();

function onLoginGlobalBtn(e) {
  e.preventDefault();
  refs.formAuth.classList.remove('visually-hidden');
}

function onBtnLogOut() {
  if (refs.formAuth.classlist.contains('visually-hidden')) {
    refs.formAuth.classlist.remove('visually-hidden');
  }
}
function onFormInput(e) {
  e.preventDefault();
  currentFormData = { ...currentFormData, [e.target.name]: e.target.value };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(STORAGE_KEY, value);
}

function resultForm() {
  populateEmail(name, email, password);
  refs.inputName.value = name;
  refs.inputEmail.value = email;
  refs.inputPassword.value = password;
  // return Notify.success('Welcome to our site!');
}

function onFormSubmit(e) {
  e.preventDefault();
  currentFormData = formData;
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(STORAGE_KEY, value);
  refs.formAuth.reset();
}

function populateEmail() {
  currentFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(currentFormData);
  return currentFormData;
}

function onBtnSubmit() {
  if (
    onValidInput({ email }) === false ||
    validate_password({ password }) === false ||
    validate_name({ name }) === false
  ) {
    return Notify.failure(
      'Your form has wrong field. Check information and try again.'
    );
  } else {
    return Notify.success('Welcome to our site!');
  }
}

window.addEventListener('keydown', e => {
  if (
    e.key === 'Escape' &&
    !refs.formAuth.classList.contains('visually-hidden')
  ) {
    closeModal();
  }
});

const btnCloseAuth = document.querySelector('.auth__btn-close');
btnCloseAuth.addEventListener('click', () => closeModal());

function closeModal() {
  refs.formAuth.classList.add('visually-hidden');
  //window.location.reload();
}

function onValidInput({ email }) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test({ email }) === true) {
    return true;
  } else {
    return false;
  }
}

function validate_password({ password }) {
  if ({ password }.length < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_name({ name }) {
  if ({ name } === '') {
    return false;
  } else {
    return true;
  }
}*/

/*Notify.failure('Log in please!', {
      fontSize: '22px',
      timeout: 2000,
      width: '600px',
    });*/

import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';
import { refs } from './DOM-elements';

//refs.btnLogin.addEventListener('click', onBtnLogin);
refs.btnRegister.addEventListener('click', onBtnSubmit);
refs.formAuth.addEventListener('input', throttle(onFormInput, 300));
refs.formAuth.addEventListener('submit', onFormSubmit);
refs.btnLogOut.addEventListener('click', onBtnLogOut);
refs.btnLoginGlobal.addEventListener('click', onLoginGlobalBtn);

const STORAGE_KEY = 'feedback-form';

const formData = {
  name: '',
  email: '',
  password: '',
};
const { name, email, password } = formData;

let currentFormData = formData;

resultForm();

function onLoginGlobalBtn(e) {
  e.preventDefault();
  refs.formAuth.classList.remove('visually-hidden');
}

function onBtnLogOut() {
  if (refs.formAuth.classlist.contains('visually-hidden')) {
    refs.formAuth.classlist.remove('visually-hidden');
  }
}
function onFormInput(e) {
  e.preventDefault();
  currentFormData = { ...currentFormData, [e.target.name]: e.target.value };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(STORAGE_KEY, value);
}

function resultForm() {
  populateEmail(name, email, password);
  refs.inputName.value = name;
  refs.inputEmail.value = email;
  refs.inputPassword.value = password;
  // return Notify.success('Welcome to our site!');
}

function onFormSubmit(e) {
  e.preventDefault();
  currentFormData = formData;
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(STORAGE_KEY, value);
  //refs.formAuth.reset();
}

function populateEmail() {
  currentFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(currentFormData);
  return currentFormData;
}

function onBtnSubmit() {
  if (
    onValidInput({ email }) === false ||
    validate_password({ password }) === false ||
    validate_name({ name }) === false
  ) {
    return Notify.failure(
      'Your form has wrong field. Check information and try again.'
    );
  } else {
    return Notify.success('Welcome to our site!');
  }
}

window.addEventListener('keydown', e => {
  if (
    e.key === 'Escape' &&
    !refs.formAuth.classList.contains('visually-hidden')
  ) {
    closeModal();
  }
});

const btnCloseAuth = document.querySelector('.auth__btn-close');
btnCloseAuth.addEventListener('click', () => closeModal());

function closeModal() {
  refs.formAuth.classList.add('visually-hidden');
  //window.location.reload();
}

function onValidInput({ email }) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test({ email }) === true) {
    return true;
  } else {
    return false;
  }
}

function validate_password({ password }) {
  if ({ password }.length < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_name({ name }) {
  if ({ name } === '') {
    return false;
  } else {
    return true;
  }
}
