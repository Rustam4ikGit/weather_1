window.addEventListener('load', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY') 
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayWeather(data);
    })
});

function displayWeather(weatherData) {
  let weatherContainer = document.getElementById('weather-container');

  let countries = ['Russia', 'USA', 'China', 'Uzbekistan']; 

  countries.forEach(function (country) {
    let weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    let countryTitle = document.createElement('h2');
    countryTitle.textContent = country;

    let temperature = document.createElement('p');
    temperature.textContent = 'Температура: ' + Math.round(weatherData.main.temp - 273.15) + '°C';

    let humidity = document.createElement('p');
    humidity.textContent = 'Влажность: ' + weatherData.main.humidity + '%';z

    weatherCard.appendChild(countryTitle);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(humidity);

    weatherContainer.appendChild(weatherCard);
  });
}