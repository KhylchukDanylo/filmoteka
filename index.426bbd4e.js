function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;function o(e,t){return function(){return e.apply(t,arguments)}}null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"7bk21":"index.426bbd4e.js","8YLc8":"437973.aea415a4.webp"}'));const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,l=(h=Object.create(null),e=>{const t=a.call(e);return h[t]||(h[t]=t.slice(8,-1).toLowerCase())});var h;const u=e=>(e=e.toLowerCase(),t=>l(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,p=d("undefined");const g=u("ArrayBuffer");const m=d("string"),_=d("function"),y=d("number"),v=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==l(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),I=u("File"),E=u("Blob"),T=u("FileList"),C=u("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}const k=(R="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>R&&e instanceof R);var R;const N=u("HTMLFormElement"),O=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),A=u("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)};var D={isArray:f,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||_(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:m,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:w,isUndefined:p,isDate:b,isFile:I,isBlob:E,isRegExp:A,isFunction:_,isStream:e=>v(e)&&_(e.pipe),isURLSearchParams:C,isTypedArray:k,isFileList:T,forEach:S,merge:function e(){const t={},n=(n,r)=>{w(t[r])&&w(n)?t[r]=e(t[r],n):w(n)?t[r]=e({},n):f(n)?t[r]=n.slice():t[r]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],n);return t},extend:(e,t,n,{allOwnKeys:r}={})=>(S(t,((t,r)=>{n&&_(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:O,hasOwnProp:O,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{const r=e[n];_(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t)};function L(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}D.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const x=L.prototype,M={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{M[e]={value:e}})),Object.defineProperties(L,M),Object.defineProperty(x,"isAxiosError",{value:!0}),L.from=(e,t,n,r,i,s)=>{const o=Object.create(x);return D.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),L.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var U,F,B,j=L,q=t("object"==typeof self?self.FormData:window.FormData);F=function(e){var t,n,r=Y(e),i=r[0],s=r[1],o=new V(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)t=H[e.charCodeAt(n)]<<18|H[e.charCodeAt(n+1)]<<12|H[e.charCodeAt(n+2)]<<6|H[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=H[e.charCodeAt(n)]<<2|H[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=H[e.charCodeAt(n)]<<10|H[e.charCodeAt(n+1)]<<4|H[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},B=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(Q(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(z[t>>2]+z[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(z[t>>10]+z[t>>4&63]+z[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var W,$,z=[],H=[],V="undefined"!=typeof Uint8Array?Uint8Array:Array,K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G=0,J=K.length;G<J;++G)z[G]=K[G],H[K.charCodeAt(G)]=G;function Y(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Q(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(z[(i=r)>>18&63]+z[i>>12&63]+z[i>>6&63]+z[63&i]);return s.join("")}H["-".charCodeAt(0)]=62,H["_".charCodeAt(0)]=63,W=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,l=c>>1,h=-7,u=n?i-1:0,d=n?-1:1,f=e[t+u];for(u+=d,s=f&(1<<-h)-1,f>>=-h,h+=a;h>0;s=256*s+e[t+u],u+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=r;h>0;o=256*o+e[t+u],u+=d,h-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=l}return(f?-1:1)*o*Math.pow(2,s-r)},$=function(e,t,n,r,i,s){var o,a,c,l=8*s-i-1,h=(1<<l)-1,u=h>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+u>=1?d/c:d*Math.pow(2,1-u))*c>=2&&(o++,c/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(t*c-1)*Math.pow(2,i),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,l+=i;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*g};const X="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;U=ee;function Z(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,ee.prototype),t}function ee(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return re(e)}return te(e,t,n)}function te(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ee.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|ae(e,t);let r=Z(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(je(e,Uint8Array)){const t=new Uint8Array(e);return se(t.buffer,t.byteOffset,t.byteLength)}return ie(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(je(e,ArrayBuffer)||e&&je(e.buffer,ArrayBuffer))return se(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(je(e,SharedArrayBuffer)||e&&je(e.buffer,SharedArrayBuffer)))return se(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return ee.from(r,t,n);const i=function(e){if(ee.isBuffer(e)){const t=0|oe(e.length),n=Z(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||qe(e.length)?Z(0):ie(e);if("Buffer"===e.type&&Array.isArray(e.data))return ie(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ee.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ne(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function re(e){return ne(e),Z(e<0?0:0|oe(e))}function ie(e){const t=e.length<0?0:0|oe(e.length),n=Z(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function se(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,ee.prototype),r}function oe(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function ae(e,t){if(ee.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||je(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ue(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Fe(e).length;default:if(i)return r?-1:Ue(e).length;t=(""+t).toLowerCase(),i=!0}}function ce(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return be(this,t,n);case"utf8":case"utf-8":return ye(this,t,n);case"ascii":return ve(this,t,n);case"latin1":case"binary":return we(this,t,n);case"base64":return _e(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ie(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function le(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function he(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),qe(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=ee.from(t,r)),ee.isBuffer(t))return 0===t.length?-1:ue(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):ue(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function ue(e,t,n,r,i){let s,o=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(l(e,s+r)!==l(t,r)){n=!1;break}if(n)return s}return-1}function de(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(qe(r))return o;e[n+o]=r}return o}function fe(e,t,n,r){return Be(Ue(t,e.length-n),e,n,r)}function pe(e,t,n,r){return Be(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function ge(e,t,n,r){return Be(Fe(t),e,n,r)}function me(e,t,n,r){return Be(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function _e(e,t,n){return 0===t&&n===e.length?B(e):B(e.slice(t,n))}function ye(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}ee.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ee.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ee.prototype,"parent",{enumerable:!0,get:function(){if(ee.isBuffer(this))return this.buffer}}),Object.defineProperty(ee.prototype,"offset",{enumerable:!0,get:function(){if(ee.isBuffer(this))return this.byteOffset}}),ee.poolSize=8192,ee.from=function(e,t,n){return te(e,t,n)},Object.setPrototypeOf(ee.prototype,Uint8Array.prototype),Object.setPrototypeOf(ee,Uint8Array),ee.alloc=function(e,t,n){return function(e,t,n){return ne(e),e<=0?Z(e):void 0!==t?"string"==typeof n?Z(e).fill(t,n):Z(e).fill(t):Z(e)}(e,t,n)},ee.allocUnsafe=function(e){return re(e)},ee.allocUnsafeSlow=function(e){return re(e)},ee.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ee.prototype},ee.compare=function(e,t){if(je(e,Uint8Array)&&(e=ee.from(e,e.offset,e.byteLength)),je(t,Uint8Array)&&(t=ee.from(t,t.offset,t.byteLength)),!ee.isBuffer(e)||!ee.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},ee.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ee.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ee.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=ee.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(je(t,Uint8Array))i+t.length>r.length?(ee.isBuffer(t)||(t=ee.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!ee.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},ee.byteLength=ae,ee.prototype._isBuffer=!0,ee.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)le(this,t,t+1);return this},ee.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)le(this,t,t+3),le(this,t+1,t+2);return this},ee.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)le(this,t,t+7),le(this,t+1,t+6),le(this,t+2,t+5),le(this,t+3,t+4);return this},ee.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?ye(this,0,e):ce.apply(this,arguments)},ee.prototype.toLocaleString=ee.prototype.toString,ee.prototype.equals=function(e){if(!ee.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ee.compare(this,e)},ee.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},X&&(ee.prototype[X]=ee.prototype.inspect),ee.prototype.compare=function(e,t,n,r,i){if(je(e,Uint8Array)&&(e=ee.from(e,e.offset,e.byteLength)),!ee.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(r,i),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},ee.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ee.prototype.indexOf=function(e,t,n){return he(this,e,t,n,!0)},ee.prototype.lastIndexOf=function(e,t,n){return he(this,e,t,n,!1)},ee.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return de(this,e,t,n);case"utf8":case"utf-8":return fe(this,e,t,n);case"ascii":case"latin1":case"binary":return pe(this,e,t,n);case"base64":return ge(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},ee.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ve(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function we(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function be(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=We[e[r]];return i}function Ie(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function Ee(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Te(e,t,n,r,i,s){if(!ee.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function Ce(e,t,n,r,i){De(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Se(e,t,n,r,i){De(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function ke(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Re(e,t,n,r,i){return t=+t,n>>>=0,i||ke(e,0,n,4),$(e,t,n,r,23,4),n+4}function Ne(e,t,n,r,i){return t=+t,n>>>=0,i||ke(e,0,n,8),$(e,t,n,r,52,8),n+8}ee.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,ee.prototype),r},ee.prototype.readUintLE=ee.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ee(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},ee.prototype.readUintBE=ee.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ee(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},ee.prototype.readUint8=ee.prototype.readUInt8=function(e,t){return e>>>=0,t||Ee(e,1,this.length),this[e]},ee.prototype.readUint16LE=ee.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ee(e,2,this.length),this[e]|this[e+1]<<8},ee.prototype.readUint16BE=ee.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ee(e,2,this.length),this[e]<<8|this[e+1]},ee.prototype.readUint32LE=ee.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ee(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ee.prototype.readUint32BE=ee.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ee(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ee.prototype.readBigUInt64LE=$e((function(e){Le(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xe(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),ee.prototype.readBigUInt64BE=$e((function(e){Le(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xe(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),ee.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ee(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},ee.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ee(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},ee.prototype.readInt8=function(e,t){return e>>>=0,t||Ee(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ee.prototype.readInt16LE=function(e,t){e>>>=0,t||Ee(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ee.prototype.readInt16BE=function(e,t){e>>>=0,t||Ee(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ee.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ee(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ee.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ee(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ee.prototype.readBigInt64LE=$e((function(e){Le(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xe(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),ee.prototype.readBigInt64BE=$e((function(e){Le(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xe(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),ee.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ee(e,4,this.length),W(this,e,!0,23,4)},ee.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ee(e,4,this.length),W(this,e,!1,23,4)},ee.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ee(e,8,this.length),W(this,e,!0,52,8)},ee.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ee(e,8,this.length),W(this,e,!1,52,8)},ee.prototype.writeUintLE=ee.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Te(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},ee.prototype.writeUintBE=ee.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Te(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},ee.prototype.writeUint8=ee.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,1,255,0),this[t]=255&e,t+1},ee.prototype.writeUint16LE=ee.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ee.prototype.writeUint16BE=ee.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ee.prototype.writeUint32LE=ee.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ee.prototype.writeUint32BE=ee.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ee.prototype.writeBigUInt64LE=$e((function(e,t=0){return Ce(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ee.prototype.writeBigUInt64BE=$e((function(e,t=0){return Se(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ee.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Te(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},ee.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Te(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},ee.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ee.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ee.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ee.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ee.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Te(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ee.prototype.writeBigInt64LE=$e((function(e,t=0){return Ce(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ee.prototype.writeBigInt64BE=$e((function(e,t=0){return Se(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ee.prototype.writeFloatLE=function(e,t,n){return Re(this,e,t,!0,n)},ee.prototype.writeFloatBE=function(e,t,n){return Re(this,e,t,!1,n)},ee.prototype.writeDoubleLE=function(e,t,n){return Ne(this,e,t,!0,n)},ee.prototype.writeDoubleBE=function(e,t,n){return Ne(this,e,t,!1,n)},ee.prototype.copy=function(e,t,n,r){if(!ee.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},ee.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!ee.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=ee.isBuffer(e)?e:ee.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const Oe={};function Ae(e,t,n){Oe[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Pe(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function De(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new Oe.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){Le(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||xe(t,e.length-(n+1))}(r,i,s)}function Le(e,t){if("number"!=typeof e)throw new Oe.ERR_INVALID_ARG_TYPE(t,"number",e)}function xe(e,t,n){if(Math.floor(e)!==e)throw Le(e,n),new Oe.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Oe.ERR_BUFFER_OUT_OF_BOUNDS;throw new Oe.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Ae("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Ae("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Ae("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Pe(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Pe(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const Me=/[^+/0-9A-Za-z-_]/g;function Ue(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Fe(e){return F(function(e){if((e=(e=e.split("=")[0]).trim().replace(Me,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Be(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function je(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function qe(e){return e!=e}const We=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function $e(e){return"undefined"==typeof BigInt?ze:e}function ze(){throw new Error("BigInt not supported")}var He=U;function Ve(e){return D.isPlainObject(e)||D.isArray(e)}function Ke(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function Ge(e,t,n){return e?e.concat(t).map((function(e,t){return e=Ke(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Je=D.toFlatObject(D,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Ye=function(e,t,n){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new(q||FormData);const r=(n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!D.isUndefined(t[e])}))).metaTokens,i=n.visitor||h,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=t)&&D.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!D.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(D.isDate(e))return e.toISOString();if(!a&&D.isBlob(e))throw new j("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(e)||D.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):He.from(e):e}function h(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(D.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(D.isArray(e)&&function(e){return D.isArray(e)&&!e.some(Ve)}(e)||D.isFileList(e)||D.endsWith(n,"[]")&&(a=D.toArray(e)))return n=Ke(n),a.forEach((function(e,r){!D.isUndefined(e)&&null!==e&&t.append(!0===o?Ge([n],r,s):null===o?n:n+"[]",l(e))})),!1;return!!Ve(e)||(t.append(Ge(i,n,s),l(e)),!1)}const u=[],d=Object.assign(Je,{defaultVisitor:h,convertValue:l,isVisitable:Ve});if(!D.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!D.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),D.forEach(n,(function(n,s){!0===(!(D.isUndefined(n)||null===n)&&i.call(t,n,D.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function Qe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Xe(e,t){this._pairs=[],e&&Ye(e,this,t)}const Ze=Xe.prototype;Ze.append=function(e,t){this._pairs.push([e,t])},Ze.toString=function(e){const t=e?function(t){return e.call(this,t,Qe)}:Qe;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var et=Xe;function tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nt(e,t,n){if(!t)return e;const r=n&&n.encode||tt,i=n&&n.serialize;let s;if(s=i?i(t,n):D.isURLSearchParams(t)?t.toString():new et(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var rt=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},it={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},st="undefined"!=typeof URLSearchParams?URLSearchParams:et,ot=FormData;const at=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})();var ct={isBrowser:!0,classes:{URLSearchParams:st,FormData:ot,Blob:Blob},isStandardBrowserEnv:at,protocols:["http","https","file","blob","url","data"]};function lt(e,t){return Ye(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ct.isNode&&D.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var ht=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&D.isArray(r)?r.length:s,a)return D.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&D.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&D.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(D.isFormData(e)&&D.isFunction(e.entries)){const n={};return D.forEachEntry(e,((e,r)=>{t(function(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};function ut(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new j("Request failed with status code "+n.status,[j.ERR_BAD_REQUEST,j.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var dt=ct.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),D.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),D.isString(r)&&o.push("path="+r),D.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ft(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function pt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?ft(e,t):t}var gt=ct.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=D.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function mt(e,t,n){j.call(this,null==e?"canceled":e,j.ERR_CANCELED,t,n),this.name="CanceledError"}D.inherits(mt,j,{__CANCEL__:!0});var _t=mt;function yt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const vt=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var wt=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&vt[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const bt=Symbol("internals"),It=Symbol("defaults");function Et(e){return e&&String(e).trim().toLowerCase()}function Tt(e){return!1===e||null==e?e:D.isArray(e)?e.map(Tt):String(e)}function Ct(e,t,n,r){return D.isFunction(r)?r.call(this,t,n):D.isString(t)?D.isString(r)?-1!==t.indexOf(r):D.isRegExp(r)?r.test(t):void 0:void 0}function St(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}function kt(e,t){e&&this.set(e),this[It]=t||null}Object.assign(kt.prototype,{set:function(e,t,n){const r=this;function i(e,t,n){const i=Et(t);if(!i)throw new Error("header name must be a non-empty string");const s=St(r,i);(!s||!0===n||!1!==r[s]&&!1!==n)&&(r[s||t]=Tt(e))}return D.isPlainObject(e)?D.forEach(e,((e,n)=>{i(e,n,t)})):i(t,e,n),this},get:function(e,t){if(!(e=Et(e)))return;const n=St(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(D.isFunction(t))return t.call(this,e,n);if(D.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=Et(e)){const n=St(this,e);return!(!n||t&&!Ct(0,this[n],n,t))}return!1},delete:function(e,t){const n=this;let r=!1;function i(e){if(e=Et(e)){const i=St(n,e);!i||t&&!Ct(0,n[i],i,t)||(delete n[i],r=!0)}}return D.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return D.forEach(this,((r,i)=>{const s=St(n,i);if(s)return t[s]=Tt(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=Tt(r),n[o]=!0})),this},toJSON:function(e){const t=Object.create(null);return D.forEach(Object.assign({},this[It]||null,this),((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&D.isArray(n)?n.join(", "):n)})),t}}),Object.assign(kt,{from:function(e){return D.isString(e)?new this(wt(e)):e instanceof this?e:new this(e)},accessor:function(e){const t=(this[bt]=this[bt]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Et(e);t[r]||(!function(e,t){const n=D.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return D.isArray(e)?e.forEach(r):r(e),this}}),kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),D.freezeMethods(kt.prototype),D.freezeMethods(kt);var Rt=kt;var Nt=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[o];i||(i=c),n[s]=a,r[s]=c;let h=o,u=0;for(;h!==s;)u+=n[h++],h%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=l&&c-l;return d?Math.round(1e3*u/d):void 0}};function Ot(e,t){let n=0;const r=Nt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0};l[t?"download":"upload"]=!0,e(l)}}function At(e){return new Promise((function(t,n){let r=e.data;const i=Rt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}D.isFormData(r)&&ct.isStandardBrowserEnv&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const l=pt(e.baseURL,e.url);function h(){if(!c)return;const r=Rt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());ut((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),nt(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(n(new j("Request aborted",j.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new j("Network Error",j.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||it;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new j(t,r.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,e,c)),c=null},ct.isStandardBrowserEnv){const t=(e.withCredentials||gt(l))&&e.xsrfCookieName&&dt.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&D.forEach(i.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),D.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Ot(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ot(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new _t(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const u=yt(l);u&&-1===ct.protocols.indexOf(u)?n(new j("Unsupported protocol "+u+":",j.ERR_BAD_REQUEST,e)):c.send(r||null)}))}const Pt={http:At,xhr:At};var Dt,Lt,xt,Mt={getAdapter:e=>{if(D.isString(e)){const t=Pt[e];if(!e)throw Error(D.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!D.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Pt},Ut=Dt={};function Ft(){throw new Error("setTimeout has not been defined")}function Bt(){throw new Error("clearTimeout has not been defined")}function jt(e){if(Lt===setTimeout)return setTimeout(e,0);if((Lt===Ft||!Lt)&&setTimeout)return Lt=setTimeout,setTimeout(e,0);try{return Lt(e,0)}catch(t){try{return Lt.call(null,e,0)}catch(t){return Lt.call(this,e,0)}}}!function(){try{Lt="function"==typeof setTimeout?setTimeout:Ft}catch(e){Lt=Ft}try{xt="function"==typeof clearTimeout?clearTimeout:Bt}catch(e){xt=Bt}}();var qt,Wt=[],$t=!1,zt=-1;function Ht(){$t&&qt&&($t=!1,qt.length?Wt=qt.concat(Wt):zt=-1,Wt.length&&Vt())}function Vt(){if(!$t){var e=jt(Ht);$t=!0;for(var t=Wt.length;t;){for(qt=Wt,Wt=[];++zt<t;)qt&&qt[zt].run();zt=-1,t=Wt.length}qt=null,$t=!1,function(e){if(xt===clearTimeout)return clearTimeout(e);if((xt===Bt||!xt)&&clearTimeout)return xt=clearTimeout,clearTimeout(e);try{xt(e)}catch(t){try{return xt.call(null,e)}catch(t){return xt.call(this,e)}}}(e)}}function Kt(e,t){this.fun=e,this.array=t}function Gt(){}Ut.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Wt.push(new Kt(e,t)),1!==Wt.length||$t||jt(Vt)},Kt.prototype.run=function(){this.fun.apply(null,this.array)},Ut.title="browser",Ut.browser=!0,Ut.env={},Ut.argv=[],Ut.version="",Ut.versions={},Ut.on=Gt,Ut.addListener=Gt,Ut.once=Gt,Ut.off=Gt,Ut.removeListener=Gt,Ut.removeAllListeners=Gt,Ut.emit=Gt,Ut.prependListener=Gt,Ut.prependOnceListener=Gt,Ut.listeners=function(e){return[]},Ut.binding=function(e){throw new Error("process.binding is not supported")},Ut.cwd=function(){return"/"},Ut.chdir=function(e){throw new Error("process.chdir is not supported")},Ut.umask=function(){return 0};const Jt={"Content-Type":"application/x-www-form-urlencoded"};const Yt={transitional:it,adapter:function(){let e;return"undefined"!=typeof XMLHttpRequest?e=Mt.getAdapter("xhr"):void 0!==Dt&&"process"===D.kindOf(Dt)&&(e=Mt.getAdapter("http")),e}(),transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=D.isObject(e);i&&D.isHTMLForm(e)&&(e=new FormData(e));if(D.isFormData(e))return r&&r?JSON.stringify(ht(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return lt(e,this.formSerializer).toString();if((s=D.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ye(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(D.isString(e))try{return(t||JSON.parse)(e),D.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Yt.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&D.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw j.from(e,j.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};D.forEach(["delete","get","head"],(function(e){Yt.headers[e]={}})),D.forEach(["post","put","patch"],(function(e){Yt.headers[e]=D.merge(Jt)}));var Qt=Yt;function Xt(e,t){const n=this||Qt,r=t||n,i=Rt.from(r.headers);let s=r.data;return D.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function Zt(e){return!(!e||!e.__CANCEL__)}function en(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _t}function tn(e){en(e),e.headers=Rt.from(e.headers),e.data=Xt.call(e,e.transformRequest);return(e.adapter||Qt.adapter)(e).then((function(t){return en(e),t.data=Xt.call(e,e.transformResponse,t),t.headers=Rt.from(t.headers),t}),(function(t){return Zt(t)||(en(e),t&&t.response&&(t.response.data=Xt.call(e,e.transformResponse,t.response),t.response.headers=Rt.from(t.response.headers))),Promise.reject(t)}))}function nn(e,t){t=t||{};const n={};function r(e,t){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge(e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}function i(n){return D.isUndefined(t[n])?D.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!D.isUndefined(t[e]))return r(void 0,t[e])}function o(n){return D.isUndefined(t[n])?D.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return D.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){const t=c[e]||i,r=t(e);D.isUndefined(r)&&t!==a||(n[e]=r)})),n}const rn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{rn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const sn={};rn.transitional=function(e,t,n){function r(e,t){return"[Axios v1.1.3] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new j(r(i," has been removed"+(t?" in "+t:"")),j.ERR_DEPRECATED);return t&&!sn[i]&&(sn[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var on={assertOptions:function(e,t,n){if("object"!=typeof e)throw new j("options must be an object",j.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new j("option "+s+" must be "+n,j.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new j("Unknown option "+s,j.ERR_BAD_OPTION)}},validators:rn};const an=on.validators;class cn{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=nn(this.defaults,t);const{transitional:n,paramsSerializer:r}=t;void 0!==n&&on.assertOptions(n,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),void 0!==r&&on.assertOptions(r,{encode:an.function,serialize:an.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const i=t.headers&&D.merge(t.headers.common,t.headers[t.method]);i&&D.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new Rt(t.headers,i);const s=[];let o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)}));let l,h=0;if(!o){const e=[tn.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,a),l=e.length,c=Promise.resolve(t);h<l;)c=c.then(e[h++],e[h++]);return c}l=s.length;let u=t;for(h=0;h<l;){const e=s[h++],t=s[h++];try{u=e(u)}catch(e){t.call(this,e);break}}try{c=tn.call(this,u)}catch(e){return Promise.reject(e)}for(h=0,l=a.length;h<l;)c=c.then(a[h++],a[h++]);return c}getUri(e){return nt(pt((e=nn(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new rt,response:new rt}}}D.forEach(["delete","get","head","options"],(function(e){cn.prototype[e]=function(t,n){return this.request(nn(n||{},{method:e,url:t,data:(n||{}).data}))}})),D.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(nn(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}cn.prototype[e]=t(),cn.prototype[e+"Form"]=t(!0)}));var ln=cn;class hn{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new hn((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new _t(e,r,i),t(n.reason))}))}}var un=hn;const dn=function e(t){const n=new ln(t),r=o(ln.prototype.request,n);return D.extend(r,ln.prototype,n,{allOwnKeys:!0}),D.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(nn(t,n))},r}(Qt);dn.Axios=ln,dn.CanceledError=_t,dn.CancelToken=un,dn.isCancel=Zt,dn.VERSION="1.1.3",dn.toFormData=Ye,dn.AxiosError=j,dn.Cancel=dn.CanceledError,dn.all=function(e){return Promise.all(e)},dn.spread=function(e){return function(t){return e.apply(null,t)}},dn.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError},dn.formToJSON=e=>ht(D.isHTMLForm(e)?new FormData(e):e);var fn=dn;const{Axios:pn,AxiosError:gn,CanceledError:mn,isCancel:_n,CancelToken:yn,VERSION:vn,all:wn,Cancel:bn,isAxiosError:In,spread:En,toFormData:Tn}=fn;var Cn=fn;async function Sn(e){const t=`https://api.themoviedb.org/3/trending/movie/week?api_key=7653694c4941db1f3bfb7af19c86b9a8&language=en-US&page=${e}`,n=await Cn(t);return console.log(n),n}async function kn(){return await Cn("https://api.themoviedb.org/3/genre/movie/list?api_key=7653694c4941db1f3bfb7af19c86b9a8")}async function Rn(e,t){const n=`https://api.themoviedb.org/3/search/movie?api_key=7653694c4941db1f3bfb7af19c86b9a8&language=en-US&query=${e}&page=${t}&include_adult=false`,r=await Cn(n);return console.log(r),r}async function Nn(e){const t=`https://api.themoviedb.org/3/movie/${e}/videos?api_key=7653694c4941db1f3bfb7af19c86b9a8&language=en-US`;return await Cn(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=!1,An=!1,Pn="${JSCORE_VERSION}",Dn=function(e,t){if(!e)throw Ln(t)},Ln=function(e){return new Error("Firebase Database ("+Pn+") INTERNAL ASSERT FAILED: "+e)},xn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Mn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,h=(3&i)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),r.push(n[l],n[h],n[u],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Un=function(e){const t=xn(e);return Mn.encodeByteArray(t,!0)},Fn=function(e){return Un(e).replace(/\./g,"")},Bn=function(e){try{return Mn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jn(e){return qn(void 0,e)}function qn(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=qn(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function $n(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wn())}function zn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Hn(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Vn(){const e=Wn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Kn(){return!0===On||!0===An}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gn=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Jn=()=>{try{return Gn()||(()=>{if(void 0===Dt||void 0===Dt.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Bn(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Yn=e=>{var t,n;return null===(n=null===(t=Jn())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Qn=e=>{const t=Yn(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Xn=e=>{var t;return null===(t=Jn())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Fn(JSON.stringify({alg:"none",type:"JWT"})),Fn(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(rr,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new tr(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const rr=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){return JSON.parse(e)}function sr(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=ir(Bn(s[0])||""),n=ir(Bn(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},ar=function(e){const t=or(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},cr=function(e){const t=or(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function hr(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ur(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function dr(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function fr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(pr(n)&&pr(s)){if(!fr(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function pr(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function _r(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):e<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+l+i+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function vr(e,t){const n=new wr(e,t);return n.subscribe.bind(n)}class wr{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=br),void 0===r.error&&(r.error=br),void 0===r.complete&&(r.complete=br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function br(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Er=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,Dn(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Tr=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cr(e){return e&&e._delegate?e._delegate:e}class Sr{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Zn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Rr{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=[];var Or,Ar;(Ar=Or||(Or={}))[Ar.DEBUG=0]="DEBUG",Ar[Ar.VERBOSE=1]="VERBOSE",Ar[Ar.INFO=2]="INFO",Ar[Ar.WARN=3]="WARN",Ar[Ar.ERROR=4]="ERROR",Ar[Ar.SILENT=5]="SILENT";const Pr={debug:Or.DEBUG,verbose:Or.VERBOSE,info:Or.INFO,warn:Or.WARN,error:Or.ERROR,silent:Or.SILENT},Dr=Or.INFO,Lr={[Or.DEBUG]:"log",[Or.VERBOSE]:"log",[Or.INFO]:"info",[Or.WARN]:"warn",[Or.ERROR]:"error"},xr=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Lr[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Mr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Or))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Pr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Or.DEBUG,...e),this._logHandler(this,Or.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Or.VERBOSE,...e),this._logHandler(this,Or.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Or.INFO,...e),this._logHandler(this,Or.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Or.WARN,...e),this._logHandler(this,Or.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Or.ERROR,...e),this._logHandler(this,Or.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Dr,this._logHandler=xr,this._userLogHandler=null,Nr.push(this)}}let Ur,Fr;const Br=new WeakMap,jr=new WeakMap,qr=new WeakMap,Wr=new WeakMap,$r=new WeakMap;let zr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return jr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||qr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Hr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fr||(Fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Gr(this),t),Kr(Br.get(this))}:function(...t){return Kr(e.apply(Gr(this),t))}:function(t,...n){const r=e.call(Gr(this),t,...n);return qr.set(r,t.sort?t.sort():[t]),Kr(r)}}function Vr(e){return"function"==typeof e?Hr(e):(e instanceof IDBTransaction&&function(e){if(jr.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));jr.set(e,t)}(e),t=e,(Ur||(Ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,zr):e);var t}function Kr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Kr(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Br.set(t,e)})).catch((()=>{})),$r.set(t,e),t}(e);if(Wr.has(e))return Wr.get(e);const t=Vr(e);return t!==e&&(Wr.set(e,t),$r.set(t,e)),t}const Gr=e=>$r.get(e);function Jr(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Kr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Kr(o.result),e.oldVersion,e.newVersion,Kr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Yr=["get","getKey","getAll","getAllKeys","count"],Qr=["put","add","delete","clear"],Xr=new Map;function Zr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Xr.get(t))return Xr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Qr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Yr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Xr.set(t,s),s}zr=(e=>({...e,get:(t,n,r)=>Zr(t,n)||e.get(t,n,r),has:(t,n)=>!!Zr(t,n)||e.has(t,n)}))(zr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ti=new Mr("@firebase/app"),ni={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ri=new Map,ii=new Map;function si(e,t){try{e.container.addComponent(t)}catch(n){ti.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function oi(e){const t=e.name;if(ii.has(t))return ti.debug(`There were multiple attempts to register component ${t}.`),!1;ii.set(t,e);for(const t of ri.values())si(t,e);return!0}function ai(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ci=new nr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Sr("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ci.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=Jn())||void 0===s?void 0:s.config),!n)throw ci.create("no-options");const o=ri.get(i);if(o){if(fr(n,o.options)&&fr(r,o.config))return o;throw ci.create("duplicate-app",{appName:i})}const a=new Rr(i);for(const e of ii.values())a.addComponent(e);const c=new li(n,r,a);return ri.set(i,c),c}function ui(e="[DEFAULT]"){const t=ri.get(e);if(!t&&"[DEFAULT]"===e)return hi();if(!t)throw ci.create("no-app",{appName:e});return t}function di(e,t,n){var r;let i=null!==(r=ni[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ti.warn(e.join(" "))}oi(new Sr(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let fi=null;function pi(){return fi||(fi=Jr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ci.create("idb-open",{originalErrorMessage:e.message})}))),fi}async function gi(e,t){var n;try{const n=(await pi()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,mi(e)),n.done}catch(e){if(e instanceof tr)ti.warn(e.message);else{const t=ci.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});ti.warn(t.message)}}}function mi(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=yi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=yi(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),wi(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Fn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vi(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function yi(){return(new Date).toISOString().substring(0,10)}class vi{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await pi()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(mi(e))}catch(e){if(e instanceof tr)ti.warn(e.message);else{const n=ci.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});ti.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return gi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return gi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function wi(e){return Fn(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bi;bi="",oi(new Sr("platform-logger",(e=>new ei(e)),"PRIVATE")),oi(new Sr("heartbeat",(e=>new _i(e)),"PRIVATE")),di("@firebase/app","0.8.3",bi),di("@firebase/app","0.8.3","esm2017"),di("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
di("firebase","9.13.0","app");function Ii(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ei(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ti=Ei,Ci=new nr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Si=new Mr("@firebase/auth");function ki(e,...t){Si.logLevel<=Or.ERROR&&Si.error(`Auth (9.13.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e,...t){throw Ai(e,...t)}function Ni(e,...t){return Ai(e,...t)}function Oi(e,t,n){const r=Object.assign(Object.assign({},Ti()),{[t]:n});return new nr("auth","Firebase",r).create(t,{appName:e.name})}function Ai(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ci.create(e,...t)}function Pi(e,t,...n){if(!e)throw Ai(t,...n)}function Di(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ki(t),new Error(t)}function Li(e,t){e||Di(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Map;function Mi(e){Li(e instanceof Function,"Expected a class definition");let t=xi.get(e);return t?(Li(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xi.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ui(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Fi(){return"http:"===Bi()||"https:"===Bi()}function Bi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Fi()||zn()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi{get(){return ji()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Li(t>e,"Short delay should be less than long delay!"),this.isMobile=$n()||Hn()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e,t){Li(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Di("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Di("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Di("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Hi=new qi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ki(e,t,n,r,i={}){return Gi(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=gr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),$i.fetch()(Yi(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Gi(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},zi),t);try{const t=new Qi(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Xi(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Xi(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Xi(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Xi(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Oi(e,a,o);Ri(e,a)}}catch(t){if(t instanceof tr)throw t;Ri(e,"network-request-failed")}}async function Ji(e,t,n,r,i={}){const s=await Ki(e,t,n,r,i);return"mfaPendingCredential"in s&&Ri(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Yi(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Wi(e.config,i):`${e.config.apiScheme}://${i}`}class Qi{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ni(this.auth,"network-request-failed"))),Hi.get())}))}}function Xi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ni(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){return 1e3*Number(e)}function ts(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const e=Bn(r);return e?JSON.parse(e):(ki("Failed to decode base64 JWT payload"),null)}catch(e){return ki("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ns(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof tr&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class rs{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ns(e,async function(e,t){return Ki(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Pi(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ii(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new is(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pi(e.idToken,"internal-error"),Pi(void 0!==e.idToken,"internal-error"),Pi(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ts(e);return Pi(t,"internal-error"),Pi(void 0!==t.exp,"internal-error"),Pi(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Pi(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Gi(e,{},(async()=>{const n=gr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Yi(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$i.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new os;return n&&(Pi("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Pi("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Pi("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return Di("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e,t){Pi("string"==typeof e||void 0===e,"internal-error",{appName:t})}class cs{async getIdToken(e){const t=await ns(this,this.stsTokenManager.getToken(this.auth,e));return Pi(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Cr(e),r=await n.getIdToken(t),i=ts(r);Pi(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zi(es(i.auth_time)),issuedAtTime:Zi(es(i.iat)),expirationTime:Zi(es(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Cr(e);await ss(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Pi(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Pi(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ss(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ns(this,async function(e,t){return Ki(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:I}=t;Pi(y&&I,e,"internal-error");const E=os.fromJSON(this.name,I);Pi("string"==typeof y,e,"internal-error"),as(h,e.name),as(u,e.name),Pi("boolean"==typeof v,e,"internal-error"),Pi("boolean"==typeof w,e,"internal-error"),as(d,e.name),as(f,e.name),as(p,e.name),as(g,e.name),as(m,e.name),as(_,e.name);const T=new cs({uid:y,auth:e,email:u,emailVerified:v,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:_});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new os;r.updateFromServerResponse(t);const i=new cs({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ss(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new is(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}ls.type="NONE";const hs=ls;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e,t,n){return`firebase:${e}:${t}:${n}`}class ds{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ds(Mi(hs),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Mi(hs);const s=us(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=cs._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ds(i,e,n)):new ds(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=us(this.userKey,r.apiKey,i),this.fullPersistenceKey=us("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_s(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ps(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vs(t))return"Blackberry";if(ws(t))return"Webos";if(gs(t))return"Safari";if((t.includes("chrome/")||ms(t))&&!t.includes("edge/"))return"Chrome";if(ys(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ps(e=Wn()){return/firefox\//i.test(e)}function gs(e=Wn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ms(e=Wn()){return/crios\//i.test(e)}function _s(e=Wn()){return/iemobile/i.test(e)}function ys(e=Wn()){return/android/i.test(e)}function vs(e=Wn()){return/blackberry/i.test(e)}function ws(e=Wn()){return/webos/i.test(e)}function bs(e=Wn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Is(){return Vn()&&10===document.documentMode}function Es(e=Wn()){return bs(e)||ys(e)||ws(e)||vs(e)||/windows phone/i.test(e)||_s(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ts(e,t=[]){let n;switch(e){case"Browser":n=fs(Wn());break;case"Worker":n=`${fs(Wn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.13.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mi(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Pi(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ss(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Cr(e):null;return t&&Pi(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Pi(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Mi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mi(e)||this._popupRedirectResolver;Pi(t,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Mi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Pi(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pi(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ts(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rs(this),this.idTokenSubscription=new Rs(this),this.beforeStateQueue=new Cs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ci,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function ks(e){return Cr(e)}class Rs{get next(){return Pi(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=vr((e=>this.observer=e))}}function Ns(e,t,n){const r=ks(e);Pi(r._canInitEmulator,r,"emulator-config-failed"),Pi(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Os(t),{host:o,port:a}=function(e){const t=Os(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:As(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:As(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Os(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function As(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ps{toJSON(){return Di("not implemented")}_getIdTokenResponse(e){return Di("not implemented")}_linkToIdToken(e,t){return Di("not implemented")}_getReauthenticationResolver(e){return Di("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(e,t){return Ki(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls extends Ps{static _fromEmailAndPassword(e,t){return new Ls(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ls(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ji(e,"POST","/v1/accounts:signInWithPassword",Vi(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ji(e,"POST","/v1/accounts:signInWithEmailLink",Vi(e,t))}(e,{email:this._email,oobCode:this._password});default:Ri(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ds(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ji(e,"POST","/v1/accounts:signInWithEmailLink",Vi(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ri(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e,t){return Ji(e,"POST","/v1/accounts:signInWithIdp",Vi(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Ps{static _fromParams(e){const t=new Ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ri("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ii(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ms(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return xs(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xs(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gr(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs extends Ps{static _fromVerification(e,t){return new Fs({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fs({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ji(e,"POST","/v1/accounts:signInWithPhoneNumber",Vi(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ji(e,"POST","/v1/accounts:signInWithPhoneNumber",Vi(e,t));if(n.temporaryProof)throw Xi(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ji(e,"POST","/v1/accounts:signInWithPhoneNumber",Vi(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Us)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Fs({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static parseLink(e){const t=function(e){const t=mr(_r(e)).link,n=t?mr(_r(t)).deep_link_id:null,r=mr(_r(e)).deep_link_id;return(r?mr(_r(r)).link:null)||r||n||t||e}(e);try{return new Bs(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=mr(_r(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Pi(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{static credential(e,t){return Ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Bs.parseLink(t);return Pi(n,"argument-error"),Ls._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=js.PROVIDER_ID}}js.PROVIDER_ID="password",js.EMAIL_PASSWORD_SIGN_IN_METHOD="password",js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends qs{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s extends Ws{static credential(e){return Ms._fromParams({providerId:$s.PROVIDER_ID,signInMethod:$s.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $s.credentialFromTaggedObject(e)}static credentialFromError(e){return $s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $s.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}$s.FACEBOOK_SIGN_IN_METHOD="facebook.com",$s.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs extends Ws{static credential(e,t){return Ms._fromParams({providerId:zs.PROVIDER_ID,signInMethod:zs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zs.credentialFromTaggedObject(e)}static credentialFromError(e){return zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zs.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}zs.GOOGLE_SIGN_IN_METHOD="google.com",zs.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs extends Ws{static credential(e){return Ms._fromParams({providerId:Hs.PROVIDER_ID,signInMethod:Hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hs.credentialFromTaggedObject(e)}static credentialFromError(e){return Hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Hs.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Hs.GITHUB_SIGN_IN_METHOD="github.com",Hs.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs extends Ws{static credential(e,t){return Ms._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Vs.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ks(e,t){return Ji(e,"POST","/v1/accounts:signUp",Vi(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vs.TWITTER_SIGN_IN_METHOD="twitter.com",Vs.PROVIDER_ID="twitter.com";class Gs{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await cs._fromIdTokenResponse(e,n,r),s=Js(n);return new Gs({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Js(n);return new Gs({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Js(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys extends tr{static _fromErrorAndOperation(e,t,n,r){return new Ys(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ys.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Qs(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ys._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(e,t,n=!1){const r=await ns(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gs._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zs(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await ns(e,Qs(i,s,t,e),n);Pi(r.idToken,i,"internal-error");const o=ts(r.idToken);Pi(o,i,"internal-error");const{sub:a}=o;return Pi(e.uid===a,i,"user-mismatch"),Gs._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&Ri(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t,n=!1){const r="signIn",i=await Qs(e,r,t),s=await Gs._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function to(e,t){return eo(ks(e),t)}async function no(e,t,n){const r=ks(e),i=await Ks(r,{returnSecureToken:!0,email:t,password:n}),s=await Gs._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ro(e,t,n){return to(Cr(e),js.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends io{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Is()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Wn();return gs(e)||bs(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Es(),this._shouldAllowMigration=!0}}so.type="LOCAL";const oo=so;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends io{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}ao.type="SESSION";const co=ao;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new lo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ho(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lo.receivers=[];class uo{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ho("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function po(){return void 0!==fo().WorkerGlobalScope&&"function"==typeof fo().importScripts}class go{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function mo(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function _o(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new go(e).toPromise()}(),t(await _o()))}))}))}async function yo(e,t,n){const r=mo(e,!0).put({fbase_key:t,value:n});return new go(r).toPromise()}function vo(e,t){const n=mo(e,!0).delete(t);return new go(n).toPromise()}class wo{async _openDb(){return this.db||(this.db=await _o()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return po()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(po()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new uo(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _o();return await yo(e,"__sak","1"),await vo(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>yo(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=mo(e,!1).get(t),r=await new go(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mo(e,!1).getAll();return new go(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}wo.type="LOCAL";const bo=wo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ni("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Eo(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Eo("rcb"),new qi(3e4,6e4);async function To(e,t,n){var r;const i=await n.verify();try{let s;if(Pi("string"==typeof i,e,"argument-error"),Pi("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Pi("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Ki(e,"POST","/v2/accounts/mfaEnrollment:start",Vi(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Pi("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Pi(n,e,"missing-multi-factor-info");const o=await function(e,t){return Ki(e,"POST","/v2/accounts/mfaSignIn:start",Vi(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ki(e,"POST","/v1/accounts:sendVerificationCode",Vi(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{verifyPhoneNumber(e,t){return To(this.auth,e,Cr(t))}static credential(e,t){return Fs._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Co.credentialFromTaggedObject(t)}static credentialFromError(e){return Co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fs._fromTokenResponse(t,n):null}constructor(e){this.providerId=Co.PROVIDER_ID,this.auth=ks(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function So(e,t){return t?Mi(t):(Pi(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Co.PROVIDER_ID="phone",Co.PHONE_SIGN_IN_METHOD="phone";class ko extends Ps{_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Ro(e){return eo(e.auth,new ko(e),e.bypassAuthState)}function No(e){const{auth:t,user:n}=e;return Pi(n,t,"internal-error"),Zs(n,new ko(e),e.bypassAuthState)}async function Oo(e){const{auth:t,user:n}=e;return Pi(n,t,"internal-error"),Xs(n,new ko(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ro;case"linkViaPopup":case"linkViaRedirect":return Oo;case"reauthViaPopup":case"reauthViaRedirect":return No;default:Ri(this.auth,"internal-error")}}resolve(e){Li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new qi(2e3,1e4);class Do extends Ao{async executeNotNull(){const e=await this.execute();return Pi(e,this.auth,"internal-error"),e}async onExecution(){Li(1===this.filter.length,"Popup operations only handle one event");const e=ho();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ni(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ni(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Po.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}}Do.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lo=new Map;class xo extends Ao{async execute(){let e=Lo.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Fo(t),r=Uo(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Mo(e,t){Lo.set(e._key(),t)}function Uo(e){return Mi(e._redirectPersistence)}function Fo(e){return us("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(e,t,n=!1){const r=ks(e),i=So(r,t),s=new xo(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class jo{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wo(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wo(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ni(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(qo(e))}saveEventToCache(e){this.cachedEventUids.add(qo(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function qo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Wo({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $o=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zo=/^https?/;async function Ho(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ki(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Vo(e))return}catch(e){}Ri(e,"unauthorized-domain")}function Vo(e){const t=Ui(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!zo.test(n))return!1;if($o.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new qi(3e4,6e4);function Go(){const e=fo().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Jo=null;function Yo(e){return Jo=Jo||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Go(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Go(),n(Ni(e,"network-request-failed"))},timeout:Ko.get()})}if(null===(i=null===(r=fo().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=fo().gapi)||void 0===s?void 0:s.load)){const t=Eo("iframefcb");return fo()[t]=()=>{gapi.load?o():n(Ni(e,"network-request-failed"))},Io(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Jo=null,e}))}(e),Jo}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new qi(5e3,15e3),Xo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ea(e){const t=e.config;Pi(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wi(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.13.0"},i=Zo.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${gr(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ta={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class na{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function ra(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ta),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Wn().toLowerCase();n&&(a=ms(l)?"_blank":n),ps(l)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Wn()){var t;return bs(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new na(null);const u=window.open(t||"",a,h);Pi(u,e,"popup-blocked");try{u.focus()}catch(e){}return new na(u)}function ia(e,t,n,r,i,s){Pi(e.config.authDomain,e,"auth-domain-config-required"),Pi(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.13.0",eventId:i};if(t instanceof qs){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ur(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ws){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Wi(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${gr(a).slice(1)}`}const sa=class{async _openPopup(e,t,n,r){var i;Li(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ra(e,ia(e,t,n,Ui(),r),ho())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=ia(e,t,n,Ui(),r),fo().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Li(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Yo(e),n=fo().gapi;return Pi(n,e,"internal-error"),t.open({where:document.body,url:ea(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xo,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ni(e,"network-request-failed"),s=fo().setTimeout((()=>{r(i)}),Qo.get());function o(){fo().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new jo(e);return t.register("authEvent",(t=>{Pi(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ri(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ho(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Es()||gs()||bs()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=co,this._completeRedirectFn=Bo,this._overrideRedirectResult=Mo}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Pi(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const aa=Xn("authIdTokenMaxAge")||300;let ca=null;var la;la="Browser",oi(new Sr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Pi(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Pi(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:la,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ts(la)},o=new Ss(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),oi(new Sr("auth-internal",(e=>{const t=ks(e.getProvider("auth").getImmediate());return new oa(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),di("@firebase/auth","0.20.11",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(la)),di("@firebase/auth","0.20.11","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),sr(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ir(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return lr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ua(t)}}catch(e){}return new da},pa=fa("localStorage"),ga=fa("sessionStorage"),ma=new Mr("@firebase/database"),_a=function(){let e=1;return function(){return e++}}(),ya=function(e){const t=Er(e),n=new yr;n.update(t);const r=n.digest();return Mn.encodeByteArray(r)},va=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=va.apply(null,r):t+="object"==typeof r?sr(r):r,t+=" "}return t};let wa=null,ba=!0;const Ia=function(e,t){Dn(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(ma.logLevel=Or.VERBOSE,wa=ma.log.bind(ma),t&&ga.set("logging_enabled",!0)):"function"==typeof e?wa=e:(wa=null,ga.remove("logging_enabled"))},Ea=function(...e){if(!0===ba&&(ba=!1,null===wa&&!0===ga.get("logging_enabled")&&Ia(!0)),wa){const t=va.apply(null,e);wa(t)}},Ta=function(e){return function(...t){Ea(e,...t)}},Ca=function(...e){const t="FIREBASE INTERNAL ERROR: "+va(...e);ma.error(t)},Sa=function(...e){const t=`FIREBASE FATAL ERROR: ${va(...e)}`;throw ma.error(t),new Error(t)},ka=function(...e){const t="FIREBASE WARNING: "+va(...e);ma.warn(t)},Ra=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Na=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Ua(e),r=Ua(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Oa=function(e,t){return e===t?0:e<t?-1:1},Aa=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+sr(t))},Pa=function(e){if("object"!=typeof e||null===e)return sr(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=sr(t[r]),n+=":",n+=Pa(e[t[r]]);return n+="}",n},Da=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function La(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const xa=function(e){Dn(!Ra(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Ma=new RegExp("^-?(0*)\\d{1,10}$"),Ua=function(e){if(Ma.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Fa=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw ka("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ba=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){ka(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ea("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ka(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Wa{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Wa.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $a=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pa.get("host:"+e)||this._host}}function Ha(e,t,n){let r;if(Dn("string"==typeof t,"typeof type must == string"),Dn("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return La(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{incrementCounter(e,t=1){lr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jn(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={},Ga={};function Ja(e){const t=e.toString();return Ka[t]||(Ka[t]=new Va),Ka[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Fa((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ya(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Kn()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xa(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&$a.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qa.forceAllow_=!0}static forceDisallow(){Qa.forceDisallow_=!0}static isAvailable(){return!Kn()&&(!!Qa.forceAllow_||!(Qa.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=sr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Un(t),r=Da(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Kn())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=sr(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ta(e),this.stats_=Ja(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Ha(t,"long_polling",e))}}class Xa{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ea("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){Kn()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ea("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Kn())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_a(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xa.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){Ea("frame writing exception"),e.stack&&Ea(e.stack),Ea(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za=null;"undefined"!=typeof MozWebSocket?Za=MozWebSocket:"undefined"!=typeof WebSocket&&(Za=WebSocket);class ec{static connectionURL_(e,t,n,r,i){const s={v:"5"};return!Kn()&&"undefined"!=typeof location&&location.hostname&&$a.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),Ha(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pa.set("previous_websocket_failure",!0);try{let e;if(Kn()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ha}/${Dt.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new Za(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ec.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Za&&!ec.forceDisallow_}static previouslyFailed(){return pa.isInMemoryStorage||!0===pa.get("previous_websocket_failure")}markConnectionHealthy(){pa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=ir(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Dn(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=sr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Da(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ta(this.connId),this.stats_=Ja(t),this.connURL=ec.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}}ec.responsesRequiredToBeHealthy=2,ec.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{static get ALL_TRANSPORTS(){return[Qa,ec]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ec&&ec.isAvailable();let n=t&&!ec.previouslyFailed();if(e.webSocketOnly&&(t||ka("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ec];else{const e=this.transports_=[];for(const t of tc.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);tc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}tc.globalTransportInitialized_=!1;class nc{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ba((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Aa("t",e),n=Aa("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Aa("t",e),n=Aa("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Aa("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Ca("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ca("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&ka("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ba((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ba((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ta("c:"+this.id+":"),this.transportManager_=new tc(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){Dn(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Dn(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends ic{static getInstance(){return new sc}getInitialEvent(e){return Dn("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||$n()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function ac(){return new oc("")}function cc(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function lc(e){return e.pieces_.length-e.pieceNum_}function hc(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new oc(e.pieces_,t)}function uc(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function dc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function fc(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new oc(t,0)}function pc(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof oc)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new oc(n,0)}function gc(e){return e.pieceNum_>=e.pieces_.length}function mc(e,t){const n=cc(e),r=cc(t);if(null===n)return t;if(n===r)return mc(hc(e),hc(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function _c(e,t){if(lc(e)!==lc(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function yc(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(lc(e)>lc(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class vc{constructor(e,t){this.errorPrefix_=t,this.parts_=dc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Tr(this.parts_[e]);wc(this)}}function wc(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+bc(e))}function bc(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends ic{static getInstance(){return new Ic}getInitialEvent(e){return Dn("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends rc{sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(sr(i)),Dn(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Zn,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Dn(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Dn(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;Ec.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&lr(e,"w")){const n=hr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();ka(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||cr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ar(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Dn(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+sr(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Ca("Unrecognized action received from server: "+sr(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Dn(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ec.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){Dn(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?Ea("getToken() completed but was canceled"):(Ea("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new nc(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{ka(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&ka(e),a())}}}interrupt(e){Ea("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ea("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ur(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Pa(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new oc(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Ea("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ea("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Kn()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ha.replace(/\./g,"-")]=1,$n()?e["framework.cordova"]=1:Hn()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sc.getInstance().currentlyOnline();return ur(this.interruptReasons_)&&e}constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ec.nextPersistentConnectionId_++,this.log_=Ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Kn())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ic.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&sc.getInstance().on("online",this.onOnline_,this)}}Ec.nextPersistentConnectionId_=0,Ec.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{static Wrap(e,t){return new Tc(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Tc("[MIN_NAME]",e),r=new Tc("[MIN_NAME]",t);return 0!==this.compare(n,r)}minPost(){return Tc.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;class kc extends Cc{static get __EMPTY_NODE(){return Sc}static set __EMPTY_NODE(e){Sc=e}compare(e,t){return Na(e.name,t.name)}isDefinedOn(e){throw Ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Tc.MIN}maxPost(){return new Tc("[MAX_NAME]",Sc)}makePost(e,t){return Dn("string"==typeof e,"KeyIndex indexValue must always be a string."),new Tc(e,Sc)}toString(){return".key"}}const Rc=new kc;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Oc{copy(e,t,n,r,i){return new Oc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ac.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ac.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Oc.RED,this.left=null!=r?r:Ac.EMPTY_NODE,this.right=null!=i?i:Ac.EMPTY_NODE}}Oc.RED=!0,Oc.BLACK=!1;class Ac{insert(e,t){return new Ac(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Oc.BLACK,null,null))}remove(e){return new Ac(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oc.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nc(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Ac.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pc(e,t){return Na(e.name,t.name)}function Dc(e,t){return Na(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;Ac.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Oc(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const xc=function(e){return"number"==typeof e?"number:"+xa(e):"string:"+e},Mc=function(e){if(e.isLeafNode()){const t=e.val();Dn("string"==typeof t||"number"==typeof t||"object"==typeof t&&lr(t,".sv"),"Priority must be a string or number.")}else Dn(e===Lc||e.isEmpty(),"priority of unexpected type.");Dn(e===Lc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Uc,Fc,Bc;class jc{static set __childrenNodeConstructor(e){Uc=e}static get __childrenNodeConstructor(){return Uc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:jc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return gc(e)?this:".priority"===cc(e)?this.priorityNode_:jc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:jc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=cc(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Dn(".priority"!==n||1===lc(e),".priority must be the last token in a path"),this.updateImmediateChild(n,jc.__childrenNodeConstructor.EMPTY_NODE.updateChild(hc(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?xa(this.value_):this.value_,this.lazyHash_=ya(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jc.__childrenNodeConstructor?-1:(Dn(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=jc.VALUE_TYPE_ORDER.indexOf(t),i=jc.VALUE_TYPE_ORDER.indexOf(n);return Dn(r>=0,"Unknown leaf type: "+t),Dn(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=jc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Dn(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Mc(this.priorityNode_)}}jc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const qc=new class extends Cc{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Na(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Tc.MIN}maxPost(){return new Tc("[MAX_NAME]",new jc("[PRIORITY-POST]",Bc))}makePost(e,t){const n=Fc(e);return new Tc(t,new jc("[PRIORITY-POST]",n))}toString(){return".priority"}},Wc=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Wc,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}}const zc=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Oc(a,o.node,Oc.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),h=i(c+1,r);return o=e[c],a=n?n(o):o,new Oc(a,o.node,Oc.BLACK,l,h)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),h=e[s],u=n?n(h):h;c(new Oc(u,h.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Oc.BLACK):(a(r,Oc.BLACK),a(r,Oc.RED))}return s}(new $c(e.length));return new Ac(r||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc;const Vc={};class Kc{static get Default(){return Dn(Vc&&qc,"ChildrenNode.ts has not been loaded"),Hc=Hc||new Kc({".priority":Vc},{".priority":qc}),Hc}get(e){const t=hr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ac?t:null}hasIndex(e){return lr(this.indexSet_,e.toString())}addIndex(e,t){Dn(e!==Rc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Tc.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?zc(n,e.getCompare()):Vc;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new Kc(l,c)}addToIndexes(e,t){const n=dr(this.indexes_,((n,r)=>{const i=hr(this.indexSet_,r);if(Dn(i,"Missing index implementation for "+r),n===Vc){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Tc.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),zc(n,i.getCompare())}return Vc}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Tc(e.name,r))),i.insert(e,e.node)}}));return new Kc(n,this.indexSet_)}removeFromIndexes(e,t){const n=dr(this.indexes_,(n=>{if(n===Vc)return n;{const r=t.get(e.name);return r?n.remove(new Tc(e.name,r)):n}}));return new Kc(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc;class Jc{static get EMPTY_NODE(){return Gc||(Gc=new Jc(new Ac(Dc),null,Kc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gc}updatePriority(e){return this.children_.isEmpty()?this:new Jc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Gc:t}}getChild(e){const t=cc(e);return null===t?this:this.getImmediateChild(t).getChild(hc(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Dn(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Tc(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Gc:this.priorityNode_;return new Jc(r,s,i)}}updateChild(e,t){const n=cc(e);if(null===n)return t;{Dn(".priority"!==cc(e)||1===lc(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(hc(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(qc,((s,o)=>{t[s]=o.val(e),n++,i&&Jc.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+xc(this.getPriority().val())+":"),this.forEachChild(qc,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ya(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Tc(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Tc(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Tc(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Tc.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Tc.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yc?-1:0}withIndex(e){if(e===Rc||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Jc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Rc||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(qc),n=t.getIterator(qc);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Rc?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Mc(this.priorityNode_),this.children_.isEmpty()&&Dn(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Jc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Yc=new class extends Jc{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Jc.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Ac(Dc),Jc.EMPTY_NODE,Kc.Default)}};Object.defineProperties(Tc,{MIN:{value:new Tc("[MIN_NAME]",Jc.EMPTY_NODE)},MAX:{value:new Tc("[MAX_NAME]",Yc)}}),kc.__EMPTY_NODE=Jc.EMPTY_NODE,jc.__childrenNodeConstructor=Jc,Lc=Yc,function(e){Bc=e}(Yc);function Qc(e,t=null){if(null===e)return Jc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Dn(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new jc(e,Qc(t))}if(e instanceof Array){let n=Jc.EMPTY_NODE;return La(e,((t,r)=>{if(lr(e,t)&&"."!==t.substring(0,1)){const e=Qc(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Qc(t))}{const n=[];let r=!1;if(La(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Qc(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Tc(e,i)))}})),0===n.length)return Jc.EMPTY_NODE;const i=zc(n,Pc,(e=>e.name),Dc);if(r){const e=zc(n,qc.getCompare());return new Jc(i,Qc(t),new Kc({".priority":e},{".priority":qc}))}return new Jc(i,Qc(t),Kc.Default)}}!function(e){Fc=e}(Qc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc extends Cc{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Na(e.name,t.name):i}makePost(e,t){const n=Qc(e),r=Jc.EMPTY_NODE.updateChild(this.indexPath_,n);return new Tc(t,r)}maxPost(){const e=Jc.EMPTY_NODE.updateChild(this.indexPath_,Yc);return new Tc("[MAX_NAME]",e)}toString(){return dc(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Dn(!gc(e)&&".priority"!==cc(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new class extends Cc{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Na(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Tc.MIN}maxPost(){return Tc.MAX}makePost(e,t){const n=Qc(e);return new Tc(t,n)}toString(){return".value"}},el="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tl(e){return{type:"value",snapshotNode:e}}function nl(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function rl(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function il(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Dn(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Dn(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Dn(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Dn(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Dn(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qc}copy(){const e=new sl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qc}}function ol(e){const t={};if(e.isDefault())return t;let n;return e.index_===qc?n="$priority":e.index_===Zc?n="$value":e.index_===Rc?n="$key":(Dn(e.index_ instanceof Xc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=sr(n),e.startSet_&&(t.startAt=sr(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+sr(e.indexStartName_))),e.endSet_&&(t.endAt=sr(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+sr(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function al(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==qc&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends rc{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Dn(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=cl.getListenId_(e,n),o={};this.listens_[s]=o;const a=ol(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),hr(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=cl.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ol(e._queryParams),n=e._path.toString(),r=new Zn;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+gr(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ir(o.responseText)}catch(e){ka("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&ka("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ta("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Jc.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return{value:null,children:new Map}}function ul(e,t,n){if(gc(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=cc(t);e.children.has(r)||e.children.set(r,hl());ul(e.children.get(r),t=hc(t),n)}}function dl(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{dl(r,new oc(t.toString()+"/"+e),n)}))}class fl{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&La(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;La(e,((e,r)=>{r>0&&lr(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Ba(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new fl(e);const n=1e4+2e4*Math.random();Ba(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gl,ml;function _l(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ml=gl||(gl={}))[ml.OVERWRITE=0]="OVERWRITE",ml[ml.MERGE=1]="MERGE",ml[ml.ACK_USER_WRITE=2]="ACK_USER_WRITE",ml[ml.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class yl{operationForChild(e){if(gc(this.path)){if(null!=this.affectedTree.value)return Dn(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new oc(e));return new yl(ac(),t,this.revert)}}return Dn(cc(this.path)===e,"operationForChild called for unrelated child."),new yl(hc(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=gl.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl{operationForChild(e){return gc(this.path)?new vl(this.source,ac(),this.snap.getImmediateChild(e)):new vl(this.source,hc(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=gl.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{operationForChild(e){if(gc(this.path)){const t=this.children.subtree(new oc(e));return t.isEmpty()?null:t.value?new vl(this.source,ac(),t.value):new wl(this.source,ac(),t)}return Dn(cc(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wl(this.source,hc(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=gl.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(gc(e))return this.isFullyInitialized()&&!this.filtered_;const t=cc(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ln("Should only compare child_ events.");const r=new Tc(t.childName,t.snapshotNode),i=new Tc(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function El(e,t){return{eventCache:e,serverCache:t}}function Tl(e,t,n,r){return El(new bl(t,n,r),e.serverCache)}function Cl(e,t,n,r){return El(e.eventCache,new bl(t,n,r))}function Sl(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function kl(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class Nl{static fromObject(e){let t=new Nl(null);return La(e,((e,n)=>{t=t.set(new oc(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ac(),value:this.value};if(gc(e))return null;{const n=cc(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(hc(e),t);if(null!=i){return{path:pc(new oc(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(gc(e))return this;{const t=cc(e),n=this.children.get(t);return null!==n?n.subtree(hc(e)):new Nl(null)}}set(e,t){if(gc(e))return new Nl(t,this.children);{const n=cc(e),r=(this.children.get(n)||new Nl(null)).set(hc(e),t),i=this.children.insert(n,r);return new Nl(this.value,i)}}remove(e){if(gc(e))return this.children.isEmpty()?new Nl(null):new Nl(null,this.children);{const t=cc(e),n=this.children.get(t);if(n){const r=n.remove(hc(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Nl(null):new Nl(this.value,i)}return this}}get(e){if(gc(e))return this.value;{const t=cc(e),n=this.children.get(t);return n?n.get(hc(e)):null}}setTree(e,t){if(gc(e))return t;{const n=cc(e),r=(this.children.get(n)||new Nl(null)).setTree(hc(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Nl(this.value,i)}}fold(e){return this.fold_(ac(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(pc(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ac(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(gc(e))return null;{const r=cc(e),i=this.children.get(r);return i?i.findOnPath_(hc(e),pc(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ac(),t)}foreachOnPath_(e,t,n){if(gc(e))return this;{this.value&&n(t,this.value);const r=cc(e),i=this.children.get(r);return i?i.foreachOnPath_(hc(e),pc(t,r),n):new Nl(null)}}foreach(e){this.foreach_(ac(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(pc(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Rl||(Rl=new Ac(Oa)),Rl))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{static empty(){return new Ol(new Nl(null))}constructor(e){this.writeTree_=e}}function Al(e,t,n){if(gc(t))return new Ol(new Nl(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=mc(i,t);return s=s.updateChild(o,n),new Ol(e.writeTree_.set(i,s))}{const r=new Nl(n),i=e.writeTree_.setTree(t,r);return new Ol(i)}}}function Pl(e,t,n){let r=e;return La(n,((e,n)=>{r=Al(r,pc(t,e),n)})),r}function Dl(e,t){if(gc(t))return Ol.empty();{const n=e.writeTree_.setTree(t,new Nl(null));return new Ol(n)}}function Ll(e,t){return null!=xl(e,t)}function xl(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(mc(n.path,t)):null}function Ml(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(qc,((e,n)=>{t.push(new Tc(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Tc(e,n.value))})),t}function Ul(e,t){if(gc(t))return e;{const n=xl(e,t);return new Ol(null!=n?new Nl(n):e.writeTree_.subtree(t))}}function Fl(e){return e.writeTree_.isEmpty()}function Bl(e,t){return jl(ac(),e.writeTree_,t)}function jl(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(Dn(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=jl(pc(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(pc(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(e,t){return eh(t,e)}function Wl(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Dn(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&$l(t,r.path)?i=!1:yc(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=Hl(e.allWrites,zl,ac()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Dl(e.visibleWrites,r.path);else{La(r.children,(t=>{e.visibleWrites=Dl(e.visibleWrites,pc(r.path,t))}))}return!0}return!1}function $l(e,t){if(e.snap)return yc(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&yc(pc(e.path,n),t))return!0;return!1}function zl(e){return e.visible}function Hl(e,t,n){let r=Ol.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)yc(n,e)?(t=mc(n,e),r=Al(r,t,s.snap)):yc(e,n)&&(t=mc(e,n),r=Al(r,ac(),s.snap.getChild(t)));else{if(!s.children)throw Ln("WriteRecord should have .snap or .children");if(yc(n,e))t=mc(n,e),r=Pl(r,t,s.children);else if(yc(e,n))if(t=mc(e,n),gc(t))r=Pl(r,ac(),s.children);else{const e=hr(s.children,cc(t));if(e){const n=e.getChild(hc(t));r=Al(r,ac(),n)}}}}}return r}function Vl(e,t,n,r,i){if(r||i){const s=Ul(e.visibleWrites,t);if(!i&&Fl(s))return n;if(i||null!=n||Ll(s,ac())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(yc(e.path,t)||yc(t,e.path))};return Bl(Hl(e.allWrites,s,t),n||Jc.EMPTY_NODE)}return null}{const r=xl(e.visibleWrites,t);if(null!=r)return r;{const r=Ul(e.visibleWrites,t);if(Fl(r))return n;if(null!=n||Ll(r,ac())){return Bl(r,n||Jc.EMPTY_NODE)}return null}}}function Kl(e,t,n,r){return Vl(e.writeTree,e.treePath,t,n,r)}function Gl(e,t){return function(e,t,n){let r=Jc.EMPTY_NODE;const i=xl(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(qc,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Ul(e.visibleWrites,t);return n.forEachChild(qc,((e,t)=>{const n=Bl(Ul(i,new oc(e)),t);r=r.updateImmediateChild(e,n)})),Ml(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Ml(Ul(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Jl(e,t,n,r){return function(e,t,n,r,i){Dn(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=pc(t,n);if(Ll(e.visibleWrites,s))return null;{const t=Ul(e.visibleWrites,s);return Fl(t)?i.getChild(n):Bl(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Yl(e,t){return function(e,t){return xl(e.visibleWrites,t)}(e.writeTree,pc(e.treePath,t))}function Ql(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const c=Ul(e.visibleWrites,t),l=xl(c,ac());if(null!=l)a=l;else{if(null==n)return[];a=Bl(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Xl(e,t,n){return function(e,t,n,r){const i=pc(t,n),s=xl(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Bl(Ul(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Zl(e,t){return eh(pc(e.treePath,t),e.writeTree)}function eh(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{trackChildChange(e){const t=e.type,n=e.childName;Dn("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Dn(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,il(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,rl(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,nl(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Ln("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,il(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class rh{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new bl(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xl(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:kl(this.viewCache_),i=Ql(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e,t,n,r,i){const s=new th;let o,a;if(n.type===gl.OVERWRITE){const c=n;c.source.fromUser?o=ah(e,t,c.path,c.snap,r,i,s):(Dn(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!gc(c.path),o=oh(e,t,c.path,c.snap,r,i,a,s))}else if(n.type===gl.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,c)=>{const l=pc(n,r);ch(t,cc(l))&&(a=ah(e,a,l,c,i,s,o))})),r.foreach(((r,c)=>{const l=pc(n,r);ch(t,cc(l))||(a=ah(e,a,l,c,i,s,o))})),a}(e,t,c.path,c.children,r,i,s):(Dn(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=hh(e,t,c.path,c.children,r,i,a,s))}else if(n.type===gl.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Yl(r,n))return t;{const a=new rh(r,t,i),c=t.eventCache.getNode();let l;if(gc(n)||".priority"===cc(n)){let n;if(t.serverCache.isFullyInitialized())n=Kl(r,kl(t));else{const e=t.serverCache.getNode();Dn(e instanceof Jc,"serverChildren would be complete if leaf node"),n=Gl(r,e)}l=e.filter.updateFullNode(c,n,s)}else{const i=cc(n);let h=Xl(r,i,t.serverCache);null==h&&t.serverCache.isCompleteForChild(i)&&(h=c.getImmediateChild(i)),l=null!=h?e.filter.updateChild(c,i,h,hc(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,Jc.EMPTY_NODE,hc(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Kl(r,kl(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Yl(r,ac()),Tl(t,l,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Yl(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(gc(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return oh(e,t,n,c.getNode().getChild(n),i,s,a,o);if(gc(n)){let r=new Nl(null);return c.getNode().forEachChild(Rc,((e,t)=>{r=r.set(new oc(e),t)})),hh(e,t,n,r,i,s,a,o)}return t}{let l=new Nl(null);return r.foreach(((e,t)=>{const r=pc(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),hh(e,t,n,l,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==gl.LISTEN_COMPLETE)throw Ln("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=Cl(t,s.getNode(),s.isFullyInitialized()||gc(n),s.isFiltered());return sh(e,o,n,r,nh,i)}(e,t,n.path,r,s)}const c=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Sl(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(tl(Sl(t)))}}(t,o,c),{viewCache:o,changes:c}}function sh(e,t,n,r,i,s){const o=t.eventCache;if(null!=Yl(r,n))return t;{let a,c;if(gc(n))if(Dn(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=kl(t),i=Gl(r,n instanceof Jc?n:Jc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=Kl(r,kl(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=cc(n);if(".priority"===l){Dn(1===lc(n),"Can't have a priority with additional path components");const i=o.getNode();c=t.serverCache.getNode();const s=Jl(r,n,i,c);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const h=hc(n);let u;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Jl(r,n,o.getNode(),c);u=null!=e?o.getNode().getImmediateChild(l).updateChild(h,e):o.getNode().getImmediateChild(l)}else u=Xl(r,l,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),l,u,h,i,s):o.getNode()}}return Tl(t,a,o.isFullyInitialized()||gc(n),e.filter.filtersNodes())}}function oh(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(gc(n))l=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=h.updateFullNode(c.getNode(),e,null)}else{const e=cc(n);if(!c.isCompleteForPath(n)&&lc(n)>1)return t;const i=hc(n),s=c.getNode().getImmediateChild(e).updateChild(i,r);l=".priority"===e?h.updatePriority(c.getNode(),s):h.updateChild(c.getNode(),e,s,i,nh,null)}const u=Cl(t,l,c.isFullyInitialized()||gc(n),h.filtersNodes());return sh(e,u,n,i,new rh(i,u,s),a)}function ah(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const h=new rh(i,t,s);if(gc(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=Tl(t,l,!0,e.filter.filtersNodes());else{const i=cc(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Tl(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=hc(n),l=a.getNode().getImmediateChild(i);let u;if(gc(s))u=r;else{const e=h.getCompleteChild(i);u=null!=e?".priority"===uc(s)&&e.getChild(fc(s)).isEmpty()?e:e.updateChild(s,r):Jc.EMPTY_NODE}if(l.equals(u))c=t;else{c=Tl(t,e.filter.updateChild(a.getNode(),i,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ch(e,t){return e.eventCache.isCompleteForChild(t)}function lh(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function hh(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=gc(n)?r:new Nl(null).setTree(n,r);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(h.hasChild(n)){const c=lh(0,t.serverCache.getNode().getImmediateChild(n),r);l=oh(e,l,new oc(n),c,i,s,o,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!h.hasChild(n)&&!c){const c=lh(0,t.serverCache.getNode().getImmediateChild(n),r);l=oh(e,l,new oc(n),c,i,s,o,a)}})),l}function uh(e,t){const n=kl(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!gc(t)&&!n.getImmediateChild(cc(t)).isEmpty())?n.getChild(t):null}function dh(e,t,n,r){t.type===gl.MERGE&&null!==t.source.queryId&&(Dn(kl(e.viewCache_),"We should always have a full cache before handling merges"),Dn(Sl(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ih(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,Dn(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Dn(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Dn(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,fh(e,s.changes,s.viewCache.eventCache.getNode(),null)}function fh(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Il(e,i,"child_removed",t,r,n),Il(e,i,"child_added",t,r,n),Il(e,i,"child_moved",s,r,n),Il(e,i,"child_changed",t,r,n),Il(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ph,gh;function mh(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Dn(null!=s,"SyncTree gave us an op for an invalid query."),dh(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(dh(s,t,n,r));return i}}function _h(e,t){let n=null;for(const r of e.views.values())n=n||uh(r,t);return n}class yh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Nl(null),this.pendingWriteTree_={visibleWrites:Ol.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vh(e,t,n,r,i){return function(e,t,n,r,i){Dn(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Al(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Th(e,new vl({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function wh(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Wl(e.pendingWriteTree_,t)){let t=new Nl(null);return null!=r.snap?t=t.set(ac(),!0):La(r.children,(e=>{t=t.set(new oc(e),!0)})),Th(e,new yl(r.path,t,n))}return[]}function bh(e,t,n){return Th(e,new vl({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ih(e,t,n,r){const i=kh(e,r);if(null!=i){const r=Rh(i),s=r.path,o=r.queryId,a=mc(s,t);return Nh(e,s,new vl(_l(o),a,n))}return[]}function Eh(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=_h(n,mc(e,t));if(r)return r}));return Vl(r,t,i,n,!0)}function Th(e,t){return Ch(t,e.syncPointTree_,null,ql(e.pendingWriteTree_,ac()))}function Ch(e,t,n,r){if(gc(e.path))return Sh(e,t,n,r);{const i=t.get(ac());null==n&&null!=i&&(n=_h(i,ac()));let s=[];const o=cc(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Zl(r,o);s=s.concat(Ch(a,c,e,t))}return i&&(s=s.concat(mh(i,e,r,n))),s}}function Sh(e,t,n,r){const i=t.get(ac());null==n&&null!=i&&(n=_h(i,ac()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Zl(r,t),c=e.operationForChild(t);c&&(s=s.concat(Sh(c,i,o,a)))})),i&&(s=s.concat(mh(i,e,r,n))),s}function kh(e,t){return e.tagToQueryMap.get(t)}function Rh(e){const t=e.indexOf("$");return Dn(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new oc(e.substr(0,t))}}function Nh(e,t,n){const r=e.syncPointTree_.get(t);Dn(r,"Missing sync point for query tag that we're tracking");return mh(r,n,ql(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Oh(t)}node(){return this.node_}constructor(e){this.node_=e}}class Ah{getImmediateChild(e){const t=pc(this.path_,e);return new Ah(this.syncTree_,t)}node(){return Eh(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Ph=function(e,t,n){return e&&"object"==typeof e?(Dn(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Dh(e[".sv"],t,n):"object"==typeof e[".sv"]?Lh(e[".sv"],t):void Dn(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Dh=function(e,t,n){if("timestamp"===e)return n.timestamp;Dn(!1,"Unexpected server value: "+e)},Lh=function(e,t,n){e.hasOwnProperty("increment")||Dn(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Dn(!1,"Unexpected increment value: "+r);const i=t.node();if(Dn(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},xh=function(e,t,n,r){return Uh(t,new Ah(n,e),r)},Mh=function(e,t,n){return Uh(e,new Oh(t),n)};function Uh(e,t,n){const r=e.getPriority().val(),i=Ph(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Ph(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new jc(s,Qc(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new jc(i))),r.forEachChild(qc,((e,r)=>{const i=Uh(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Bh(e,t){let n=t instanceof oc?t:new oc(t),r=e,i=cc(n);for(;null!==i;){const e=hr(r.node.children,i)||{children:{},childCount:0};r=new Fh(i,r,e),n=hc(n),i=cc(n)}return r}function jh(e){return e.node.value}function qh(e,t){e.node.value=t,Vh(e)}function Wh(e){return e.node.childCount>0}function $h(e,t){La(e.node.children,((n,r)=>{t(new Fh(n,e,r))}))}function zh(e,t,n,r){n&&!r&&t(e),$h(e,(e=>{zh(e,t,!0,r)})),n&&r&&t(e)}function Hh(e){return new oc(null===e.parent?e.name:Hh(e.parent)+"/"+e.name)}function Vh(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===jh(e)&&!Wh(e)}(n),i=lr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Vh(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Vh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Kh=/[\[\].#$\/\u0000-\u001F\u007F]/,Gh=/[\[\].#$\u0000-\u001F\u007F]/,Jh=function(e){return"string"==typeof e&&0!==e.length&&!Kh.test(e)},Yh=function(e){return"string"==typeof e&&0!==e.length&&!Gh.test(e)},Qh=function(e,t,n,r){r&&void 0===t||Xh(Ir(e,"value"),t,n)},Xh=function(e,t,n){const r=n instanceof oc?new vc(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+bc(r));if("function"==typeof t)throw new Error(e+"contains a function "+bc(r)+" with contents = "+t.toString());if(Ra(t))throw new Error(e+"contains "+t.toString()+" "+bc(r));if("string"==typeof t&&t.length>10485760/3&&Tr(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+bc(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(La(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Jh(t)))throw new Error(e+" contains an invalid key ("+t+") "+bc(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Tr(a),wc(o),Xh(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Tr(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+bc(r)+" in addition to actual children.")}},Zh=function(e,t,n,r){if(!(r&&void 0===n||Yh(n)))throw new Error(Ir(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},eu=function(e,t){if(".info"===cc(t))throw new Error(e+" failed = Can't modify data under /.info/")},tu=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Jh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Yh(e)}(n))throw new Error(Ir(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ru(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||_c(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function iu(e,t,n){ru(e,n),su(e,(e=>yc(e,t)||yc(t,e)))}function su(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(ou(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ou(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();wa&&Ea("event: "+n.toString()),Fa(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hl(),this.transactionQueueTree_=new Fh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function cu(e,t,n){if(e.stats_=Ja(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new cl(e.repoInfo_,((t,n,r,i)=>{uu(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>du(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{sr(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ec(e.repoInfo_,t,((t,n,r,i)=>{uu(e,t,n,r,i)}),(t=>{du(e,t)}),(t=>{!function(e,t){La(t,((t,n)=>{fu(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ga[n]||(Ga[n]=t()),Ga[n]}(e.repoInfo_,(()=>new pl(e.stats_,e.server_))),e.infoData_=new ll,e.infoSyncTree_=new yh({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=bh(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),fu(e,"connected",!1),e.serverSyncTree_=new yh({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);iu(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function lu(e){const t=e.infoData_.getNode(new oc(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function hu(e){return(t=(t={timestamp:lu(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function uu(e,t,n,r,i){e.dataUpdateCount++;const s=new oc(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=dr(n,(e=>Qc(e)));o=function(e,t,n,r){const i=kh(e,r);if(i){const r=Rh(i),s=r.path,o=r.queryId,a=mc(s,t),c=Nl.fromObject(n);return Nh(e,s,new wl(_l(o),a,c))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Qc(n);o=Ih(e.serverSyncTree_,s,t,i)}else if(r){const t=dr(n,(e=>Qc(e)));o=function(e,t,n){const r=Nl.fromObject(n);return Th(e,new wl({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Qc(n);o=bh(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=bu(e,s)),iu(e.eventQueue_,a,o)}function du(e,t){fu(e,"connected",t),!1===t&&function(e){_u(e,"onDisconnectEvents");const t=hu(e),n=hl();dl(e.onDisconnect_,ac(),((r,i)=>{const s=xh(r,i,e.serverSyncTree_,t);ul(n,r,s)}));let r=[];dl(n,ac(),((t,n)=>{r=r.concat(bh(e.serverSyncTree_,t,n));const i=Su(e,t);bu(e,i)})),e.onDisconnect_=hl(),iu(e.eventQueue_,ac(),r)}(e)}function fu(e,t,n){const r=new oc("/.info/"+t),i=Qc(n);e.infoData_.updateSnapshot(r,i);const s=bh(e.infoSyncTree_,r,i);iu(e.eventQueue_,r,s)}function pu(e){return e.nextWriteId_++}function gu(e,t,n,r,i){_u(e,"set",{path:t.toString(),value:n,priority:r});const s=hu(e),o=Qc(n,r),a=Eh(e.serverSyncTree_,t),c=Mh(o,a,s),l=pu(e),h=vh(e.serverSyncTree_,t,c,l,!0);ru(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||ka("set at "+t+" failed: "+n);const o=wh(e.serverSyncTree_,l,!s);iu(e.eventQueue_,t,o),yu(e,i,n,r)}));const u=Su(e,t);bu(e,u),iu(e.eventQueue_,u,[])}function mu(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function _u(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ea(n,...t)}function yu(e,t,n,r){t&&Fa((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function vu(e,t,n){return Eh(e.serverSyncTree_,t,n)||Jc.EMPTY_NODE}function wu(e,t=e.transactionQueueTree_){if(t||Cu(e,t),jh(t)){const n=Eu(e,t);Dn(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=vu(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];Dn(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=mc(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(r=>{_u(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(wh(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Cu(e,Bh(e.transactionQueueTree_,t)),wu(e,e.transactionQueueTree_),iu(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Fa(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{ka("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}bu(e,t)}}),o)}(e,Hh(t),n)}else Wh(t)&&$h(t,(t=>{wu(e,t)}))}function bu(e,t){const n=Iu(e,t),r=Hh(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=mc(n,c.path);let h,u=!1;if(Dn(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)u=!0,h=c.abortReason,i=i.concat(wh(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)u=!0,h="maxretry",i=i.concat(wh(e.serverSyncTree_,c.currentWriteId,!0));else{const n=vu(e,c.path,s);c.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Xh("transaction failed: Data returned ",r,c.path);let t=Qc(r);"object"==typeof r&&null!=r&&lr(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=hu(e),l=Mh(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=pu(e),s.splice(s.indexOf(o),1),i=i.concat(vh(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),i=i.concat(wh(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",i=i.concat(wh(e.serverSyncTree_,c.currentWriteId,!0))}iu(e.eventQueue_,n,i),i=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;Cu(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Fa(r[e]);wu(e,e.transactionQueueTree_)}(e,Eu(e,n),r),r}function Iu(e,t){let n,r=e.transactionQueueTree_;for(n=cc(t);null!==n&&void 0===jh(r);)r=Bh(r,n),n=cc(t=hc(t));return r}function Eu(e,t){const n=[];return Tu(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Tu(e,t,n){const r=jh(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);$h(t,(t=>{Tu(e,t,n)}))}function Cu(e,t){const n=jh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,qh(t,n.length>0?n:void 0)}$h(t,(t=>{Cu(e,t)}))}function Su(e,t){const n=Hh(Iu(e,t)),r=Bh(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{ku(e,t)})),ku(e,r),zh(r,(t=>{ku(e,t)})),n}function ku(e,t){const n=jh(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Dn(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Dn(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(wh(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?qh(t,void 0):n.length=s+1,iu(e.eventQueue_,Hh(t),i);for(let e=0;e<r.length;e++)Fa(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=function(e,t){const n=Nu(e),r=n.namespace;"firebase.com"===n.domain&&Sa(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Sa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ka("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new za(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new oc(n.pathString)}},Nu=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ka(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{get key(){return gc(this._path)?null:uc(this._path)}get ref(){return new Au(this._repo,this._path)}get _queryIdentifier(){const e=al(this._queryParams),t=Pa(e);return"{}"===t?"default":t}get _queryObject(){return al(this._queryParams)}isEqual(e){if(!((e=Cr(e))instanceof Ou))return!1;const t=this._repo===e._repo,n=_c(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}}class Au extends Ou{get parent(){const e=fc(this._path);return null===e?null:new Au(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new sl,!1)}}function Pu(e,t){return(e=Cr(e))._checkNotDeleted("ref"),void 0!==t?Du(e._root,t):e._root}function Du(e,t){var n,r,i,s;return null===cc((e=Cr(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Zh(n,r,i,s)):Zh("child","path",t,!1),new Au(e._repo,pc(e._path,t))}function Lu(e,t){e=Cr(e),eu("set",e._path),Qh("set",t,e._path,!1);const n=new Zn;return gu(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}!function(e){Dn(!ph,"__referenceConstructor has already been defined"),ph=e}(Au),function(e){Dn(!gh,"__referenceConstructor has already been defined"),gh=e}(Au);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xu={};let Mu=!1;function Uu(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Sa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ea("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Ru(s,i),l=c.repoInfo;void 0!==Dt&&Dt.env&&(a=Dt.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Ru(s,i),l=c.repoInfo):o=!c.repoInfo.secure;const h=i&&o?new Wa(Wa.OWNER):new qa(e.name,e.options,t);tu("Invalid Firebase Database URL",c),gc(c.path)||Sa("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,r){let i=xu[t.name];i||(i={},xu[t.name]=i);let s=i[e.toURLString()];s&&Sa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new au(e,Mu,n,r),i[e.toURLString()]=s,s}(l,e,h,new ja(e.name,n));return new Fu(u,e)}class Fu{get _repo(){return this._instanceStarted||(cu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Au(this._repo,ac())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=xu[t];n&&n[e.key]===e||Sa(`Database ${t}(${e.repoInfo_}) has already been deleted.`),mu(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Sa("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function Bu(e=ui(),t){const n=ai(e,"database").getImmediate({identifier:t}),r=Qn("database");return r&&function(e,t,n,r={}){(e=Cr(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Sa("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Sa('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Wa(Wa.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:er(r.mockUserToken,e.app.options.projectId);s=new Wa(t)}!function(e,t,n,r){e.repoInfo_=new za(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}(i,t,n,s)}(n,...r),n}Ec.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ec.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ha="9.13.0",oi(new Sr("database",((e,{instanceIdentifier:t})=>Uu(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),di("@firebase/database","0.13.10",e),di("@firebase/database","0.13.10","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const ju=hi({apiKey:"AIzaSyD4R5ow53nXeGgXQPCsfLs6LgP-O91YSD8",authDomain:"filmoteka-24046.firebaseapp.com",databaseURL:"https://filmoteka-24046-default-rtdb.firebaseio.com",projectId:"filmoteka-24046",storageBucket:"filmoteka-24046.appspot.com",messagingSenderId:"292791059964",appId:"1:292791059964:web:64f61222f9751e8cb25e79",measurementId:"G-VKQT91CF12"}),qu=function(e=ui()){const t=ai(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ai(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(fr(n.getOptions(),null!=t?t:{}))return e;Ri(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:sa,persistence:[bo,oo,co]}),r=Xn("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>aa)return;const r=null==t?void 0:t.token;ca!==r&&(ca=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Cr(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Cr(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Yn("auth");return s&&Ns(n,`http://${s}`),n}(ju),Wu=(Bu(ju),document.querySelector(".button__auth__login")),$u=document.querySelector(".button__auth__logout"),zu=document.querySelector(".button__auth__register"),Hu=document.querySelector("input"),Vu=document.querySelector(".form__auth"),Ku=document.querySelector(".test");function Gu(e){return expression=/^[^@]+@\w+(\.\w+)+\w$/,!0===expression.test(e)}function Ju(e){return!(e<6)}Wu.addEventListener("click",(function(e){if(e.preventDefault(),email=document.querySelector(".input__auth__email").value,password=document.querySelector(".input__auth__password").value,!1===Gu(email)||!1===Ju(password))return void alert("Email or Password is wrong!!");ro(qu,email,password).then((()=>{Vu.classList.add("visually-hidden"),alert("User logged in!"),alert("This email is already used!")})).catch((e=>{alert(error_message)}))})),zu.addEventListener("click",(function(e){if(e.preventDefault(),email=document.querySelector(".input__auth__email").value,password=document.querySelector(".input__auth__password").value,fullName=document.querySelector(".input__auth__name").value,!1===Gu(email)||!1===Ju(password))return void alert("Email or Password is wrong!!");if(!1===function(e){if(null===e)return!1;return!(e.length<=0)}(fullName))return void alert("One or More Extra Fields is wrong!");no(qu,email,password).then((e=>{const t=e.user;Lu(Pu(Bu(),"users/"+t.uid),{email:email,fullName:fullName,lastLogin:Date.now()}).then((()=>{Vu.classList.add("visually-hidden"),alert("User Created!!")})).catch((e=>{alert(error_message)}))}))})),Hu.addEventListener("input",Gu),$u.addEventListener("click",(function(){(e=qu,Cr(e).signOut()).then((()=>{Wu.classList.remove("visually-hidden"),$u.classList.add("visually-hidden")})).catch((e=>{e.code;const t=e.message;alert(t)}));var e})),Ku.addEventListener("click",(function(e){e.preventDefault(),Vu.classList.remove("visually-hidden")})),window.addEventListener("keydown",(function e(t){if("Escape"!==t.key)return;Vu.classList.add("visually-hidden"),window.removeEventListener("keydown",e)}));const Yu=document.querySelector(".trailer__backdrop"),Qu=(document.querySelector(".trailer__modal"),document.querySelector(".movie")),Xu=document.querySelector(".trailer__frame");Qu.addEventListener("click",(function(e){if(!e.target.closest(".show-trailer"))return;Nn(e.target.closest("a").id).then((e=>Zu(e)))}));const Zu=e=>{return t=e.data.results[0].key,Yu.classList.toggle("is-hidden"),Yu.addEventListener("click",ed),void(Xu.src=`https://www.youtube.com/embed/${t}`);var t};function ed(e){e.target===Yu&&(Yu.classList.toggle("is-hidden"),Yu.removeEventListener("click",ed),Xu.src="")}var td;td=new URL(s("kyEFX").resolve("8YLc8"),import.meta.url).toString();document.querySelector("#search-form"),document.querySelector("#search-box"),document.querySelector(".test");const nd=document.querySelector(".movie"),rd=document.querySelector(".container");document.querySelector(".pagination-list");rd.offsetWidth;let id=[];!async function(e){await Sn(1).then((({data:e,data:{results:t}})=>{id=[],t.forEach((e=>{const t={id:e.id,poster:e.poster_path,title:e.original_title,genres:e.genre_ids,year:e.release_date.slice(0,4)};console.log(1),id.push(t)}))})).catch((e=>console.log(e))),await kn().then((e=>{const{data:{genres:t}}=e;id.forEach((e=>{switch(e.genres=e.genres.map((e=>(t.forEach((t=>{t.id===e&&(e=t.name)})),e))),!0){case e.genres.length>0&&e.genres.length<=2:e.genres=e.genres.join(", ");break;case e.genres.length>2:e.genres[2]="Other",e.genres=e.genres.slice(0,3).join(", ");break;default:e.genres="N/A"}}))})).catch((e=>console.log(e))),nd.innerHTML=id.map((({id:e,poster:n,title:r,genres:i,year:s})=>`<li class="movie__card">\n  <a href="#" class="movie__link" id="${e}">\n    <picture>\n      <source\n        media="(min-width:1200px)"\n        \n        srcset="${n?`https://image.tmdb.org/t/p/w500${n}`:t(td)}"\n        type="image/jpeg"\n      />\n      <source\n        media="(min-width:768px)"\n        srcset="${n?`https://image.tmdb.org/t/p/w342/${n}`:t(td)}"\n        type="image/jpeg"\n      />\n      <source\n        media="(max-width:767px)"\n        \n        srcset="${n?`https://image.tmdb.org/t/p/w342/${n}`:t(td)}"\n        type="image/jpeg"\n      />\n\n      <img\n        class="movie-image"\n        src="${n?`https://image.tmdb.org/t/p/w500/${n}`:t(td)}"\n        loading="lazy"\n        alt="${r}"\n        width="395"\n        height="574"\n      />\n    </picture>\n<div class="movie__text"><h3 class="movie__name">${r}</h3>\n<p class="gallery__text" data-id="${e}">${i} | ${s}</p></div>\n    \n  </a>\n</li>`)).join("")}();const sd=document.querySelector("#search-form"),od=document.querySelector("#search-box"),ad=document.querySelector(".movie");let cd=[];sd.addEventListener("submit",(function(e){e.preventDefault(),async function(e){const n=od.value.trim();if(!n)return void console.log("enter movie to search");function r(e){const n=e.map((({id:e,poster:n,title:r,genres:i,year:s})=>`<li class="movie__card">\n            <a href="#" class="movie__link" id="${e}">\n              <picture>\n                <source\n                  media="(min-width:1200px)"\n                  \n                  srcset="${n?`https://image.tmdb.org/t/p/w500${n}`:t(td)}"\n                  type="image/jpeg"\n                />\n                <source\n                  media="(min-width:768px)"\n                  srcset="${n?`https://image.tmdb.org/t/p/w342/${n}`:t(td)}"\n                  type="image/jpeg"\n                />\n                <source\n                  media="(max-width:767px)"\n                  \n                  srcset="${n?`https://image.tmdb.org/t/p/w342/${n}`:t(td)}"\n                  type="image/jpeg"\n                />\n          \n                <img\n                  class="movie-image"\n                  src="${n?`https://image.tmdb.org/t/p/w500/${n}`:t(td)}"\n                  loading="lazy"\n                  alt="${r}"\n                  width="395"\n                  height="574"\n                />\n              </picture>\n          <div class="movie__text"><h3 class="movie__name">${r}</h3>\n          <p class="gallery__text" data-id="${e}">${i} | ${s}</p></div>\n              \n            </a>\n          </li>`)).join("");ad.innerHTML=n}await Rn(n,1).then((e=>{const{data:t,data:{results:n}}=e;0===n.length?sd.reset():(cd=[],n.forEach((e=>{let t={id:e.id,poster:e.poster_path,title:e.original_title,genres:e.genre_ids,year:e.release_date.slice(0,4)};cd.push(t)})))})).catch((e=>console.log(e))),await kn().then((e=>{const{data:{genres:t}}=e;cd.forEach((e=>{switch(e.genres=e.genres.map((e=>(t.forEach((t=>{t.id===e&&(e=t.name)})),e))),!0){case e.genres.length>0&&e.genres.length<=2:e.genres=e.genres.join(", ");break;case e.genres.length>2:e.genres[2]="Other",e.genres=e.genres.slice(0,3).join(", ");break;default:e.genres="N/A"}}))})).catch((e=>console.log(e))),r(cd)}()}));
//# sourceMappingURL=index.426bbd4e.js.map
