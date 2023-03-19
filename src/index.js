import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const search = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

search.addEventListener('input', evt => {
  evt.preventDefault();
  fetchCountries()
    .then(countries => renderCountriesList(countries))
    .catch(error => console.log(error));
});

function fetchCountries() {
  return fetch(
    'https://restcountries.com/v3.1/name/pol?fields=name,capital,population,flags,languages'
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
