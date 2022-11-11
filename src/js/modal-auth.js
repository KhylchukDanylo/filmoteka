import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';
import { refs } from './DOM-elements';

refs.btnLogin.addEventListener('click', onBtnLogin);
refs.btnRegister.addEventListener('click', onBtnSubmit);
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
  refs.formAuth.classList.remove('visually-hidden');

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
  closeModal();
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
  refs.formAuth.classList.add('visually-hidden');
  //window.location.reload();
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
