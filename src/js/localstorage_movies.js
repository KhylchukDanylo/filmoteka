import { Notify } from 'notiflix';
//import { refs } from './DOM-elements';
import { fetchMovieById } from './api-service';

const createQueue = document.querySelector('.movie__btn-queue');
const createWatched = document.querySelector('.movie__btn-watched');
//const watchedBtn = document.querySelectorAll('#watched');
//const queueBtn = document.querySelectorAll('#queue');

//const movieId = parseInt(e.target.parentElement.parentElement.id);

createQueue.addEventListener('click', onCreateQueueClick);
//queueBtn.addEventListener('click', oncQueueBtnClick);
createWatched.addEventListener('click', onCreateWatchedClick);
//watchedBtn.addEventListener('click', onWatchedBtnClick);

const watchedMovies = [];
const queueMovies = [];
const UID = localsrorage.setItem('uid');

//fetchMovieById();
//const movieId = parseInt(e.target.parentElement.parentElement.id);

function onCreateWatchedClick(movieId) {
  e.preventDefault();
  if (!UID) {
    return Notify.failure('Log in please!');
  } else {
    localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }
  if (localStorage.getItem('watched').includes(movieId)) {
    watchedMovies.splice(watchedMovies.indexOf(movieId), 1);
  } else {
    watchedMovies.push(movieId);
  }
  if (UID && localStorage.getItem('watched').includes(movieId)) {
    Notify.success('This movie was added to watched');
    createWatched.textContent = 'Added to watched';
    createQueue.classList.add('visually-hidden');
  } else {
    Notify.success('This movie was deleted from watched');
    createWatched.textContent = 'Add to watched';
    createQueue.classList.remove('visually-hidden');
  }
}

function onCreateQueueClick(movieId) {
  e.preventDefault();
  if (!UID) {
    return Notify.failure('Log in please!');
  } else {
    localStorage.setItem('queued', JSON.stringify(queueMovies));
  }

  if (localStorage.getItem('queued').includes(movieId)) {
    queueMovies.splice(queueMovies.indexOf(movieId), 1);
  } else {
    queueMovies.push(movieId);
  }
  if (UID && localStorage.getItem('queued').includes(movieId)) {
    Notify.success('Added to queued');
    createQueue.textContent = 'Queued';
    createWatched.classList.add('visually-hidden');
  } else {
    Notify.success('Deleted from queue');
    createQueue.textContent = 'Add to queue';
    createWatched.classList.remove('visually - hidden');
  }
}
