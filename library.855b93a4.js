function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("2sH7u",(function(t,e){var n=o("2aMrB"),r=o("2nhTy"),i=o("9OeKo");const{logoFromLibrarysHeader:u,logoFromLibrarysFixedHeader:a}=n.refs;let c=document.querySelector(".header-library"),s=document.querySelector(".fixed-header"),l=c.clientHeight;u.addEventListener("click",g),a.addEventListener("click",g);const f=Array.from(document.querySelectorAll("#watched")),d=Array.from(document.querySelectorAll("#queue"));function g(){localStorage.removeItem(r.CURRENT_PAGE),localStorage.removeItem(r.TOTAL_PAGES),localStorage.removeItem(r.CURRENT_STATE),localStorage.removeItem(r.MOVIE_TO_SEARCH)}window.addEventListener("scroll",i((function(){window.pageYOffset>l?s.classList.remove("is-hidden"):s.classList.add("is-hidden")}),200)),c.addEventListener("click",(function(t){"watched"===t.target.id?(f.forEach((t=>{t.classList.add("btn-active")})),d.forEach((t=>{t.classList.remove("btn-active")}))):"queue"===t.target.id&&(f.forEach((t=>{t.classList.remove("btn-active")})),d.forEach((t=>{t.classList.add("btn-active")})))}))})),o.register("2aMrB",(function(e,n){t(e.exports,"refs",(function(){return r}));const r={movieList:document.querySelector(".movie"),trailerFrame:document.querySelector(".trailer__frame"),teamModalButton:document.querySelector(".footer__button"),contributorsWrapper:document.querySelector(".contributors"),btnLogin:document.querySelector(".button__auth__login"),btnLogOut:document.querySelector(".button__auth__logout"),btnRegister:document.querySelector(".button__auth__register"),input:document.querySelector("input"),formAuth:document.querySelector(".form__auth"),btnLoginGlobal:document.querySelector(".auth__login-logout"),btnMyLibrary:document.querySelector(".header__link"),movieBackdrop:document.querySelector(".backdrop"),logoFromHeader:document.querySelector(".link-logo"),logoFromFixedeHader:document.querySelector(".logo-link__fixed"),logoFromLibrarysHeader:document.querySelector(".logo__link"),logoFromLibrarysFixedHeader:document.querySelector(".logo__link--fixed")}})),o.register("2nhTy",(function(e,n){t(e.exports,"paginationList",(function(){return i})),t(e.exports,"containerEl",(function(){return u})),t(e.exports,"CURRENT_PAGE",(function(){return a})),t(e.exports,"TOTAL_PAGES",(function(){return c})),t(e.exports,"CURRENT_STATE",(function(){return s})),t(e.exports,"MOVIE_TO_SEARCH",(function(){return l})),t(e.exports,"setTargetPage",(function(){return m})),t(e.exports,"addPagination",(function(){return y}));var r=o("3vGNy");const i=document.querySelector(".pagination-list"),u=document.querySelector(".container"),a="paginationCurrentPage",c="paginationTotalPages",s="paginationCurrentState",l="paginationMovieToSearch",f=`<button type="button" class="pagination-button pagination-button__arrow arrow-to-start-button-js">${r.leftArrowIcon}</button>`,d=`<button type="button" class="pagination-button pagination-button__arrow arrow-to-end-button-js">${r.rightArrowIcon}</button>`,g='<div class="pagination-dots">...</div>',p=t=>`<button type="button" class="pagination-button pagination-button__page--current">${t}</button>`,b=t=>`<button type="button" class="pagination-button pagination-button__page">${t}</button>`;function $({screenWidth:t,currentPage:e,totalPages:n}){return t<480?function(t,e){if(t===e)return n(t);if(t===e-1)return`${n(t)} ${b(t+1)} ${d}`;if(t===e-2)return`${n(t)} ${b(t+1)} ${b(t+2)} ${d}`;if(t===e-3)return`${n(t)} ${b(t+1)} ${b(t+2)} ${d}`;if(t<e-3)return`${n(t)} ${b(t+1)} ${b(t+2)} ${d}`;function n(t){switch(t){case 1:return`${p(1)}`;case 2:return`${f} ${b(1)} ${p(2)}`;case 3:return`${f} ${b(1)} ${b(2)} ${p(3)}`;default:return`${f} ${b(t-2)} ${b(t-1)} ${p(t)}`}}}(e,n):function(t,e){if(t===e)return n(t);if(t===e-1)return`${n(t)} ${b(t+1)} ${d}`;if(t===e-2)return`${n(t)} ${b(t+1)} ${b(t+2)} ${d}`;if(t===e-3)return`${n(t)} ${b(t+1)} ${b(t+2)} ${b(t+3)} ${d}`;if(t<e-3)return`${n(t)} ${b(t+1)} ${b(t+2)} ${g} ${b(e)} ${d}`;function n(t){switch(t){case 1:return`${p(1)}`;case 2:return`${f} ${b(1)} ${p(2)}`;case 3:return`${f} ${b(1)} ${b(2)} ${p(3)}`;case 4:return`${f} ${b(1)} ${b(2)} ${b(3)} ${p(4)}`;default:return`${f} ${b(1)} ${g} ${b(t-2)} ${b(t-1)} ${p(t)}`}}}(e,n)}function m(t,e){return t.closest("button").classList.contains("arrow-to-start-button-js")?e-1:t.closest("button").classList.contains("arrow-to-end-button-js")?e+1:Number(t.closest("button").textContent)}function y({screenWidth:t,currentPage:e,totalPages:n}){!function(t){i.innerHTML=t}($({screenWidth:t,currentPage:e,totalPages:n}))}})),o.register("3vGNy",(function(e,n){t(e.exports,"leftArrowIcon",(function(){return r})),t(e.exports,"rightArrowIcon",(function(){return o}));const r='<svg class=\'pagination-icon\' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.333" d="M12.667 8H3.333M8 12.667 3.333 8 8 3.333"/></svg>',o='<svg class=\'pagination-icon\' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.333" d="M3.333 8h9.334M8 12.667 12.667 8 8 3.333"/></svg>'})),o.register("9OeKo",(function(t,n){var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=s||l||Function("return this")(),d=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return f.Date.now()};function $(t,e,n){var o,i,u,a,c,s,l=0,f=!1,d=!1,$=!0;if("function"!=typeof t)throw new TypeError(r);function v(e){var n=o,r=i;return o=i=void 0,l=e,a=t.apply(r,n)}function h(t){return l=t,c=setTimeout(w,e),f?v(t):a}function _(t){var n=t-s;return void 0===s||n>=e||n<0||d&&t-l>=u}function w(){var t=b();if(_(t))return S(t);c=setTimeout(w,function(t){var n=e-(t-s);return d?p(n,u-(t-l)):n}(t))}function S(t){return c=void 0,$&&o?v(t):(o=i=void 0,a)}function x(){var t=b(),n=_(t);if(o=arguments,i=this,s=t,n){if(void 0===c)return h(s);if(d)return c=setTimeout(w,e),v(s)}return void 0===c&&(c=setTimeout(w,e)),a}return e=y(e)||0,m(n)&&(f=!!n.leading,u=(d="maxWait"in n)?g(y(n.maxWait)||0,e):u,$="trailing"in n?!!n.trailing:$),x.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=s=i=c=void 0},x.flush=function(){return void 0===c?a:S(b())},x}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||a.test(t)?c(t.slice(2),n?2:8):i.test(t)?NaN:+t}t.exports=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),$(t,e,{leading:o,maxWait:e,trailing:i})}})),o("2sH7u");
//# sourceMappingURL=library.855b93a4.js.map
