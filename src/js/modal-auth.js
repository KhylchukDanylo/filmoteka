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
import { getDatabase, ref, set, remove } from 'firebase/database';*/

/*const firebaseConfig = {
  apiKey: 'AIzaSyD4R5ow53nXeGgXQPCsfLs6LgP-O91YSD8',
  authDomain: 'filmoteka-24046.firebaseapp.com',
  databaseURL: 'https://filmoteka-24046-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-24046',
  storageBucket: 'filmoteka-24046.appspot.com',
  messagingSenderId: '292791059964',
  appId: '1:292791059964:web:64f61222f9751e8cb25e79',
  measurementId: 'G-VKQT91CF12',
};*/

/*const firebaseConfig = {
  apiKey: 'AIzaSyDO3O5qj1fBFaBjqh7PNPAjYn5I4RWI-q4',
  authDomain: 'filmoteka-9038d.firebaseapp.com',
  databaseURL: 'https://filmoteka-9038d-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-9038d',
  storageBucket: 'filmoteka-9038d.appspot.com',
  messagingSenderId: '668791484535',
  appId: '1:668791484535:web:6b079499ab77f0ae261672',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const btnLogin = document.querySelector('.button__auth__login');
const btnLogOut = document.querySelector('.button__auth__logout');
const btnRegister = document.querySelector('.button__auth__register');
const input = document.querySelector('input');
const formAuth = document.querySelector('.form__auth');
const btnLoginGlobal = document.querySelector('.auth__login-logout');
let btnMyLibrary = document.querySelector('.header__link');

btnLogin.addEventListener('click', onBtnLogin);
btnRegister.addEventListener('click', onBtnRegister);
input.addEventListener('input', throttle(onValidInput, 300));
btnLogOut.addEventListener('click', onBtnLogOut);
btnLoginGlobal.addEventListener('click', onLoginGlobalBtn);

function onLoginGlobalBtn(e) {
  e.preventDefault();
  formAuth.classList.remove('visually-hidden');
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
      formAuth.classList.add('visually-hidden');
      btnMyLibrary.classList.remove('disabled');
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
      formAuth.classList.add('visually-hidden');
      btnMyLibrary.classList.remove('disabled');
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
    formAuth.classList.add('visually-hidden');
    btnRegister.classList.add('visually-hidden');
    btnLogin.classList.add('visually-hidden');
    btnLogOut.classList.remove('visually-hidden');
    btnLoginGlobal.textContent = 'log out';
    btnMyLibrary.classList.remove('disabled');
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
      btnLogin.classList.remove('visually-hidden');
      btnRegister.classList.remove('visually-hidden');
      formAuth.classList.remove('visually-hidden');
      btnLogOut.classList.add('visually-hidden');
      btnLoginGlobal.textContent = 'Log in';
      const uid = user.uid;
      uid = null;
    })
    .catch(error => {*/
/*if (error.code) {
        return Notify.failure(`${error.code}`);
      }
      if (error.message) {
        Notify.failure(`${error.message}`);
      }*/
/* Notify.failure('User is logged out!');
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

window.addEventListener('keydown', onKeyDown);

function onKeyDown(e) {
  console.log(e.key);
  if (e.key !== 'Escape') return;
  formAuth.classList.add('visually-hidden');
  window.location.reload();
  window.removeEventListener('keydown', onKeyDown);
}*/

import throttle from 'lodash.throttle';
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

/*const firebaseConfig = {
  apiKey: 'AIzaSyD4R5ow53nXeGgXQPCsfLs6LgP-O91YSD8',
  authDomain: 'filmoteka-24046.firebaseapp.com',
  databaseURL: 'https://filmoteka-24046-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-24046',
  storageBucket: 'filmoteka-24046.appspot.com',
  messagingSenderId: '292791059964',
  appId: '1:292791059964:web:64f61222f9751e8cb25e79',
  measurementId: 'G-VKQT91CF12',
};*/

const firebaseConfig = {
  apiKey: 'AIzaSyDO3O5qj1fBFaBjqh7PNPAjYn5I4RWI-q4',
  authDomain: 'filmoteka-9038d.firebaseapp.com',
  databaseURL: 'https://filmoteka-9038d-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-9038d',
  storageBucket: 'filmoteka-9038d.appspot.com',
  messagingSenderId: '668791484535',
  appId: '1:668791484535:web:6b079499ab77f0ae261672',
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
      /*if (error.code) {
        return Notify.failure(`${error.code}`);
      }
      if (error.message) {
        Notify.failure(`${error.message}`);
      }*/
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

window.addEventListener('keydown', onKeyDown);

function onKeyDown(e) {
  console.log(e.key);
  if (e.key !== 'Escape') return;
  refs.formAuth.classList.add('visually-hidden');
  window.location.reload();
  window.removeEventListener('keydown', onKeyDown);
}