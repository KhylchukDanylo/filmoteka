function getVals(){
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
  
  var displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
}

window.onload = function(){
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
      for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}

const lowerValueRange = document.querySelector('.lower-value');
const higerValueRange = document.querySelector('.higher-value');
const form = document.querySelector('.years__form');
console.dir(form);

import { fetchMoviesByRating } from './api-service';

fetchMoviesByRating().then(console.log)



// console.log(bottom, top);


let minValue = form.elements[0].value;
  let maxValue = form.elements[1].value;
    if( minValue > maxValue ){ const additionalVar = maxValue; maxValue = minValue; minValue = additionalVar; }

  if (Number(minValue) === Number(maxValue)) {
    rangeValues.innerHTML = minValue;
  } else {
    rangeValues.innerHTML = `From ${minValue} to ${maxValue}`;
  }
  