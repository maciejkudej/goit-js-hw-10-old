const n=document.querySelector("#search-box"),e=document.querySelector(".country-list");n.addEventListener("input",(n=>{n.preventDefault(),fetch("https://restcountries.com/v3.1/name/pol?fields=name,capital,population,flags,languages").then((n=>{if(!n.ok)throw new Error(n.status);return n.json()})).then((n=>function(n){const t=n.map((n=>`\n          <li>\n            <p><b>Name</b>: ${n.name.official}</p>\n            <p><b>Capital</b>: ${n.capital}</p>\n            <p><b>Population</b>: ${n.population}</p>\n            <p><b>Flag</b>: ${n.flags.svg}</p>\n            <p><b>Languages</b>: ${n.languages}</p>\n          </li>\n      `)).join("");e.innerHTML=t}(n))).catch((n=>console.log(n)))}));
//# sourceMappingURL=index.f7132c43.js.map