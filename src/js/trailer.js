import { fetchTrailer } from './api-service';

const backdrop = document.querySelector('.trailer__backdrop');
const modal = document.querySelector('.trailer__modal');
const movieList = document.querySelector('.movie');
const trailerFrame = document.querySelector('.trailer__frame');

movieList.addEventListener('click', moviesClickHandling);

function moviesClickHandling(event) {
  //немного костылей которые стоит исправить и сделать красиво, но пока что так

  const trailerBtn = event.target.closest('.show-trailer');
  if (!trailerBtn) {
    return;
  }

  const movieId = event.target.closest('a').id;
  // console.log(movieId);
  fetchTrailer(movieId).then(trailersInfo => trailersHandling(trailersInfo));
  //предположительный конец костылей
}

const trailersHandling = trailersInfo =>
  renderTrailerModal(trailersInfo.data.results[0].key);

function renderTrailerModal(key) {
  // console.log(key);
  backdrop.classList.toggle('is-hidden');
  backdrop.addEventListener('click', closeTrailerModal);

  trailerFrame.src = `https://www.youtube.com/embed/${key}`;
}

function closeTrailerModal(event) {
  if (event.target === backdrop) {
    backdrop.classList.toggle('is-hidden');
    backdrop.removeEventListener('click', closeTrailerModal);
    trailerFrame.src = '';
  }
}

//--------------------------

/*
function showTrailer(){
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('trailer', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// onYouTubeIframeAPIReady();
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
}
*/
