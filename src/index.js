function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", handleSearchSubmit);
