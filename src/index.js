import { fetchCountries } from '../src/fetchCountries.js';
import Notiflix from 'notiflix';
import './css/styles.css';

Notiflix.Notify.init({
  width: '280px',
  position: 'left-top',
  distance: '70px',
  timeout: 2000,
});

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');
const search = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

search.addEventListener(
  'input',
  debounce(evt => {
    evt.preventDefault();
    let searchValue = evt.target.value;
    fetchCountries(searchValue.trim())
      .then(countries => renderCountriesList(countries))
      .catch(error => console.log(error));
  }, DEBOUNCE_DELAY)
);

function renderCountriesList(countries) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (countries.length > 1) {
    const markup = countries
      .map(country => {
        return `
          <li class="country-item">
          <p class="country-item__flag"><img src="${country.flags.svg}" alt="Country flag" height="24"></p>
            <p class="country-item__name">${country.name.official}</p>
          </li>
      `;
      })
      .join('');
    countryList.innerHTML = markup;
  } else {
    const markup = countries
      .map(country => {
        return `
        <div class="country-card">
        <p class="country-card__flag">
        <img src="${country.flags.svg}" alt="Country flag" height="48"></p>
        <p class="country-card__name">${country.name.official}</p>
        </div>
          <p><b>Capital</b>: ${country.capital}</p>
          <p><b>Population</b>: ${country.population}</p>
          <p><b>Languages</b>: ${Object.values(country.languages)}</p>
    `;
      })
      .join('');
    countryInfo.innerHTML = markup;
  }
}
