import displayPage from './components/display/displayPage'
import searchWeatherApi from '../src/components/api/searchWeatherApi';

import "./style.css";

const loadingOverlay = document.querySelector('.loading');

displayPage()
searchWeatherApi()
// .then(() => setTimeout(() =>loadingOverlay.classList.remove('loading'), 5000));

// DOM Cache
const button = document.querySelector("button");
const input = document.querySelector("input");


button.addEventListener("click", handleSearchClick);

function handleSearchClick() {
  const cachedInputValue = input.value;
  input.value = '';
  searchWeatherApi(cachedInputValue);
}
