/*import { Notify } from 'notiflix';
//import { refs } from './DOM-elements';
import { fetchMovieById } from './api-service';
import { movieId } from './modal-movie-render';
import { uid } from './modal-auth';
import { onBtnClick } from './library';

let queueMovies = [];
let watchedMovies = [];

const watchedBtn = document.querySelectorAll('#watched');
const queueBtn = document.querySelectorAll('#queue');
const createQueue = document.querySelector('.movie__btn-queue');
const createWatched = document.querySelector('.movie__btn-watched');

watchedBtn.addEventListener('click', onWatchedBtnCkick);
queueBtn.addEventListener('click', onQueueBtnClick);
//createQueue.addEventListener('click', onBtnCreateQueueClick);
//createWatched.addEventListener('click', onBtncreateWatchedClick);

window.addEventListener('keydown', e => {
  if (e.key === createQueue.classList.contains('.movie__btn-queue')) {
    createQueue.addEventListener('click', onBtnCreateQueueClick);
  }
  if (e.key === createWatched.classList.contains('.movie__btn-watched')) {
    createWatched.addEventListener('click', onBtncreateWatchedClick);
  }
});

function onBtnCreateQueueClick(movieId) {
  if (!localsrorage.setItem('uid', user.uid)) {
    return;
  } else {
    localStorage.setItem('queued', queueMovies);
    if (localStorage.getItem('queued').includes(movieId)) {
      queueMovies.splice(queueStoragedFilms.indexOf(movieId), 1);
    } else {
      queueMovies.push(movieId);
    }
    localStorage.setItem('queued', JSON.stringify(queueMovies));
  }
}

function onBtncreateWatchedClick(movieId) {
  if (!localsrorage.setItem('uid', user.uid)) {
    return;
  } else {
    localStorage.setItem('watched', watchedMovies);
    if (localStorage.getItem('watched').includes(movieId)) {
      watchedMovies.splice(watchedMovies.indexOf(movieId), 1);
    } else {
      watchedMovies.push(movieId);
    }
    localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }
}

function onWatchedBtnCkick() {
  if (watchedBtn.classlist.contains('btn-active')) {
    watchedMovies = localstorage.getItem('watched').JSON.parse('watched');
    const listOfWatchedMovies = watchedMovies.reduce((acc, movie) => {
      acc += movie;
    }, '');
    return listOfWatchedMovies;
  }
}

function onQueueBtnClick() {
  if (queueBtn.classlist.contains('btn-active')) {
    queueMovies = localstorage.getItem('queued').JSON.parse('queued');
    const listOfQueueMovies = watchedMovies.reduce((acc, movie) => {
      acc += movie;
    }, '');
    return listOfQueueMovies;
  }
}*/
