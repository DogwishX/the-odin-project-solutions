import Element from '../element';

function today() {
  const todayDiv = new Element('div', 'today', 'section');
  const todaysForecastH2 = new Element('h2', 'todays-forecast', '.today');
  const location = new Element('p', 'location', '.today');
  const date = new Element('p', 'date', '.today');
  const time = new Element('p', 'time', '.today');
  const temperatureSelector = new Element('p', 'temperature', '.today');
  const weatherIcon = new Element('img', 'weather-icon', '.today');
  const searchBar = new Element('input', 'search-bar', '.today');
  const searchButton = new Element('button', 'search-btn', '.today', 'Search');

}

export default today;