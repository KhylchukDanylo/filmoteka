import {fetchTrailer} from './api-service.js';
import {refs} from './DOM-elements';
import { Notify } from 'notiflix';
const {trailerFrame} = refs;

function showTrailer(movieId){
    fetchTrailer(movieId).then(trailersInfo =>  trailersHandling(trailersInfo))
    .catch(error =>{
        console.log(error);
        Notify.failure('trailer not found');
    });    
}

const trailersHandling = trailersInfo =>{
  const trailerKey = trailersInfo.data.results[0].key;
  trailerFrame.src = `https://www.youtube.com/embed/${trailerKey}`;
}

export {showTrailer};