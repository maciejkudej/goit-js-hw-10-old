import Notiflix from 'notiflix';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function fetchCountries(countryName) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  ).then(response => {
    console.log(response.status);
    if (response.status == 404) {
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
      throw new Error(response.status);
    } else if (!response.ok) {
      throw new Error(response.status);
    } else return response.json();
  });
}
