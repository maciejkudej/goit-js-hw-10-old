var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,p=Math.min,b=function(){return c.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function d(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var u=i.test(t);return u||r.test(t)?a(t.slice(2),u?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,a,u,f,c=0,l=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,r=i;return o=i=void 0,c=e,a=t.apply(r,n)}function h(t){return c=t,u=setTimeout($,e),l?m(t):a}function j(t){var n=t-f;return void 0===f||n>=e||n<0||g&&t-c>=r}function $(){var t=b();if(j(t))return w(t);u=setTimeout($,function(t){var n=e-(t-f);return g?p(n,r-(t-c)):n}(t))}function w(t){return u=void 0,y&&o?m(t):(o=i=void 0,a)}function T(){var t=b(),n=j(t);if(o=arguments,i=this,f=t,n){if(void 0===u)return h(f);if(g)return u=setTimeout($,e),m(f)}return void 0===u&&(u=setTimeout($,e)),a}return e=d(e)||0,v(n)&&(l=!!n.leading,r=(g="maxWait"in n)?s(d(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?a:w(b())},T};const g=document.querySelector("#search-box"),y=document.querySelector(".country-list");g.addEventListener("input",e((t=>{t.preventDefault(),console.log(t.target.value);let e=t.target.value;var n;(n=e,fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((t=>function(t){const e=t.map((t=>`\n          <li>\n            <p><b>Name</b>: ${t.name.official}</p>\n            <p><b>Capital</b>: ${t.capital}</p>\n            <p><b>Population</b>: ${t.population}</p>\n            <p><b>Flag</b>: ${t.flags.svg}</p>\n            <p><b>Languages</b>: ${t.languages}</p>\n          </li>\n      `)).join("");y.innerHTML=e}(t))).catch((t=>console.log(t)))}),300));
//# sourceMappingURL=index.3e6b2153.js.map
