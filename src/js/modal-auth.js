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
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD4R5ow53nXeGgXQPCsfLs6LgP-O91YSD8',
  authDomain: 'filmoteka-24046.firebaseapp.com',
  databaseURL: 'https://filmoteka-24046-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-24046',
  storageBucket: 'filmoteka-24046.appspot.com',
  messagingSenderId: '292791059964',
  appId: '1:292791059964:web:64f61222f9751e8cb25e79',
  measurementId: 'G-VKQT91CF12',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const btnLogin = document.querySelector('.button__auth__login');
const btnLogOut = document.querySelector('.button__auth__logout');
const btnRegister = document.querySelector('.button__auth__register');
const input = document.querySelector('input');
const formAuth = document.querySelector('.form__auth');
const btnTest = document.querySelector('.btn__auth__library');

btnLogin.addEventListener('click', onBtnLogin);
btnRegister.addEventListener('click', onBtnRegister);
input.addEventListener('input', throttle(onValidInput, 300));
btnLogOut.addEventListener('click', onBtnLogOut);
btnTest.addEventListener('click', onTestBtn);

function onTestBtn(e) {
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
    //alert('Email or Password is wrong!!');
    return;
  }
  if (validate_field(fullName) === false) {
    Notify.failure('One or More Extra Fields is wrong!');
    //alert('One or More Extra Fields is wrong!');
    return;
  }
  createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
    const user = userCredential.user;
    const db = getDatabase();
    set(ref(db, 'users/' + user.uid), {
      email,
      fullName,
      lastLogin: Date.now(),
    })
      .then(() => {
        formAuth.classList.add('visually-hidden');
        Notify.success('User created succesfully!');
        //alert('User Created!!');
      })
      .catch(error => {
        Notify.failure('Error!!!');
        //alert(error_message);
      });
  });
}

function onBtnLogin(e) {
  e.preventDefault();
  email = document.querySelector('.input__auth__email').value;
  password = document.querySelector('.input__auth__password').value;

  if (onValidInput(email) === false || validate_password(password) === false) {
    Notify.failure('Email or Password is wrong!');
    //alert('Email or Password is wrong!!');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      formAuth.classList.add('visually-hidden');
      Notify.success('User logged in succesfully!');
      //alert('User logged in!');
    })
    .catch(error => {
      Notify.failure('Error!!!');
      //Notify.failure(`${error.message}`);
      // alert(error_message);
    });
}

/* signInWithEmailAndPassword(auth, email, password).then(userCredential => {
    const user = userCredential.user;
    const db = getDatabase();
    set(ref(db, 'users/' + user.uid), {
      lastLogin: Date.now(),
    })
      .then(() => {
        alert('User logged in');
      })
      .catch(error => {
        alert(error_message);
      });
  });
}*/
function userAuthState(e) {
  e.preventDefault();
  onAuthStateChanged(auth, user => {
    if (user !== null) {
      const uid = user.uid;
      localStorage.setItem('uid', uid);
      formAuth.classList.add('visually-hidden');
      btnLogin.classList.add('visually-hidden');
      btnLogOut.classList.remove('visually-hidden');
      return uid;
    } else {
      localStorage.removeItem('uid');
    }
  });
}

function onBtnLogOut(e) {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      btnLogin.classList.remove('visually-hidden');
      btnLogOut.classList.add('visually-hidden');
    })
    .catch(error => {
      if (error.code) {
        return Notify.failure(`${error.code}`);
      }
      if (error.message) {
        return Notify.failure(`${error.message}`);
      }
      Notify.failure(`${error.message}`);
      //alert(error_message);
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
  window.removeEventListener('keydown', onKeyDown);
}
