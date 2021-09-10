function displayResult(currentData, fullForecastData, weeklyData, countries) {
  // DOM Cache
  const todaysForecastH2 = document.querySelector(".todays-forecast");
  const locationSelector = document.querySelector(".location");
  const dateSelector = document.querySelector(".date");
  const timeSelector = document.querySelector(".time");
  const temperatureSelector = document.querySelector(".temperature");
  const weatherIconSelector = document.querySelector(".weather-icon");

  // Location
  let locationObj = countries.find(
    ({ Code }) => Code == currentData.sys.country
  );
  todaysForecastH2.textContent = currentData.weather[0].description;
  locationSelector.textContent = `${currentData.name}, ${locationObj.Name}`;

  // Date
  let epochDate = fullForecastData.minutely[0].dt;
  let timezoneOffset = fullForecastData.timezone_offset;
  let timezoneAdjustedDate = new Date((epochDate + timezoneOffset) * 1000);
  let hour = timezoneAdjustedDate.getHours();
  let minutes = timezoneAdjustedDate.getMinutes();
  let day = `${timezoneAdjustedDate.getDate()}, ${weeklyData[0].nameOfDay}`;
  let month = timezoneAdjustedDate.toLocaleString("default", { month: "short" });
  let year = timezoneAdjustedDate.getFullYear().toString().slice(2,)

  let dateStr = `${day} ${month} '${year} `;
  let timeStr = `${hour}:${minutes}`;
  
  dateSelector.innerHTML = `${dateStr} <br> ${timeStr}`


  
  console.log(fullForecastData);
  console.log(dateStr, timeStr);
}

export default displayResult;
