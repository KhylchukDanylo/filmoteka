import danylo from '../images/contributors/danylo-khilchuk.jpg';
import eketerina from '../images/contributors/kateryna-kononenko.jpg';
import romanna from '../images/contributors/romanna-melnyk.jpg';
import mariia from '../images/contributors/mariia-savchyn.jpg';
import serhii from '../images/contributors/serhii-landar.jpg';
import yurov from '../images/contributors/dmitry-yurov.jpg';
import zhezheria from '../images/contributors/dmitro-zhezheria.jpg';
import aleksandr from '../images/contributors/aleksandr-didorchuck.jpg';
import michael from '../images/contributors/michael-kononenko.jpg';
import icon from '../images/icons.svg';

const contributorsMarkup = `
  <ul class="contributors__list">
    <li class="contributors__item">
      <img class="contributors__photo" src="${danylo}" alt="Khylchuk Danylo">
      <h3 class="contributors__name">Khylchuk Danylo</h3>
      <p class="contributors__position">Team leader</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/KhylchukDanylo" target="_blank"
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
    </li>
    <li class="contributors__item">
      <img class="contributors__photo" src="${eketerina}" alt="Ekaterina Kononenko">
      <h3 class="contributors__name">Kononenko Ekaterina</h3>
      <p class="contributors__position">Scrum master</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/EkaterinaKononenko" target="_blank"
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
    </li>
    <li class="contributors__item">
           <img class="contributors__photo" src="${romanna}" alt="Melnyk Romanna">
      <h3 class="contributors__name">Melnyk Romanna</h3>
      <p class="contributors__position">Developer</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/RomannaLG1" target="_blank"
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
    </li>
    <li class="contributors__item">
           <img class="contributors__photo" src="${mariia}" alt="Sanchyn Mariia">
      <h3 class="contributors__name">Sanchyn Mariia</h3>
      <p class="contributors__position">Developer</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/S-Mariia" target="_blank"
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
    </li>
    <li class="contributors__item">
           <img class="contributors__photo" src="${serhii}" alt="Landar Serhii">
      <h3 class="contributors__name">Landar Serhii</h3>
      <p class="contributors__position">Developer</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/Landar-S" target="_blank"
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
    </li>
    <li class="contributors__item">
           <img class="contributors__photo" src="${yurov}" alt="Yurov Dmitry">
      <h3 class="contributors__name">Yurov Dmitry</h3>
      <p class="contributors__position">Developer</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/yurov-37" target="_blank"
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
    </li>
    <li class="contributors__item">
           <img class="contributors__photo" src="${zhezheria}" alt="Zhezheria Dmitro">
      <h3 class="contributors__name">Zhezheria Dmitro</h3>
      <p class="contributors__position">Developer</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/Dmitruhub" target="_blank"
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
    </li>
    <li class="contributors__item">
           <img class="contributors__photo" src="${aleksandr}" alt="aleksandr-didorchuck">
      <h3 class="contributors__name">Aleksandr Didorchuck</h3>
      <p class="contributors__position">Developer</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/DidorchukAlexandr" target="_blank"
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
    </li>
    <li class="contributors__item">
           <img class="contributors__photo" src="${michael}" alt="Kononenko Michael">
      <h3 class="contributors__name">Kononenko Michael</h3>
      <p class="contributors__position">Developer</p>
      <ul class="contributors__social-list">
        <li class="contributors__social-item">
          <a class="contributors__link" href="https://github.com/MichaelKononenko" target="_blank"
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
    </li>
  </ul>

`;
export {contributorsMarkup};