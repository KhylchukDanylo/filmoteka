!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("h0wt5",(function(e,n){t(e.exports,"refs",(function(){return r}));const r={movieList:document.querySelector(".movie"),trailerFrame:document.querySelector(".trailer__frame"),teamModalButton:document.querySelector(".footer__button"),contributorsModal:document.querySelector(".contributors__modal"),contributorsBackdrop:document.querySelector(".contributors__backdrop"),btnLogin:document.querySelector(".button__auth__login"),btnLogOut:document.querySelector(".button__auth__logout"),btnRegister:document.querySelector(".button__auth__register"),input:document.querySelector("input"),formAuth:document.querySelector(".form__auth"),btnLoginGlobal:document.querySelector(".auth__login-logout"),btnMyLibrary:document.querySelector(".header__link"),createQueue:document.querySelector(".movie__btn-queue"),createWatched:document.querySelector(".movie__btn-watched"),watchedBtn:document.querySelectorAll("#watched"),queueBtn:document.querySelectorAll("#queue"),movieBackdrop:document.querySelector(".backdrop"),filterForm:document.querySelector(".filters__form"),container:document.querySelector(".container"),openFilterByGenresBtn:document.querySelector(".filters__genres-button"),openFilterByYearsBtn:document.querySelector(".filters__years-button"),genresForm:document.querySelector(".genres__form"),yearsForm:document.querySelector(".years__form"),clearFiltersButton:document.querySelector(".filters__button--clear"),lowerValueInput:document.querySelector(".lower-value"),higerValueInput:document.querySelector(".higher-value"),rangeValues:document.querySelector(".range-values"),logoFromHeader:document.querySelector(".link-logo"),logoFromFixedHeader:document.querySelector(".logo-link__fixed"),logoFromLibrarysHeader:document.querySelector(".logo__link"),logoFromLibrarysFixedHeader:document.querySelector(".logo__link--fixed"),containerEl:document.querySelector(".container"),notFoundPage:document.querySelector(".not-found-page"),modalAuthBackdrop:document.querySelector(".modal-auth__backdrop"),inputName:document.querySelector(".input__auth__name"),inputEmail:document.querySelector(".input__auth__email"),inputPassword:document.querySelector(".input__auth__password"),movieModal:document.querySelector(".movie__modal"),trailerBackdrop:document.querySelector(".trailer-backdrop")}})),o.register("jcFG7",(function(e,n){t(e.exports,"paginationList",(function(){return u})),t(e.exports,"containerEl",(function(){return i})),t(e.exports,"CURRENT_PAGE",(function(){return c})),t(e.exports,"TOTAL_PAGES",(function(){return a})),t(e.exports,"CURRENT_STATE",(function(){return l})),t(e.exports,"MOVIE_TO_SEARCH",(function(){return s})),t(e.exports,"setTargetPage",(function(){return b})),t(e.exports,"addPagination",(function(){return y}));var r=o("fnjO1");const u=document.querySelector(".pagination-list"),i=document.querySelector(".container"),c="paginationCurrentPage",a="paginationTotalPages",l="paginationCurrentState",s="paginationMovieToSearch",d=`<button type="button" class="pagination-button pagination-button__arrow arrow-to-start-button-js">${r.leftArrowIcon}</button>`,f=`<button type="button" class="pagination-button pagination-button__arrow arrow-to-end-button-js">${r.rightArrowIcon}</button>`,p='<div class="pagination-dots">...</div>',g=t=>`<button type="button" class="pagination-button pagination-button__page--current">${t}</button>`,m=t=>`<button type="button" class="pagination-button pagination-button__page">${t}</button>`;function _({screenWidth:t,currentPage:e,totalPages:n}){return t<480?function(t,e){if(t===e)return n(t);if(t===e-1)return`${n(t)} ${m(t+1)} ${f}`;if(t===e-2)return`${n(t)} ${m(t+1)} ${m(t+2)} ${f}`;if(t===e-3)return`${n(t)} ${m(t+1)} ${m(t+2)} ${f}`;if(t<e-3)return`${n(t)} ${m(t+1)} ${m(t+2)} ${f}`;function n(t){switch(t){case 1:return`${g(1)}`;case 2:return`${d} ${m(1)} ${g(2)}`;case 3:return`${d} ${m(1)} ${m(2)} ${g(3)}`;default:return`${d} ${m(t-2)} ${m(t-1)} ${g(t)}`}}}(e,n):function(t,e){if(t===e)return n(t);if(t===e-1)return`${n(t)} ${m(t+1)} ${f}`;if(t===e-2)return`${n(t)} ${m(t+1)} ${m(t+2)} ${f}`;if(t===e-3)return`${n(t)} ${m(t+1)} ${m(t+2)} ${m(t+3)} ${f}`;if(t<e-3)return`${n(t)} ${m(t+1)} ${m(t+2)} ${p} ${m(e)} ${f}`;function n(t){switch(t){case 1:return`${g(1)}`;case 2:return`${d} ${m(1)} ${g(2)}`;case 3:return`${d} ${m(1)} ${m(2)} ${g(3)}`;case 4:return`${d} ${m(1)} ${m(2)} ${m(3)} ${g(4)}`;default:return`${d} ${m(1)} ${p} ${m(t-2)} ${m(t-1)} ${g(t)}`}}}(e,n)}function b(t,e){return t.closest("button").classList.contains("arrow-to-start-button-js")?e-1:t.closest("button").classList.contains("arrow-to-end-button-js")?e+1:Number(t.closest("button").textContent)}function y({screenWidth:t,currentPage:e,totalPages:n}){!function(t){u.innerHTML=t}(_({screenWidth:t,currentPage:e,totalPages:n}))}})),o.register("fnjO1",(function(e,n){t(e.exports,"leftArrowIcon",(function(){return r})),t(e.exports,"rightArrowIcon",(function(){return o}));const r='<svg class=\'pagination-icon\' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.333" d="M12.667 8H3.333M8 12.667 3.333 8 8 3.333"/></svg>',o='<svg class=\'pagination-icon\' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.333" d="M3.333 8h9.334M8 12.667 12.667 8 8 3.333"/></svg>'})),o.register("dCfNN",(function(t,n){var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),f=Object.prototype.toString,p=Math.max,g=Math.min,m=function(){return d.Date.now()};function _(t,e,n){var o,u,i,c,a,l,s=0,d=!1,f=!1,_=!0;if("function"!=typeof t)throw new TypeError(r);function $(e){var n=o,r=u;return o=u=void 0,s=e,c=t.apply(r,n)}function h(t){return s=t,a=setTimeout(q,e),d?$(t):c}function S(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-s>=i}function q(){var t=m();if(S(t))return v(t);a=setTimeout(q,function(t){var n=e-(t-l);return f?g(n,i-(t-s)):n}(t))}function v(t){return a=void 0,_&&o?$(t):(o=u=void 0,c)}function w(){var t=m(),n=S(t);if(o=arguments,u=this,l=t,n){if(void 0===a)return h(l);if(f)return a=setTimeout(q,e),$(l)}return void 0===a&&(a=setTimeout(q,e)),c}return e=y(e)||0,b(n)&&(d=!!n.leading,i=(f="maxWait"in n)?p(y(n.maxWait)||0,e):i,_="trailing"in n?!!n.trailing:_),w.cancel=function(){void 0!==a&&clearTimeout(a),s=0,o=l=u=a=void 0},w.flush=function(){return void 0===a?c:v(m())},w}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||c.test(t)?a(t.slice(2),n?2:8):u.test(t)?NaN:+t}t.exports=function(t,e,n){var o=!0,u=!0;if("function"!=typeof t)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,u="trailing"in n?!!n.trailing:u),_(t,e,{leading:o,maxWait:e,trailing:u})}}))}();
//# sourceMappingURL=library.956f5903.js.map
