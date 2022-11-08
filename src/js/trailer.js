import {fetchTrailer} from './api-service.js';
import {refs} from './DOM-elements';
import { Notify } from 'notiflix';
const {trailerFrame} = refs;
import { addSpinner, removeSpinner } from './spinner.js';

function showTrailer(movieId){
  addSpinner();
    fetchTrailer(movieId).then(trailersInfo =>  trailersHandling(trailersInfo))
    .catch(error =>{
        console.log(error);
        Notify.failure('trailer not found');
    });    
}

const trailersHandling = trailersInfo =>{
  removeSpinner();
  const trailerKey = trailersInfo.data.results[0].key;
  trailerFrame.src = `https://www.youtube.com/embed/${trailerKey}`;
}

export {showTrailer};