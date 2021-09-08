import Element from "./components/element";
import './style.css';


let data;

async function fetchData() {
  try {
    const query = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=dublin,ie&APPID=8c1ae38c1f691f86ab506d5f47eecb0a"
    );
    const result = await query.json();
    data = result;
    return;
  } catch (error) {
    return "Ooops!";
  }
}

fetchData().then(() => {
  console.log(data.weather[0].description)
  const todaysForecast = new Element("h1", ".weatherStatus", "section", ` `);

})
