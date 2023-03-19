import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');
const search = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

search.addEventListener(
  'input',
  debounce(evt => {
    evt.preventDefault();
    console.log(evt.target.value);
    let searchValue = evt.target.value;
    fetchCountries(searchValue)
      .then(countries => renderCountriesList(countries))
      .catch(error => console.log(error));
  }, DEBOUNCE_DELAY)
);

function fetchCountries(countryName) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderCountriesList(countries) {
  const markup = countries
    .map(country => {
      return `
          <li>
            <p><b>Name</b>: ${country.name.official}</p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Flag</b>: ${country.flags.svg}</p>
            <p><b>Languages</b>: ${country.languages}</p>
          </li>
      `;
    })
    .join('');
  countryList.innerHTML = markup;
}
