function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("2aMrB",(function(e,r){t(e.exports,"refs",(function(){return n}));const n={movieList:document.querySelector(".movie"),trailerFrame:document.querySelector(".trailer__frame"),teamModalButton:document.querySelector(".footer__button"),contributorsModal:document.querySelector(".contributors__modal"),contributorsBackdrop:document.querySelector(".contributors__backdrop"),btnLogin:document.querySelector(".button__auth__login"),btnLogOut:document.querySelector(".button__auth__logout"),btnRegister:document.querySelector(".button__auth__register"),input:document.querySelector("input"),formAuth:document.querySelector(".form__auth"),btnLoginGlobal:document.querySelector(".auth__login-logout"),btnMyLibrary:document.querySelector(".header__link"),createQueue:document.querySelector(".movie__btn-queue"),createWatched:document.querySelector(".movie__btn-watched"),watchedBtn:document.querySelectorAll("#watched"),queueBtn:document.querySelectorAll("#queue"),movieBackdrop:document.querySelector(".backdrop"),filterForm:document.querySelector(".filters__form"),container:document.querySelector(".container"),openFilterByGenresBtn:document.querySelector(".filters__genres-button"),openFilterByYearsBtn:document.querySelector(".filters__years-button"),genresForm:document.querySelector(".genres__form"),yearsForm:document.querySelector(".years__form"),clearFiltersButton:document.querySelector(".filters__button--clear"),lowerValueInput:document.querySelector(".lower-value"),higerValueInput:document.querySelector(".higher-value"),rangeValues:document.querySelector(".range-values"),logoFromHeader:document.querySelector(".link-logo"),logoFromFixedHeader:document.querySelector(".logo-link__fixed"),logoFromLibrarysHeader:document.querySelector(".logo__link"),logoFromLibrarysFixedHeader:document.querySelector(".logo__link--fixed"),containerEl:document.querySelector(".container"),notFoundPage:document.querySelector(".not-found-page"),modalAuthBackdrop:document.querySelector(".modal-auth__backdrop"),inputName:document.querySelector(".input__auth__name"),inputEmail:document.querySelector(".input__auth__email"),inputPassword:document.querySelector(".input__auth__password"),movieModal:document.querySelector(".movie__modal"),lastCardLink:document.querySelector(".cta"),formEl:document.querySelector("#search-form"),trailerBackdrop:document.querySelector(".trailer-backdrop"),addFilterBtn:document.querySelector(".add__filter"),formFilter:document.querySelector(".filters")}})),o.register("2nhTy",(function(e,r){t(e.exports,"paginationList",(function(){return u})),t(e.exports,"containerEl",(function(){return i})),t(e.exports,"CURRENT_PAGE",(function(){return c})),t(e.exports,"TOTAL_PAGES",(function(){return a})),t(e.exports,"CURRENT_STATE",(function(){return l})),t(e.exports,"MOVIE_TO_SEARCH",(function(){return s})),t(e.exports,"setTargetPage",(function(){return _})),t(e.exports,"addPagination",(function(){return b}));var n=o("3vGNy");const u=document.querySelector(".pagination-list"),i=document.querySelector(".container"),c="paginationCurrentPage",a="paginationTotalPages",l="paginationCurrentState",s="paginationMovieToSearch",d=`<button type="button" class="pagination-button pagination-button__arrow arrow-to-start-button-js">${n.leftArrowIcon}</button>`,f=`<button type="button" class="pagination-button pagination-button__arrow arrow-to-end-button-js">${n.rightArrowIcon}</button>`,m='<div class="pagination-dots">...</div>',p=t=>`<button type="button" class="pagination-button pagination-button__page--current">${t}</button>`,g=t=>`<button type="button" class="pagination-button pagination-button__page">${t}</button>`;function y({screenWidth:t,currentPage:e,totalPages:r}){return t<480?function(t,e){if(t===e)return r(t);if(t===e-1)return`${r(t)} ${g(t+1)} ${f}`;if(t===e-2)return`${r(t)} ${g(t+1)} ${g(t+2)} ${f}`;if(t===e-3)return`${r(t)} ${g(t+1)} ${g(t+2)} ${f}`;if(t<e-3)return`${r(t)} ${g(t+1)} ${g(t+2)} ${f}`;function r(t){switch(t){case 1:return`${p(1)}`;case 2:return`${d} ${g(1)} ${p(2)}`;case 3:return`${d} ${g(1)} ${g(2)} ${p(3)}`;default:return`${d} ${g(t-2)} ${g(t-1)} ${p(t)}`}}}(e,r):function(t,e){if(t===e)return r(t);if(t===e-1)return`${r(t)} ${g(t+1)} ${f}`;if(t===e-2)return`${r(t)} ${g(t+1)} ${g(t+2)} ${f}`;if(t===e-3)return`${r(t)} ${g(t+1)} ${g(t+2)} ${g(t+3)} ${f}`;if(t<e-3)return`${r(t)} ${g(t+1)} ${g(t+2)} ${m} ${g(e)} ${f}`;function r(t){switch(t){case 1:return`${p(1)}`;case 2:return`${d} ${g(1)} ${p(2)}`;case 3:return`${d} ${g(1)} ${g(2)} ${p(3)}`;case 4:return`${d} ${g(1)} ${g(2)} ${g(3)} ${p(4)}`;default:return`${d} ${g(1)} ${m} ${g(t-2)} ${g(t-1)} ${p(t)}`}}}(e,r)}function _(t,e){return t.closest("button").classList.contains("arrow-to-start-button-js")?e-1:t.closest("button").classList.contains("arrow-to-end-button-js")?e+1:Number(t.closest("button").textContent)}function b({screenWidth:t,currentPage:e,totalPages:r}){!function(t){u.innerHTML=t}(y({screenWidth:t,currentPage:e,totalPages:r}))}})),o.register("3vGNy",(function(e,r){t(e.exports,"leftArrowIcon",(function(){return n})),t(e.exports,"rightArrowIcon",(function(){return o}));const n='<svg class=\'pagination-icon\' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.333" d="M12.667 8H3.333M8 12.667 3.333 8 8 3.333"/></svg>',o='<svg class=\'pagination-icon\' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.333" d="M3.333 8h9.334M8 12.667 12.667 8 8 3.333"/></svg>'})),o.register("9OeKo",(function(t,r){var n="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(t,e,r){var o,u,i,c,a,l,s=0,d=!1,f=!1,y=!0;if("function"!=typeof t)throw new TypeError(n);function $(e){var r=o,n=u;return o=u=void 0,s=e,c=t.apply(n,r)}function h(t){return s=t,a=setTimeout(q,e),d?$(t):c}function S(t){var r=t-l;return void 0===l||r>=e||r<0||f&&t-s>=i}function q(){var t=g();if(S(t))return v(t);a=setTimeout(q,function(t){var r=e-(t-l);return f?p(r,i-(t-s)):r}(t))}function v(t){return a=void 0,y&&o?$(t):(o=u=void 0,c)}function w(){var t=g(),r=S(t);if(o=arguments,u=this,l=t,r){if(void 0===a)return h(l);if(f)return a=setTimeout(q,e),$(l)}return void 0===a&&(a=setTimeout(q,e)),c}return e=b(e)||0,_(r)&&(d=!!r.leading,i=(f="maxWait"in r)?m(b(r.maxWait)||0,e):i,y="trailing"in r?!!r.trailing:y),w.cancel=function(){void 0!==a&&clearTimeout(a),s=0,o=l=u=a=void 0},w.flush=function(){return void 0===a?c:v(g())},w}function _(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(_(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=i.test(t);return r||c.test(t)?a(t.slice(2),r?2:8):u.test(t)?NaN:+t}t.exports=function(t,e,r){var o=!0,u=!0;if("function"!=typeof t)throw new TypeError(n);return _(r)&&(o="leading"in r?!!r.leading:o,u="trailing"in r?!!r.trailing:u),y(t,e,{leading:o,maxWait:e,trailing:u})}}));
//# sourceMappingURL=library.1d6b0a09.js.map
