!function(){const e=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),o=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),l=matchMedia("(prefers-color-scheme: dark)"),r=document.querySelectorAll(".switcher__radio");function t(l){!function(l){let r,t;"auto"===l?(r="(prefers-color-scheme: light)",t="(prefers-color-scheme: dark)"):(r="light"===l?"all":"not all",t="dark"===l?"all":"not all");[...e].forEach((e=>{e.media=r})),[...o].forEach((e=>{e.media=t}))}(l),"auto"===l?localStorage.removeItem("color-scheme"):function(e){localStorage.setItem("color-scheme",e)}(l)}function c(){return localStorage.getItem("color-scheme")}!function(){const e=c();if(null!==e){document.querySelector(`.switcher__radio[value=${e}]`).checked=!0}[...r].forEach((e=>{e.addEventListener("change",(e=>{t(e.target.value)}))}))}(),function(){const e=c(),o=l.matches?"dark":"light";null!==e&&e!==o&&t(e)}()}();
//# sourceMappingURL=library.efb6a71c.js.map
