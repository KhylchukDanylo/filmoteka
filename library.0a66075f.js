!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=o);var a=o("h0wt5"),i=o("jcFG7"),n=o("dCfNN");const{logoFromLibrarysHeader:d,logoFromLibrarysFixedHeader:c}=a.refs;let l=document.querySelector(".header-library"),s=document.querySelector(".fixed-header"),f=l.clientHeight;d.addEventListener("click",v),c.addEventListener("click",v);const u=Array.from(document.querySelectorAll("#watched")),m=Array.from(document.querySelectorAll("#queue"));function v(){localStorage.removeItem(i.CURRENT_PAGE),localStorage.removeItem(i.TOTAL_PAGES),localStorage.removeItem(i.CURRENT_STATE),localStorage.removeItem(i.MOVIE_TO_SEARCH)}window.addEventListener("scroll",n((function(){window.pageYOffset>f?s.classList.remove("is-hidden"):s.classList.add("is-hidden")}),200)),l.addEventListener("click",(function(e){"watched"===e.target.id?(u.forEach((e=>{e.classList.add("btn-active")})),m.forEach((e=>{e.classList.remove("btn-active")}))):"queue"===e.target.id&&(u.forEach((e=>{e.classList.remove("btn-active")})),m.forEach((e=>{e.classList.add("btn-active")})))}))}();
//# sourceMappingURL=library.0a66075f.js.map