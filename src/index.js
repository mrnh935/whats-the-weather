function displayWeather(response) {
  let temperatureInput = document.querySelector("#city-temp");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city-name");

  temperatureInput.innerHTML = `${temperature}`;
  cityElement.innerHTML = response.data.city;

  let detailInput = document.querySelector("#current-details");
  let pressure = Math.round(response.data.temperature.pressure);
  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);

  detailInput.innerHTML = `Pressure: <strong>${pressure}</strong> Humidity: <strong>${humidity}%</strong> Wind: <strong>${wind} mps</strong>`;
}

function newCity(city) {
  let apiKey = "3af237t6810483eo486b71736a808a31";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  newCity(searchInput.value);
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", handleSearchSubmit);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[day];

  let currentDate = date.getDate();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentMonth = months[date.getMonth()];

  return `${currentDay} ${currentDate} ${currentMonth} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#city-date");
let showDate = new Date();

currentDateElement.innerHTML = formatDate(showDate);

newCity("Amsterdam");
