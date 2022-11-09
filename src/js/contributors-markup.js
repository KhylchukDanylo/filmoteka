import { contributors } from "./data/contributors";
import icon from '../images/icons.svg';
import { refs } from "./DOM-elements";

const {contributorsModal} = refs;

function renderCotributorsModal(){
  const contributorsMarkup = contributors.reduce((result, person) => {
    return result += `    <li class="contributors__item">
    <img class="contributors__photo" src="${person.photo}" alt="${person.name}" width="100" height="100">
<h3 class="contributors__name">${person.name}</h3>
<p class="contributors__position">${person.position}</p>
<ul class="contributors__social-list">
 <li class="contributors__social-item">
   <a class="contributors__link" href="${person.gitHubLink}" target="_blank"
     rel="noopener noreferrer nofollow" >
     <svg class="contributors__icon" width="20" height="20">
       <use href="${icon}#github"></use>
     </svg>
   </a>
 </li>
 <li class="contributors__social-item">
   <a class="contributors__link" href="#">
     <svg class="contributors__icon" width="20" height="20">
       <use href="${icon}#linkedin"></use>
     </svg>
   </a>
 </li>
</ul>
</li>`
}, '')
contributorsModal.innerHTML = `  <ul class="contributors__list"> ${contributorsMarkup} </ul>`;
}

export {renderCotributorsModal};