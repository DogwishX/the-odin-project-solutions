import displayResult from "../display/displayResult";

// Data related
const countries = require("../../data/countries.json");

async function searchWeatherApi(inputValue = "dublin, ie") {
  try {
    const currentData = await fetchCurrentData(inputValue);
    const fullForecastData = await fetchFullForecastData(currentData);

    let weeklyData = cleanData(fullForecastData);
 
    return displayResult(currentData, fullForecastData, weeklyData, countries);
  } catch (error) {
    return console.log("Ooops!", error);
  }
}
async function fetchCurrentData(inputValue) {
  return (
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=8c1ae38c1f691f86ab506d5f47eecb0a`
    )
  ).json();
}

async function fetchFullForecastData(currentData) {
  return (
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude=alerts&units=metric&appid=8c1ae38c1f691f86ab506d5f47eecb0a`
    )
  ).json();
}

function cleanData(forecastData) {
  return forecastData.daily.map((day) => {
    let date = new Date(day.dt * 1000);
    let nameOfDay = date.toLocaleDateString("en-EN", { weekday: "long" });
    let getDate = date.getDate();
    let maxTemp = day.temp.max;
    let minTemp = day.temp.min;
    let weather = day.weather[0].main;

    return { date: getDate, nameOfDay, maxTemp, minTemp, weather };
  });
}

export default searchWeatherApi;
