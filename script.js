const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '647d198430mshadc1e5f70dbdd11p150f7djsn7b636b157f5b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
let input = 72758;
let time = new Date();
let currentTemp, currentHumidity, windSpeed, windDirection, cityName, stateName, condition, iconSrc;
fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`, options)
    .then(response => response.json())
    .then(function (response) {
        console.log(response);
        currentTemp = response.current.temp_f;
        console.log(currentTemp)
        console.log(response.current.temp_f)
        console.log(response)
        currentHumidity = response.current.humidity;
        windDirection = response.current.wind_dir;
        windSpeed = response.current.wind_mph;
        cityName = response.location.name;
        stateName = response.location.region;
        condition = response.current.condition.text;
        iconSrc = response.current.condition.icon;
        displayWeather();
    })
    .catch(err => console.error(err));

// function displayWeather() {
//     console.log(`Wind from ${windDirection} at ${windSpeed}mph with a temp of ${currentTemp} and a humidity of ${currentHumidity}%`);

// }

function displayWeather() {
    document.getElementById('appData')

    $('#appData').prepend(
        `<div class="container">
        <div class="row justify-content-center">
       
        <div class="col-4">
    <div class = "bg-dark text-light border border-dark border-1 rounded-5 m-3 p-2 shadow text-center">
    <h2>Current Weather for <br>${cityName}, ${stateName}</h2>
    <img src="${iconSrc}" class="img-thumbnail border border-1 shadow">
    <h6 class="lead">${time.toLocaleTimeString()}</h6>
    <h6 class="lead">Current Conditions ${condition}</h6>
    <h6 class="lead">Temp ${currentTemp}ºF</h6>
    <h6 class="lead">Humidity ${currentHumidity}%</h6>
    <h6 class="lead">Wind "${windDirection}" at ${windSpeed}mph</h6>
    </div>
    
    </div>
    </div>
    `   )
}